import { describe, expect, it } from 'vitest';
import { levelForXp, levelProgress, nextStreak, xpForLevel } from './levels.js';
import { newlyEarned } from './achievements.js';

describe('levels', () => {
  it('has increasing thresholds', () => {
    expect([1, 2, 3, 4, 5].map(xpForLevel)).toEqual([0, 100, 250, 450, 700]);
  });

  it('maps xp to levels at the boundaries', () => {
    expect(levelForXp(0)).toBe(1);
    expect(levelForXp(99)).toBe(1);
    expect(levelForXp(100)).toBe(2);
    expect(levelForXp(249)).toBe(2);
    expect(levelForXp(250)).toBe(3);
  });

  it('reports progress inside a level', () => {
    expect(levelProgress(175)).toEqual({ level: 2, xpIntoLevel: 75, xpForNextLevel: 150, percent: 50 });
  });
});

describe('streaks', () => {
  it('starts at 1', () => expect(nextStreak(0, null, '2026-01-10')).toBe(1));
  it('keeps the streak on the same day', () => expect(nextStreak(4, '2026-01-10', '2026-01-10')).toBe(4));
  it('increments on consecutive days', () => expect(nextStreak(4, '2026-01-09', '2026-01-10')).toBe(5));
  it('works across month boundaries', () => expect(nextStreak(2, '2026-01-31', '2026-02-01')).toBe(3));
  it('resets after a gap', () => expect(nextStreak(9, '2026-01-01', '2026-01-10')).toBe(1));
});

describe('achievements', () => {
  const base = { completedCount: 0, completedProjects: 0, completedChapters: 0, totalChapters: 12, streak: 0, level: 1, xp: 0 };
  it('awards nothing at the start', () => expect(newlyEarned(base, [])).toEqual([]));
  it('awards first quest once', () => {
    expect(newlyEarned({ ...base, completedCount: 1, streak: 1 }, [])).toEqual(['first-quest']);
    expect(newlyEarned({ ...base, completedCount: 1, streak: 1 }, ['first-quest'])).toEqual([]);
  });
});
