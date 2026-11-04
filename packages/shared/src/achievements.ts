import type { AchievementDefinition } from './types.js';

export interface AchievementContext {
  completedCount: number;
  completedProjects: number;
  completedChapters: number;
  totalChapters: number;
  /** Slugs of tracks where every quest is complete. */
  completedTracks: string[];
  completedDesigns: number;
  streak: number;
  level: number;
  xp: number;
}

interface AchievementRule extends AchievementDefinition {
  earned: (ctx: AchievementContext) => boolean;
}

export const ACHIEVEMENTS: AchievementRule[] = [
  { key: 'first-quest', icon: '🌱', title: 'Hello, World', description: 'Complete your first quest.', earned: (c) => c.completedCount >= 1 },
  { key: 'ten-quests', icon: '🔟', title: 'Getting Warm', description: 'Complete 10 quests.', earned: (c) => c.completedCount >= 10 },
  { key: 'fifty-quests', icon: '⚡', title: 'Unstoppable', description: 'Complete 50 quests.', earned: (c) => c.completedCount >= 50 },
  { key: 'first-project', icon: '🛠️', title: 'Builder', description: 'Ship your first project.', earned: (c) => c.completedProjects >= 1 },
  { key: 'first-chapter', icon: '📘', title: 'Chapter One', description: 'Finish every quest in a chapter.', earned: (c) => c.completedChapters >= 1 },
  { key: 'streak-3', icon: '🔥', title: 'On Fire', description: 'Reach a 3-day streak.', earned: (c) => c.streak >= 3 },
  { key: 'streak-7', icon: '🌋', title: 'Week Warrior', description: 'Reach a 7-day streak.', earned: (c) => c.streak >= 7 },
  { key: 'level-5', icon: '⭐', title: 'Rising Star', description: 'Reach level 5.', earned: (c) => c.level >= 5 },
  { key: 'level-10', icon: '🌟', title: 'Mid-Level Energy', description: 'Reach level 10.', earned: (c) => c.level >= 10 },
  { key: 'first-design', icon: '📐', title: 'On the Whiteboard', description: 'Submit your first design write-up.', earned: (c) => c.completedDesigns >= 1 },
  { key: 'ten-designs', icon: '🏛️', title: 'Design Reviewer', description: 'Submit 10 design write-ups.', earned: (c) => c.completedDesigns >= 10 },
  {
    key: 'graduate',
    icon: '🎓',
    title: 'Full-Stack Graduate',
    description: 'Finish the Full-Stack Path.',
    earned: (c) => c.completedTracks.includes('full-stack'),
  },
  { key: 'architect', icon: '🏗️', title: 'Architect', description: 'Finish the System Design track.', earned: (c) => c.completedTracks.includes('system-design') },
  {
    key: 'agent-wrangler',
    icon: '🤖',
    title: 'Agent Wrangler',
    description: 'Finish the Agentic Engineering track.',
    earned: (c) => c.completedTracks.includes('agentic-engineering'),
  },
];

export function achievementDefinition(key: string): AchievementDefinition | undefined {
  const rule = ACHIEVEMENTS.find((a) => a.key === key);
  if (!rule) return undefined;
  const { earned: _earned, ...def } = rule;
  return def;
}

/** Keys of achievements whose condition holds and that aren't already earned. */
export function newlyEarned(ctx: AchievementContext, alreadyEarned: Iterable<string>): string[] {
  const have = new Set(alreadyEarned);
  return ACHIEVEMENTS.filter((a) => !have.has(a.key) && a.earned(ctx)).map((a) => a.key);
}
