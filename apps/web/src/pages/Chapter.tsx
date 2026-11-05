import { useState } from 'react';
import { Link, useParams } from 'react-router';
import type { QuestSummary } from '@sbq/shared';
import { api } from '../api';
import { useAuth } from '../auth';
import { ErrorBox } from '../components/ErrorBox';
import { Markdown } from '../components/Markdown';
import { Spinner } from '../components/Spinner';
import { useAsync } from '../components/useAsync';
import { NotFoundPage } from './NotFound';
import { chapterProgress, QuestRow } from './Learn';

const CORE = 'Core';

/** Group quests by section, keeping the order sections first appear in. Core comes first. */
export function groupBySection(quests: QuestSummary[]): { name: string; quests: QuestSummary[] }[] {
  const groups = new Map<string, QuestSummary[]>();
  groups.set(CORE, []);
  for (const q of quests) {
    const name = q.section ?? (q.optional ? 'Practice' : CORE);
    if (!groups.has(name)) groups.set(name, []);
    groups.get(name)!.push(q);
  }
  return [...groups].filter(([, qs]) => qs.length > 0).map(([name, qs]) => ({ name, quests: qs }));
}

/** A collapsible practice section. The list only renders when opened, so huge sections stay cheap. */
function Section({ name, quests, defaultOpen, filter }: { name: string; quests: QuestSummary[]; defaultOpen: boolean; filter: 'all' | 'todo' }) {
  const [open, setOpen] = useState(defaultOpen);
  const done = quests.filter((q) => q.status === 'completed').length;
  const shown = filter === 'todo' ? quests.filter((q) => q.status !== 'completed') : quests;
  return (
    <details className="card section" open={open} onToggle={(e) => setOpen((e.currentTarget as HTMLDetailsElement).open)}>
      <summary>
        <strong>{name}</strong>
        <span className="muted">
          {' '}
          · {done}/{quests.length} done{name !== CORE && ' · optional'}
        </span>
      </summary>
      {open && (
        <ul className="quest-list quest-list-large">
          {shown.map((q) => (
            <QuestRow key={q.slug} quest={q} />
          ))}
          {shown.length === 0 && <li className="muted">Everything here is done. 🎉</li>}
        </ul>
      )}
    </details>
  );
}

export function ChapterPage() {
  const { chapterSlug = '' } = useParams();
  const { user } = useAuth();
  const [filter, setFilter] = useState<'all' | 'todo'>('all');
  const { state, reload } = useAsync(() => Promise.all([api.curriculum(), api.chapter(chapterSlug)]), [chapterSlug, user?.id]);

  if (state.status === 'error' && !state.data) {
    if ('status' in state.error && state.error.status === 404) return <NotFoundPage />;
    return <ErrorBox message={state.error.message} onRetry={reload} />;
  }
  if (!state.data) return <Spinner />;

  const [curriculum, chapter] = state.data;
  const track = curriculum.tracks.find((t) => t.slug === chapter.trackSlug);
  if (!track) return <NotFoundPage />;
  const p = chapterProgress(chapter);
  const index = track.chapters.findIndex((c) => c.slug === chapter.slug);
  const prev = track.chapters[index - 1];
  const next = track.chapters[index + 1];
  const trackLink = track.slug === curriculum.tracks[0]?.slug ? '/learn' : `/learn?track=${track.slug}`;
  const sections = groupBySection(chapter.quests);

  return (
    <div className="chapter-page">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link to="/learn">Learn</Link> / <Link to={trackLink}>{track.title}</Link> / <span>Chapter {chapter.number}</span>
      </nav>
      <header className="card">
        <span className="chapter-number">Chapter {chapter.number}</span>
        <h1>{chapter.title}</h1>
        <Markdown>{chapter.intro || chapter.description}</Markdown>
        <div className="progress" role="progressbar" aria-valuenow={p.percent} aria-valuemin={0} aria-valuemax={100} aria-label="Chapter progress">
          <div className="progress-fill" style={{ width: `${p.percent}%` }} />
        </div>
        <small className="muted">
          {p.done}/{p.total} core quests complete
          {chapter.total > chapter.coreTotal && ` · ${chapter.total - chapter.coreTotal} optional practice quests for extra reps`} · {chapter.xp} XP
        </small>
      </header>
      <div className="filter-bar" role="group" aria-label="Filter quests">
        <button className={`btn btn-sm ${filter === 'all' ? 'btn-primary' : 'btn-ghost'}`} aria-pressed={filter === 'all'} onClick={() => setFilter('all')}>
          All
        </button>
        <button className={`btn btn-sm ${filter === 'todo' ? 'btn-primary' : 'btn-ghost'}`} aria-pressed={filter === 'todo'} onClick={() => setFilter('todo')}>
          Not done yet
        </button>
      </div>
      {sections.map((s) => (
        <Section key={s.name} name={s.name} quests={s.quests} defaultOpen={s.name === CORE || sections.length === 1} filter={filter} />
      ))}
      <nav className="pager">
        {prev ? <Link to={`/learn/${prev.slug}`}>← {prev.title}</Link> : <span />}
        {next ? <Link to={`/learn/${next.slug}`}>{next.title} →</Link> : <span />}
      </nav>
    </div>
  );
}
