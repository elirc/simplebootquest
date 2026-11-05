import { useState } from 'react';
import { Link } from 'react-router';
import { api } from '../api';
import { useAuth } from '../auth';
import { ErrorBox } from '../components/ErrorBox';
import { Spinner } from '../components/Spinner';
import { useAsync } from '../components/useAsync';

export function LeaderboardPage() {
  const { user } = useAuth();
  const [period, setPeriod] = useState<'week' | 'all'>('week');
  const { state, reload } = useAsync(() => api.leaderboard(period), [user?.xp, period]);

  return (
    <div className="narrow">
      <h1>Leaderboard</h1>
      <p className="muted">
        {period === 'week' ? 'XP earned in the last 7 days. Everyone starts fresh each week.' : 'All-time XP.'} Progress is self-reported (your code runs in
        your browser), so treat this as friendly motivation, not a ranking of skill.
      </p>
      <div className="filter-bar" role="group" aria-label="Leaderboard period">
        <button className={`btn btn-sm ${period === 'week' ? 'btn-primary' : 'btn-ghost'}`} aria-pressed={period === 'week'} onClick={() => setPeriod('week')}>
          This week
        </button>
        <button className={`btn btn-sm ${period === 'all' ? 'btn-primary' : 'btn-ghost'}`} aria-pressed={period === 'all'} onClick={() => setPeriod('all')}>
          All time
        </button>
      </div>
      {state.status === 'error' && !state.data ? (
        <ErrorBox message={state.error.message} onRetry={reload} />
      ) : !state.data ? (
        <Spinner />
      ) : state.data.entries.length === 0 ? (
        <div className="empty-state card">
          <p>No one's on the board {period === 'week' ? 'this week' : ''} yet. Complete a quest to be the first!</p>
        </div>
      ) : (
        <>
          <table className="table card">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Learner</th>
                <th scope="col">Level</th>
                <th scope="col">{period === 'week' ? 'XP this week' : 'XP'}</th>
                <th scope="col">Streak</th>
              </tr>
            </thead>
            <tbody>
              {state.data.entries.map((e) => (
                <tr key={e.rank} className={e.you ? 'me' : undefined}>
                  <td>{e.rank <= 3 ? ['🥇', '🥈', '🥉'][e.rank - 1] : e.rank}</td>
                  <td>
                    {e.name}
                    {e.you && <span className="tag">you</span>}
                  </td>
                  <td>{e.level}</td>
                  <td>{e.xp}</td>
                  <td>🔥 {e.streak}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {state.data.me && state.data.me.rank > state.data.entries.length && (
            <p className="muted center">
              You're #{state.data.me.rank} with {state.data.me.xp} XP.
            </p>
          )}
        </>
      )}
      {user && (
        <p className="muted center">
          {user.showOnLeaderboard ? 'You appear on this board.' : "You're hidden from this board."} <Link to="/profile">Change in your profile</Link>.
        </p>
      )}
    </div>
  );
}
