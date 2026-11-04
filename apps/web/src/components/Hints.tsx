import { useState } from 'react';
import { Markdown } from './Markdown';

/** Progressive hints: reveal one at a time, so learners get just enough help. */
export function Hints({ hints }: { hints: string[] }) {
  const [shown, setShown] = useState(0);
  if (hints.length === 0) return null;
  return (
    <section className="hints">
      <h3>Hints</h3>
      {hints.slice(0, shown).map((hint, i) => (
        <div key={i} className="hint">
          <span className="hint-label">Hint {i + 1}</span>
          <Markdown>{hint}</Markdown>
        </div>
      ))}
      {shown < hints.length && (
        <button className="btn btn-secondary btn-sm" onClick={() => setShown((n) => n + 1)}>
          {shown === 0 ? 'Show a hint' : 'Show another hint'} ({shown}/{hints.length})
        </button>
      )}
    </section>
  );
}

export function Resources({ resources }: { resources: { title: string; url: string }[] }) {
  if (resources.length === 0) return null;
  return (
    <section className="resources">
      <h3>Go deeper</h3>
      <ul>
        {resources.map((r) => (
          <li key={r.url}>
            <a href={r.url} target="_blank" rel="noreferrer">
              {r.title} ↗
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
