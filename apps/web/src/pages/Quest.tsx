import { useCallback, useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router';
import type { CompletionResult, QuestDetail } from '@sbq/shared';
import type { RunResult } from '@sbq/runner';
import { api, ApiError, type QuizResponse } from '../api';
import { useAuth } from '../auth';
import { CodeEditor } from '../components/CodeEditor';
import { ErrorBox } from '../components/ErrorBox';
import { Hints, Resources } from '../components/Hints';
import { Markdown } from '../components/Markdown';
import { Spinner } from '../components/Spinner';
import { TestResults } from '../components/TestResults';
import { useToast } from '../components/Toasts';
import { useAsync } from '../components/useAsync';
import { runInWorker } from '../runner/runInWorker';
import { NotFoundPage } from './NotFound';

/** Shared reaction to completing a quest: update XP in the header, celebrate. */
function useCelebrate() {
  const { setUser } = useAuth();
  const toast = useToast();
  return useCallback(
    (result: CompletionResult) => {
      if (result.user) setUser(result.user);
      if (result.xpAwarded > 0) toast({ icon: '⭐', title: `+${result.xpAwarded} XP`, body: 'Quest complete!' });
      for (const a of result.newAchievements) toast({ icon: a.icon, title: `Achievement unlocked: ${a.title}`, body: a.description });
    },
    [setUser, toast],
  );
}

function GuestBanner() {
  return (
    <p className="banner">
      You're exploring as a guest. <Link to="/register">Create an account</Link> or <Link to="/login">log in</Link> to save your code and
      earn XP.
    </p>
  );
}

function CodeQuest({ quest, onCompleted }: { quest: QuestDetail; onCompleted: () => void }) {
  const { user } = useAuth();
  const celebrate = useCelebrate();
  const [code, setCode] = useState(quest.code ?? '');
  const [result, setResult] = useState<RunResult | null>(null);
  const [running, setRunning] = useState(false);
  const [solution, setSolution] = useState<string | null>(null);
  const [solutionAvailable, setSolutionAvailable] = useState(quest.solutionAvailable);
  const [tab, setTab] = useState<'results' | 'tests' | 'solution'>('results');
  const lastSaved = useRef(quest.code ?? '');

  // Autosave drafts (debounced) for logged-in learners.
  useEffect(() => {
    if (!user || code === lastSaved.current) return;
    const timer = setTimeout(() => {
      api.saveDraft(quest.slug, code).then(() => (lastSaved.current = code)).catch(() => {});
    }, 1500);
    return () => clearTimeout(timer);
  }, [code, user, quest.slug]);

  async function run() {
    setRunning(true);
    setTab('results');
    try {
      const r = await runInWorker({ language: quest.language!, code, tests: quest.tests ?? '', setup: quest.setup });
      setResult(r);
      if (user) {
        const submission = await api.submitCode(quest.slug, code, r.passed);
        lastSaved.current = code;
        if (submission.solutionAvailable) setSolutionAvailable(true);
        if (submission.completed) {
          setSolutionAvailable(true);
          celebrate(submission);
          onCompleted();
        }
      }
    } catch (err) {
      setResult({ passed: false, results: [], logs: [], error: err instanceof Error ? err.message : String(err), durationMs: 0 });
    } finally {
      setRunning(false);
    }
  }

  async function showSolution() {
    setTab('solution');
    if (solution !== null) return;
    try {
      setSolution((await api.solution(quest.slug)).solution);
    } catch (err) {
      setSolution(`// ${err instanceof ApiError ? err.message : 'Could not load the solution'}`);
    }
  }

  return (
    <div className="workbench">
      <div className="workbench-toolbar">
        <span className="lang-badge">{quest.language?.toUpperCase()}</span>
        <button
          className="btn btn-ghost btn-sm"
          onClick={() => {
            if (confirm('Reset your code to the starter? Your current code will be lost.')) setCode(quest.starter ?? '');
          }}
        >
          Reset
        </button>
        <span className="spacer" />
        <kbd className="muted">Ctrl/⌘ + Enter</kbd>
        <button className="btn btn-primary" onClick={run} disabled={running}>
          {running ? 'Running…' : quest.status === 'completed' ? 'Run tests again' : 'Run tests'}
        </button>
      </div>
      <div
        className="workbench-editor"
        onKeyDown={(e) => {
          if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
            e.preventDefault();
            if (!running) run();
          }
        }}
      >
        <CodeEditor value={code} onChange={setCode} language={quest.language!} label="Your code" />
      </div>
      <div className="workbench-output">
        <div className="tabs" role="tablist">
          <button role="tab" aria-selected={tab === 'results'} onClick={() => setTab('results')}>
            Results
          </button>
          <button role="tab" aria-selected={tab === 'tests'} onClick={() => setTab('tests')}>
            Tests
          </button>
          {user && (
            <button
              role="tab"
              aria-selected={tab === 'solution'}
              disabled={!solutionAvailable}
              title={solutionAvailable ? 'Compare with the reference solution' : 'Unlocks after 3 attempts or when you complete the quest'}
              onClick={showSolution}
            >
              Solution {solutionAvailable ? '' : '🔒'}
            </button>
          )}
        </div>
        <div className="tab-panel">
          {tab === 'results' &&
            (result ? <TestResults result={result} /> : <p className="muted">Run the tests to see how your code does. Failing is part of learning!</p>)}
          {tab === 'tests' && <CodeEditor value={quest.tests ?? ''} language={quest.language === 'sql' ? 'js' : quest.language!} readOnly label="Tests" />}
          {tab === 'solution' &&
            (solution === null ? (
              <Spinner />
            ) : (
              <>
                <p className="muted">There's always more than one right answer. Compare approaches — what's different from yours?</p>
                <CodeEditor value={solution} language={quest.language!} readOnly label="Reference solution" />
              </>
            ))}
        </div>
      </div>
    </div>
  );
}

