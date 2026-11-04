import { Link, useParams } from 'react-router';
import { api } from '../api';
import { useAuth } from '../auth';
import { ErrorBox } from '../components/ErrorBox';
import { Markdown } from '../components/Markdown';
import { Spinner } from '../components/Spinner';
import { useAsync } from '../components/useAsync';
import { NotFoundPage } from './NotFound';
import { chapterProgress, QuestRow } from './Learn';

export function ChapterPage() {
  const { chapterSlug = '' } = useParams();
  const { user } = useAuth();
  const { state, reload } = useAsync(
    () => Promise.all([api.curriculum(), api.chapter(chapterSlug)]),
    [chapterSlug, user?.id],
  );

  if (state.status === 'error' && !state.data) {
    if ('status' in state.error && state.error.status === 404) return <NotFoundPage />;
    return <ErrorBox message={state.error.message} onRetry={reload} />;
  }
  if (!state.data) return <Spinner />;

  const [curriculum, intro] = state.data;
  const chapter = curriculum.chapters.find((c) => c.slug === chapterSlug);
  if (!chapter) return <NotFoundPage />;
  const p = chapterProgress(chapter);
  const index = curriculum.chapters.indexOf(chapter);
  const prev = curriculum.chapters[index - 1];
  const next = curriculum.chapters[index + 1];

  return (
    <div className="chapter-page">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link to="/learn">Learn</Link> / <span>Chapter {chapter.number}</span>
      </nav>
      <header className="card">
        <span className="chapter-number">Chapter {chapter.number}</span>
        <h1>{chapter.title}</h1>
        <Markdown>{intro.intro || chapter.description}</Markdown>
        <div className="progress" role="progressbar" aria-valuenow={p.percent} aria-valuemin={0} aria-valuemax={100} aria-label="Chapter progress">
          <div className="progress-fill" style={{ width: `${p.percent}%` }} />
        </div>
        <small className="muted">
          {p.done}/{p.total} quests complete · {chapter.quests.reduce((s, q) => s + q.xp, 0)} XP
        </small>
      </header>
      <ul className="quest-list quest-list-large card">
        {chapter.quests.map((q) => (
          <QuestRow key={q.slug} quest={q} />
        ))}
      </ul>
      <nav className="pager">
        {prev ? <Link to={`/learn/${prev.slug}`}>← {prev.title}</Link> : <span />}
        {next ? <Link to={`/learn/${next.slug}`}>{next.title} →</Link> : <span />}
      </nav>
    </div>
  );
}
