import { Link } from 'react-router';
import { api } from '../api';
import { useAuth } from '../auth';
import { useAsync } from '../components/useAsync';

const FEATURES = [
  { icon: '⌨️', title: 'Write real code', body: 'Every lesson ends with code you write in the browser. Tests check it instantly.' },
  { icon: '🎯', title: 'One focused path', body: 'No sprawling catalogue — just the stack for shipping full-stack CRUD apps.' },
  { icon: '🛠️', title: 'Build real projects', body: 'Boss projects build your own app, step by step, from database to deploy.' },
  { icon: '🔥', title: 'Stay motivated', body: 'Earn XP, level up, keep your streak alive and unlock achievements.' },
];

export function HomePage() {
  const { user } = useAuth();
  const { state } = useAsync(() => api.curriculum(), []);

  return (
    <div className="home">
      <section className="hero">
        <p className="eyebrow">Full-stack JavaScript · TypeScript · Node · React · PostgreSQL</p>
        <h1>
          Learn to build full-stack web apps.
          <br />
          <span className="accent">One quest at a time.</span>
        </h1>
        <p className="lead">
          A focused, hands-on path from your first variable to a deployed CRUD app with auth, a database and a React frontend.
        </p>
        <div className="hero-actions">
          <Link to={user ? '/learn' : '/register'} className="btn btn-primary btn-lg">
            {user ? 'Continue learning' : 'Start for free'}
          </Link>
          <Link to="/learn" className="btn btn-secondary btn-lg">
            Browse the curriculum
          </Link>
        </div>
        <pre className="hero-code" aria-hidden="true">
          <code>{`test('creates a todo', async () => {
  const res = await api.post('/todos').send({ title: 'Ship it' });
  expect(res.status).toBe(201);   ✓ passed  +25 XP
});`}</code>
        </pre>
      </section>

      <section className="features">
        {FEATURES.map((f) => (
          <article key={f.title} className="card feature">
            <span className="feature-icon" aria-hidden="true">
              {f.icon}
            </span>
            <h3>{f.title}</h3>
            <p>{f.body}</p>
          </article>
        ))}
      </section>

      <section className="path">
        <h2>Three tracks, one goal</h2>
        <p className="muted center">Start with the Full-Stack Path. Dip into System Design and Agentic Engineering whenever you like.</p>
        {state.data ? (
          <div className="track-overview">
            {state.data.tracks.map((t) => (
              <article key={t.slug} className="card">
                <h3>
                  <span aria-hidden="true">{t.icon}</span> {t.title}
                </h3>
                <p className="muted">{t.description}</p>
                <ol className="path-list">
                  {t.chapters.map((c) => (
                    <li key={c.slug}>
                      <Link to={`/learn/${c.slug}`} className="path-item">
                        <span className="path-number">{c.number}</span>
                        <span>
                          <strong>{c.title}</strong>
                        </span>
                        <span className="muted path-count">{c.quests.length} quests</span>
                      </Link>
                    </li>
                  ))}
                </ol>
              </article>
            ))}
          </div>
        ) : (
          <p className="muted">Loading the curriculum…</p>
        )}
      </section>
    </div>
  );
}