function QuizQuest({ quest, onCompleted }: { quest: QuestDetail; onCompleted: () => void }) {
  const { user } = useAuth();
  const celebrate = useCelebrate();
  const questions = quest.questions ?? [];
  const [answers, setAnswers] = useState<(number | null)[]>(() => questions.map(() => null));
  const [result, setResult] = useState<QuizResponse | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function submit() {
    setSubmitting(true);
    setError(null);
    try {
      const r = await api.submitQuiz(quest.slug, answers.map((a) => a ?? -1));
      setResult(r);
      if (r.completed) {
        celebrate(r);
        onCompleted();
      }
    } catch (err) {
      setError(err instanceof ApiError ? err.message : 'Something went wrong');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="quiz">
      {questions.map((q, i) => {
        const verdict = result ? (result.correct[i] ? 'correct' : 'incorrect') : null;
        return (
          <fieldset key={i} className={`card quiz-question ${verdict ?? ''}`}>
            <legend>
              <span className="muted">Question {i + 1}</span>
              <Markdown>{q.prompt}</Markdown>
            </legend>
            {q.options.map((option, j) => (
              <label key={j} className={`quiz-option${answers[i] === j ? ' selected' : ''}`}>
                <input
                  type="radio"
                  name={`q${i}`}
                  checked={answers[i] === j}
                  onChange={() => {
                    setAnswers((a) => a.map((v, k) => (k === i ? j : v)));
                    setResult(null);
                  }}
                />
                <Markdown>{option}</Markdown>
              </label>
            ))}
            {verdict === 'incorrect' && <p className="quiz-feedback">Not quite — re-read the lesson and try again.</p>}
            {verdict === 'correct' && result?.explanations[i] && <p className="quiz-feedback ok">✓ {result.explanations[i]}</p>}
          </fieldset>
        );
      })}
      {error && <ErrorBox message={error} />}
      {result && (
        <p className={`quiz-score ${result.completed ? 'ok' : 'fail'}`} aria-live="polite">
          {result.completed ? `🎉 ${result.score}/${questions.length} — perfect!` : `${result.score}/${questions.length} correct. Fix the highlighted questions and resubmit.`}
        </p>
      )}
      {user ? (
        <button className="btn btn-primary btn-lg" onClick={submit} disabled={submitting || answers.some((a) => a === null)}>
          {submitting ? 'Checking…' : 'Check answers'}
        </button>
      ) : (
        <GuestBanner />
      )}
    </div>
  );
}

function ProjectQuest({ quest, onCompleted }: { quest: QuestDetail; onCompleted: () => void }) {
  const { user } = useAuth();
  const celebrate = useCelebrate();
  const storageKey = `sbq:checklist:${quest.slug}`;
  const [checked, setChecked] = useState<boolean[]>(() => {
    try {
      return JSON.parse(localStorage.getItem(storageKey) ?? '[]');
    } catch {
      return [];
    }
  });
  const [repoUrl, setRepoUrl] = useState(quest.repoUrl ?? '');
  const [liveUrl, setLiveUrl] = useState(quest.liveUrl ?? '');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const requirements = quest.requirements ?? [];

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(checked));
    } catch {
      // storage unavailable: the checklist just won't persist
    }
  }, [checked, storageKey]);

  const allChecked = requirements.every((_, i) => checked[i]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setErrors({});
    try {
      const r = await api.submitProject(quest.slug, repoUrl, liveUrl);
      celebrate(r);
      onCompleted();
    } catch (err) {
      setErrors(err instanceof ApiError ? (err.details ?? { _: err.message }) : { _: 'Something went wrong' });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="project">
      <section className="card">
        <h3>Requirements</h3>
        <ul className="checklist">
          {requirements.map((req, i) => (
            <li key={i}>
              <label>
                <input type="checkbox" checked={Boolean(checked[i])} onChange={() => setChecked((c) => requirements.map((_, k) => (k === i ? !c[k] : Boolean(c[k]))))} />
                <Markdown>{req}</Markdown>
              </label>
            </li>
          ))}
        </ul>
        <small className="muted">
          {checked.filter(Boolean).length}/{requirements.length} done — your checklist is saved in this browser.
        </small>
      </section>
      {user ? (
        <form className="card" onSubmit={submit} noValidate>
          <h3>{quest.status === 'completed' ? 'Update your submission' : 'Submit your project'}</h3>
          <div className="field">
            <label htmlFor="repoUrl">Repository URL</label>
            <input id="repoUrl" type="url" placeholder="https://github.com/you/project" value={repoUrl} onChange={(e) => setRepoUrl(e.target.value)} aria-invalid={Boolean(errors.repoUrl)} />
            {errors.repoUrl && <small className="field-error">{errors.repoUrl}</small>}
          </div>
          <div className="field">
            <label htmlFor="liveUrl">Live URL (optional)</label>
            <input id="liveUrl" type="url" placeholder="https://your-app.example.com" value={liveUrl} onChange={(e) => setLiveUrl(e.target.value)} aria-invalid={Boolean(errors.liveUrl)} />
            {errors.liveUrl && <small className="field-error">{errors.liveUrl}</small>}
          </div>
          {errors._ && <p className="form-error">{errors._}</p>}
          {!allChecked && <p className="muted">Tick off every requirement before submitting — be honest with yourself!</p>}
          <button className="btn btn-primary" disabled={submitting || !allChecked || !repoUrl}>
            {submitting ? 'Submitting…' : quest.status === 'completed' ? 'Update' : 'Submit project'}
          </button>
        </form>
      ) : (
        <GuestBanner />
      )}
    </div>
  );
}

