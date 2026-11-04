import { levelProgress } from '@sbq/shared';

export function XpBar({ xp, compact = false }: { xp: number; compact?: boolean }) {
  const p = levelProgress(xp);
  return (
    <div className={compact ? 'xpbar xpbar-compact' : 'xpbar'} title={`${p.xpIntoLevel} / ${p.xpForNextLevel} XP to level ${p.level + 1}`}>
      <span className="xpbar-level">Lv {p.level}</span>
      <div className="xpbar-track" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={p.percent} aria-label="Progress to next level">
        <div className="xpbar-fill" style={{ width: `${p.percent}%` }} />
      </div>
      {!compact && (
        <span className="xpbar-text">
          {p.xpIntoLevel}/{p.xpForNextLevel} XP
        </span>
      )}
    </div>
  );
}
