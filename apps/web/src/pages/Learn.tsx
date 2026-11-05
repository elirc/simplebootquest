import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router';
import type { ChapterSummary, QuestSummary, SearchResult, TrackSummary } from '@sbq/shared';
import { api } from '../api';
import { useAuth } from '../auth';
import { ErrorBox } from '../components/ErrorBox';
import { Spinner } from '../components/Spinner';
import { StatusIcon, TypeIcon } from '../components/StatusIcon';
import { useAsync } from '../components/useAsync';
import { XpBar } from '../components/XpBar';

/** Progress through a chapter's core quests (practice is optional). */
export function chapterProgress(chapter: Pick<ChapterSummary, 'coreTotal' | 'coreCompleted'>) {
  const { coreCompleted: done, coreTotal: total } = chapter;
  return { done, total, percent: total ? Math.round((done / total) * 100) : 100 };
}

export function trackProgress(track: TrackSummary) {
  const done = track.chapters.reduce((s, c) => s + c.coreCompleted, 0);
  const total = track.chapters.reduce((s, c) => s + c.coreTotal, 0);
  const all = track.chapters.reduce((s, c) => s + c.total, 0);
  return { done, total, all, xp: track.chapters.reduce((s, c) => s + c.xp, 0), percent: total ? Math.round((done / total) * 100) : 0 };
}

export function nextQuest(track: TrackSummary): QuestSummary | undefined {
  return track.chapters.find((c) => c.next)?.next ?? undefined;
}

export function QuestRow({ quest }: { quest: QuestSummary }) {
  return (
    <li>
      <Link to={`/learn/${quest.chapterSlug}/${quest.slug}`} className={`quest-row${quest.boss ? ' quest-row-boss' : ''}`}>
        <StatusIcon status={quest.status} />
        <TypeIcon type={quest.type} boss={quest.boss} />
        <span className="quest-row-title">{quest.title}</span>
        {quest.optional && <span className="tag">practice</span>}
        <span className="xp-pill">+{quest.xp} XP</span>
      </Link>
    </li>
  );
}

