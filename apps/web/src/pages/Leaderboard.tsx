import { api } from '../api';
import { useAuth } from '../auth';
import { ErrorBox } from '../components/ErrorBox';
import { Spinner } from '../components/Spinner';
import { useAsync } from '../components/useAsync';

export function LeaderboardPage() {
  const { user } = useAuth();
  const { state, reload } = useAsync(() => api.leaderboard(), [user?.xp]);

  if (state.status === 'error' && !state.data) return <ErrorBox message={state.error.message} onRetry={reload} />;
  if (!state.data) return <Spinner />;
  const { entries } = state.data;

  return (
    <div className="narrow">
      <h1>Leaderboard</h1>
      <p className="muted">Top learners by XP. Progress over perfection.</p>
      {entries.length === 0 ? (
        <div className="empty-state card">
          <p>No one's on the board yet — be the first!</p>
        </div>
      ) : (
        <table className="table card">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Learner</th>
              <th scope="col">Level</th>
              <th scope="col">XP</th>
              <th scope="col">Streak</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((e) => (
              <tr key={e.rank} className={user?.name === e.name ? 'me' : undefined}>
                <td>{e.rank <= 3 ? ['🥇', '🥈', '🥉'][e.rank - 1] : e.rank}</td>
                <td>{e.name}</td>
                <td>{e.level}</td>
                <td>{e.xp}</td>
                <td>🔥 {e.streak}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
