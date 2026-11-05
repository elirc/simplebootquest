import { useState } from 'react';
import { Link } from 'react-router';
import { api } from '../api';
import { useAuth } from '../auth';
import { ErrorBox } from '../components/ErrorBox';
import { Spinner } from '../components/Spinner';
import { useAsync } from '../components/useAsync';
import { XpBar } from '../components/XpBar';

function LeaderboardSetting({ visible }: { visible: boolean }) {
  const { setUser } = useAuth();
  const [saving, setSaving] = useState(false);
  return (
    <label className="setting">
      <input
        type="checkbox"
        checked={visible}
        disabled={saving}
        onChange={async (e) => {
          setSaving(true);
          try {
            setUser((await api.updateSettings({ showOnLeaderboard: e.target.checked })).user);
          } finally {
            setSaving(false);
          }
        }}
      />{' '}
      Show me on the public leaderboard
    </label>
  );
}

export function ProfilePage() {
  const { user } = useAuth();
  const { state, reload } = useAsync(() => api.profile(), [user?.xp]);

  if (state.status === 'error' && !state.data) return <ErrorBox message={state.error.message} onRetry={reload} />;
  if (!state.data) return <Spinner />;
  const p = state.data;

  return (
    <div className="profile">
      <section className="card profile-header">
        <div className="avatar avatar-lg">{p.user.name.slice(0, 1).toUpperCase()}</div>
        <div>
          <h1>{p.user.name}</h1>
          <p className="muted">Learning since {new Date(p.user.createdAt).toLocaleDateString()}</p>
          <XpBar xp={p.user.xp} />
          <LeaderboardSetting visible={user?.showOnLeaderboard ?? p.user.showOnLeaderboard} />
        </div>
      </section>

      <section className="stats">
        <div className="card stat">
          <span className="stat-value">{p.user.level}</span>
          <span className="stat-label">Level</span>
        </div>
        <div className="card stat">
          <span className="stat-value">{p.user.xp}</span>
          <span className="stat-label">Total XP</span>
        </div>
        <div className="card stat">
          <span className="stat-value">
            {p.completedQuests}/{p.totalQuests}
          </span>
          <span className="stat-label">Quests</span>
        </div>
        <div className="card stat">
          <span className="stat-value">🔥 {p.user.streak}</span>
          <span className="stat-label">Streak (best {p.user.longestStreak})</span>
        </div>
      </section>

      <section>
        <h2>Tracks</h2>
        <div className="stats">
          {p.tracks.map((t) => {
            const percent = t.total ? Math.round((t.completed / t.total) * 100) : 0;
            return (
              <Link key={t.slug} to={`/learn?track=${t.slug}`} className="card track-progress">
                <strong>
                  {t.icon} {t.title}
                </strong>
                <div className="progress" role="progressbar" aria-valuenow={percent} aria-valuemin={0} aria-valuemax={100} aria-label={`${t.title} progress`}>
                  <div className="progress-fill" style={{ width: `${percent}%` }} />
                </div>
                <small className="muted">
                  {t.completed}/{t.total} quests
                </small>
              </Link>
            );
          })}
        </div>
      </section>

      <section>
        <h2>Achievements</h2>
        <div className="achievements">
          {p.achievements.map((a) => (
            <div key={a.key} className="card achievement" title={`Earned ${new Date(a.earnedAt).toLocaleDateString()}`}>
              <span className="achievement-icon">{a.icon}</span>
              <strong>{a.title}</strong>
              <small className="muted">{a.description}</small>
            </div>
          ))}
          {p.lockedAchievements.map((a) => (
            <div key={a.key} className="card achievement locked">
              <span className="achievement-icon">🔒</span>
              <strong>{a.title}</strong>
              <small className="muted">{a.description}</small>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Recently completed</h2>
        {p.recent.length === 0 ? (
          <p className="muted">
            Nothing yet. <Link to="/learn">Start your first quest!</Link>
          </p>
        ) : (
          <ul className="quest-list card">
            {p.recent.map((r) => (
              <li key={r.questSlug}>
                <Link to={`/learn/${r.chapterSlug}/${r.questSlug}`} className="quest-row">
                  <span className="status status-done">✓</span>
                  <span className="quest-row-title">{r.title}</span>
                  <span className="muted">{new Date(r.completedAt).toLocaleDateString()}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