/** Search every quest in every track (server-side, debounced). */
function QuestSearch() {
  const [q, setQ] = useState('');
  const [results, setResults] = useState<SearchResult[] | null>(null);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const query = q.trim();
    if (query.length < 2) {
      setResults(null);
      return;
    }
    let ignore = false;
    const timer = setTimeout(() => {
      api
        .search(query)
        .then((r) => {
          if (!ignore) {
            setResults(r.results);
            setTotal(r.total);
          }
        })
        .catch(() => !ignore && setResults([]));
    }, 250);
    return () => {
      ignore = true;
      clearTimeout(timer);
    };
  }, [q]);

  return (
    <div className="quest-search">
      <label htmlFor="quest-search" className="sr-only">
        Search quests
      </label>
      <input
        id="quest-search"
        type="search"
        placeholder="Search all quests: 'useEffect', 'JOIN', 'middleware'…"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        autoComplete="off"
      />
      {results && (
        <div className="card search-results" aria-live="polite">
          {results.length === 0 ? (
            <p className="muted">No quests match "{q.trim()}".</p>
          ) : (
            <>
              <p className="muted">
                {total > results.length ? `Top ${results.length} of ${total} matches` : `${total} match${total === 1 ? '' : 'es'}`}
              </p>
              <ul className="quest-list">
                {results.map((r) => (
                  <li key={r.slug}>
                    <Link to={`/learn/${r.chapterSlug}/${r.slug}`} className="quest-row">
                      <StatusIcon status={r.status} />
                      <TypeIcon type={r.type} boss={r.boss} />
                      <span className="quest-row-title">
                        {r.title}
                        <small className="muted"> · {r.trackTitle} › {r.chapterTitle}</small>
                      </span>
                      {r.optional && <span className="tag">practice</span>}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </div>
  );
}

/** "Review" prompt: spaced repetition of quests finished a few days ago. */
function ReviewPrompt() {
  const { state } = useAsync(() => api.review(), []);
  if (!state.data || state.data.items.length === 0) return null;
  const { items, dueCount } = state.data;
  return (
    <section className="card review">
      <h2>🔁 Review time</h2>
      <p className="muted">
        {dueCount} quest{dueCount === 1 ? ' is' : 's are'} due for review. Re-solving something you learned a few days ago is the fastest way to make it
        stick. No XP, just stronger memory.
      </p>
      <ul className="quest-list">
        {items.map((q) => (
          <li key={q.slug}>
            <Link to={`/learn/${q.chapterSlug}/${q.slug}`} className="quest-row">
              <TypeIcon type={q.type} boss={q.boss} />
              <span className="quest-row-title">
                {q.title}
                <small className="muted"> · {q.chapterTitle}</small>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function LearnPage() {
  const { user } = useAuth();
  const { state, reload } = useAsync(() => api.curriculum(), [user?.id]);
  const [params, setParams] = useSearchParams();

  if (state.status === 'error' && !state.data) return <ErrorBox message={state.error.message} onRetry={reload} />;
  if (!state.data) return <Spinner label="Loading the curriculum…" />;

  const { tracks, resume } = state.data;
  const track = tracks.find((t) => t.slug === params.get('track')) ?? tracks[0]!;
  const next = nextQuest(track);
  const p = trackProgress(track);

  return (
    <div className="learn">
      <QuestSearch />

      {resume && (
        <Link to={`/learn/${resume.chapterSlug}/${resume.slug}`} className="card resume">
          <span className="muted">{resume.reason === 'in_progress' ? 'Pick up where you left off' : 'Up next'}</span>
          <strong>{resume.title} →</strong>
        </Link>
      )}

      {user && <ReviewPrompt />}

      <nav className="track-tabs" role="tablist" aria-label="Tracks">
        {tracks.map((t) => {
          const tp = trackProgress(t);
          return (
            <button
              key={t.slug}
              role="tab"
              aria-selected={t.slug === track.slug}
              className="track-tab"
              onClick={() => setParams(t.slug === tracks[0]!.slug ? {} : { track: t.slug })}
            >
              <span className="track-icon" aria-hidden="true">
                {t.icon}
              </span>
              <span>
                <strong>{t.title}</strong>
                <small className="muted">
                  {tp.done}/{tp.total} core quests
                </small>
              </span>
            </button>
          );
        })}
      </nav>

      <section className="card learn-header">
        <div>
          <h1>
            {track.icon} {track.title}
          </h1>
          <p className="muted">{track.description}</p>
          <p className="muted">
            {p.done} of {p.total} core quests complete · {p.all - p.total} optional practice quests · {p.xp} XP available
          </p>
          {user ? <XpBar xp={user.xp} /> : <p><Link to="/register">Create a free account</Link> to save your progress and earn XP.</p>}
        </div>
        {next && (
          <Link to={`/learn/${next.chapterSlug}/${next.slug}`} className="btn btn-primary btn-lg">
            {p.done === 0 ? 'Start' : 'Continue'}: {next.title} →
          </Link>
        )}
      </section>

      <div className="chapter-grid">
        {track.chapters.map((chapter) => {
          const cp = chapterProgress(chapter);
          return (
            <article key={chapter.slug} className="card chapter-card">
              <header>
                <span className="chapter-number">Chapter {chapter.number}</span>
                <h2>
                  <Link to={`/learn/${chapter.slug}`}>{chapter.title}</Link>
                </h2>
                <p className="muted">{chapter.description}</p>
                <div className="progress" role="progressbar" aria-valuenow={cp.percent} aria-valuemin={0} aria-valuemax={100} aria-label={`${chapter.title} progress`}>
                  <div className="progress-fill" style={{ width: `${cp.percent}%` }} />
                </div>
                <small className="muted">
                  {cp.done}/{cp.total} core complete
                  {chapter.total > chapter.coreTotal && ` · ${chapter.total - chapter.coreTotal} practice`}
                </small>
              </header>
              <ul className="quest-list">
                {chapter.preview.map((q) => (
                  <QuestRow key={q.slug} quest={q} />
                ))}
              </ul>
              <Link to={`/learn/${chapter.slug}`} className="see-all">
                See all {chapter.total} quests →
              </Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}