export default function QuestPage() {
  const { questSlug = '' } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const { state, reload, setData } = useAsync(() => api.quest(questSlug), [questSlug, user?.id]);

  if (state.status === 'error' && !state.data) {
    if (state.error instanceof ApiError && state.error.status === 404) return <NotFoundPage />;
    return <ErrorBox message={state.error.message} onRetry={reload} />;
  }
  if (!state.data || state.data.slug !== questSlug) return <Spinner label="Loading quest…" />;
  const quest = state.data;
  const markCompleted = () => setData((q) => ({ ...q, status: 'completed', solutionAvailable: true }));

  return (
    <div className={`quest quest-${quest.type}`}>
      <article className="quest-lesson">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link to="/learn">Learn</Link> / <Link to={`/learn/${quest.chapterSlug}`}>{quest.chapterTitle}</Link>
        </nav>
        <div className="quest-meta">
          {quest.boss && <span className="boss-badge">👑 Boss</span>}
          <span className="xp-pill">+{quest.xp} XP</span>
          {quest.status === 'completed' && <span className="done-badge">✓ Completed</span>}
        </div>
        <Markdown>{quest.lesson}</Markdown>
        <Hints hints={quest.hints ?? []} />
        <Resources resources={quest.resources ?? []} />
        <nav className="pager">
          {quest.prev ? <Link to={`/learn/${quest.prev.chapterSlug}/${quest.prev.slug}`}>← {quest.prev.title}</Link> : <span />}
          {quest.next && (
            <button className={`btn ${quest.status === 'completed' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => navigate(`/learn/${quest.next!.chapterSlug}/${quest.next!.slug}`)}>
              Next: {quest.next.title} →
            </button>
          )}
        </nav>
      </article>
      <section className="quest-work">
        {!user && quest.type === 'code' && <GuestBanner />}
        {quest.type === 'code' && <CodeQuest key={quest.slug} quest={quest} onCompleted={markCompleted} />}
        {quest.type === 'quiz' && <QuizQuest key={quest.slug} quest={quest} onCompleted={markCompleted} />}
        {quest.type === 'project' && <ProjectQuest key={quest.slug} quest={quest} onCompleted={markCompleted} />}
      </section>
    </div>
  );
}
