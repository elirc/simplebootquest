import type { LevelProgress } from './types.js';

/**
 * XP needed to *reach* a level. Level 1 starts at 0 XP and each level costs
 * 50 XP more than the previous one (100, 150, 200, ...), giving cumulative
 * thresholds of 0, 100, 250, 450, 700, ...
 *
 * Closed form: with n = level - 1, the sum of 100 + 150 + ... over n terms is
 * 25 * n * (n + 3).
 */
export function xpForLevel(level: number): number {
  if (level <= 1) return 0;
  const n = level - 1;
  return 25 * n * (n + 3);
}

export function levelForXp(xp: number): number {
  let level = 1;
  while (xpForLevel(level + 1) <= xp) level++;
  return level;
}

export function levelProgress(xp: number): LevelProgress {
  const level = levelForXp(xp);
  const start = xpForLevel(level);
  const end = xpForLevel(level + 1);
  const xpIntoLevel = xp - start;
  const xpForNextLevel = end - start;
  return {
    level,
    xpIntoLevel,
    xpForNextLevel,
    percent: Math.floor((xpIntoLevel / xpForNextLevel) * 100),
  };
}

/** Pure streak calculation, using UTC calendar days ("YYYY-MM-DD"). */
export function nextStreak(
  current: number,
  lastActiveDate: string | null,
  today: string,
): number {
  if (lastActiveDate === today) return Math.max(current, 1);
  if (lastActiveDate && daysBetween(lastActiveDate, today) === 1) return current + 1;
  return 1;
}

/**
 * The streak to *display*. The stored streak is only rewritten when a quest is
 * completed, so a learner who stopped five days ago would still see their old
 * number. A streak is alive only if the last activity was today or yesterday.
 */
export function effectiveStreak(streak: number, lastActiveDate: string | null, today: string): number {
  if (!lastActiveDate) return 0;
  const gap = daysBetween(lastActiveDate, today);
  return gap <= 1 ? streak : 0;
}

/** Spaced review intervals in days: review after 3 days, then 7, 21, 60. */
export const REVIEW_INTERVALS_DAYS = [3, 7, 21, 60] as const;

/** When a completed quest is next due for review, or null once it has graduated. */
export function reviewDueAt(lastPractised: Date, reviews: number): Date | null {
  const days = REVIEW_INTERVALS_DAYS[reviews];
  if (days === undefined) return null;
  return new Date(lastPractised.getTime() + days * 86_400_000);
}

export function toUtcDay(date: Date): string {
  return date.toISOString().slice(0, 10);
}

function daysBetween(a: string, b: string): number {
  const ms = Date.parse(`${b}T00:00:00Z`) - Date.parse(`${a}T00:00:00Z`);
  return Math.round(ms / 86_400_000);
}
