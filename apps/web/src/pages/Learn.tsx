import { Link } from 'react-router';
import type { ChapterSummary, Curriculum, QuestSummary } from '@sbq/shared';
import { api } from '../api';
import { useAuth } from '../auth';
import { ErrorBox } from '../components/ErrorBox';
import { Spinner } from '../components/Spinner';
import { StatusIcon, TypeIcon } from '../components/StatusIcon';
import { useAsync } from '../components/useAsync';
import { XpBar } from '../components/XpBar';

export function chapterProgress(chapter: ChapterSummary) {
  const done = chapter.quests.filter((q) => q.status === 'completed').length;
  return { done, total: chapter.quests.length, percent: Math.round((done / chapter.quests.length) * 100) };
}

export function nextQuest(curriculum: Curriculum): QuestSummary | undefined {
  const all = curriculum.chapters.flatMap((c) => c.quests);
  return all.find((q) => q.status !== 'completed');
}

export function QuestRow({ quest }: { quest: QuestSummary }) {
  return (
    <li>
      <Link to={`/learn/${quest.chapterSlug}/${quest.slug}`} className={`quest-row${quest.boss ? ' quest-row-boss' : ''}`}>
        <StatusIcon status={quest.status} />
        <TypeIcon type={quest.type} boss={quest.boss} />
        <span className="quest-row-title">{quest.title}</span>
        <span className="xp-pill">+{quest.xp} XP</span>
      </Link>
    </li>
  );
}

export function LearnPage() {
  const { user } = useAuth();
  const { state, reload } = useAsync(() => api.curriculum(), [user?.id]);

  if (state.status === 'error' && !state.data) return <ErrorBox message={state.error.message} onRetry={reload} />;
  if (!state.data) return <Spinner label="Loading the curriculum…" />;

  const curriculum = state.data;
  const next = nextQuest(curriculum);
  const allQuests = curriculum.chapters.flatMap((c) => c.quests);
  const completed = allQuests.filter((q) => q.status === 'completed').length;

  return (
    <div className="learn">
      <section className="card learn-header">
        <div>
          <h1>{user ? `Welcome back, ${user.name}` : 'The curriculum'}</h1>
          <p className="muted">
            {completed} of {allQuests.length} quests complete · {curriculum.totalXp} XP available
          </p>
          {user ? <XpBar xp={user.xp} /> : <p><Link to="/register">Create a free account</Link> to save your progress and earn XP.</p>}
        </div>
        {next && (
          <Link to={`/learn/${next.chapterSlug}/${next.slug}`} className="btn btn-primary btn-lg">
            {completed === 0 ? 'Start' : 'Continue'}: {next.title} →
          </Link>
        )}
      </section>

      <div className="chapter-grid">
        {curriculum.chapters.map((chapter) => {
          const p = chapterProgress(chapter);
          return (
            <article key={chapter.slug} className="card chapter-card">
              <header>
                <span className="chapter-number">Chapter {chapter.number}</span>
                <h2>
                  <Link to={`/learn/${chapter.slug}`}>{chapter.title}</Link>
                </h2>
                <p className="muted">{chapter.description}</p>
                <div className="progress" role="progressbar" aria-valuenow={p.percent} aria-valuemin={0} aria-valuemax={100} aria-label={`${chapter.title} progress`}>
                  <div className="progress-fill" style={{ width: `${p.percent}%` }} />
                </div>
                <small className="muted">
                  {p.done}/{p.total} complete
                </small>
              </header>
              <ul className="quest-list">
                {chapter.quests.slice(0, 6).map((q) => (
                  <QuestRow key={q.slug} quest={q} />
                ))}
              </ul>
              {chapter.quests.length > 6 && (
                <Link to={`/learn/${chapter.slug}`} className="see-all">
                  See all {chapter.quests.length} quests →
                </Link>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
}
