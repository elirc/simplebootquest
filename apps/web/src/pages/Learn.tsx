import { Link, useSearchParams } from 'react-router';
import type { ChapterSummary, QuestSummary, TrackSummary } from '@sbq/shared';
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

export function nextQuest(track: TrackSummary): QuestSummary | undefined {
  return track.chapters.flatMap((c) => c.quests).find((q) => q.status !== 'completed');
}

export function trackProgress(track: TrackSummary) {
  const quests = track.chapters.flatMap((c) => c.quests);
  const done = quests.filter((q) => q.status === 'completed').length;
  return { done, total: quests.length, xp: quests.reduce((s, q) => s + q.xp, 0), percent: quests.length ? Math.round((done / quests.length) * 100) : 0 };
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
  const [params, setParams] = useSearchParams();

  if (state.status === 'error' && !state.data) return <ErrorBox message={state.error.message} onRetry={reload} />;
  if (!state.data) return <Spinner label="Loading the curriculum…" />;

  const { tracks } = state.data;
  const track = tracks.find((t) => t.slug === params.get('track')) ?? tracks[0]!;
  const next = nextQuest(track);
  const p = trackProgress(track);

  return (
    <div className="learn">
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
                  {tp.done}/{tp.total} quests
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
            {p.done} of {p.total} quests complete · {p.xp} XP available
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
                  {cp.done}/{cp.total} complete
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
