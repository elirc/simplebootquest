import { Link, NavLink, Outlet, useNavigate } from 'react-router';
import { useAuth } from '../auth';
import { XpBar } from './XpBar';

export function Layout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="app">
      <header className="topbar">
        <Link to="/" className="brand">
          <img src="/favicon.svg" alt="" width={28} height={28} />
          <span>SimpleBootQuest</span>
        </Link>
        <nav className="nav">
          <NavLink to="/learn">Learn</NavLink>
          <NavLink to="/leaderboard">Leaderboard</NavLink>
        </nav>
        <div className="topbar-right">
          {user ? (
            <>
              <span className="streak" title="Daily streak">
                🔥 {user.streak}
              </span>
              <XpBar xp={user.xp} compact />
              <NavLink to="/profile" className="avatar" title="Your profile" aria-label="Your profile">
                {user.name.slice(0, 1).toUpperCase()}
              </NavLink>
              <button
                className="btn btn-ghost"
                onClick={async () => {
                  await logout();
                  navigate('/');
                }}
              >
                Log out
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-ghost">
                Log in
              </Link>
              <Link to="/register" className="btn btn-primary">
                Start learning
              </Link>
            </>
          )}
        </div>
      </header>
      <main className="main">
        <Outlet />
      </main>
      <footer className="footer">
        <p>
          SimpleBootQuest · Built with the stack it teaches: TypeScript, React, Node, Express, PostgreSQL ·{' '}
          <a href="https://github.com/elirc/simplebootquest" target="_blank" rel="noreferrer">
            Source &amp; BUILDING.md
          </a>
        </p>
      </footer>
    </div>
  );
}
