import {
  achievementDefinition,
  levelForXp,
  newlyEarned,
  nextStreak,
  reviewDueAt,
  toUtcDay,
  type AchievementDefinition,
  type CompletionResult,
} from '@sbq/shared';
import type { Curriculum, Quest } from '@sbq/curriculum';
import type { Db } from '../db.ts';
import { toPublicUser } from '../auth.ts';

/** Learners can see the reference solution after this many failed attempts. */
export const ATTEMPTS_BEFORE_SOLUTION = 3;

export interface CompletionInput {
  code?: string;
  repoUrl?: string;
  liveUrl?: string;
}

/**
 * All the rules about progress live here, not in route handlers, so they can
 * be reused (HTTP, scripts, jobs) and tested in one place.
 */
export function createProgressService(db: Db, curriculum: Curriculum, clock: () => Date = () => new Date()) {
  const projectSlugs = new Set(curriculum.quests.filter((q) => q.type === 'project').map((q) => q.slug));
  const designSlugs = new Set(curriculum.quests.filter((q) => q.type === 'design').map((q) => q.slug));

  async function completedSlugs(userId: string): Promise<Set<string>> {
    const rows = await db.questProgress.findMany({
      where: { userId, status: 'COMPLETED' },
      select: { questSlug: true },
    });
    return new Set(rows.map((r) => r.questSlug));
  }

  // A chapter is complete when its *core* quests are done; practice is optional.
  const coreDone = (quests: Quest[], done: Set<string>) => quests.every((q) => q.optional || done.has(q.slug));

  function chaptersCompleted(done: Set<string>): number {
    return curriculum.chapters.filter((c) => coreDone(c.quests, done)).length;
  }

  function tracksCompleted(done: Set<string>): string[] {
    return curriculum.tracks.filter((t) => t.chapters.every((c) => coreDone(c.quests, done))).map((t) => t.slug);
  }

  return {
    completedSlugs,

    /** Record a failed attempt (and keep the code so the learner doesn't lose it). */
    async recordAttempt(userId: string, quest: Quest, code?: string) {
      const progress = await db.questProgress.upsert({
        where: { userId_questSlug: { userId, questSlug: quest.slug } },
        create: { userId, questSlug: quest.slug, attempts: 1, code },
        update: { attempts: { increment: 1 }, ...(code !== undefined ? { code } : {}) },
      });
      return { attempts: progress.attempts, solutionAvailable: progress.status === 'COMPLETED' || progress.attempts >= ATTEMPTS_BEFORE_SOLUTION };
    },

    async saveDraft(userId: string, quest: Quest, code: string) {
      await db.questProgress.upsert({
        where: { userId_questSlug: { userId, questSlug: quest.slug } },
        create: { userId, questSlug: quest.slug, code },
        update: { code },
      });
    },

    /**
     * Mark a quest complete and award XP exactly once.
     *
     * Idempotency matters: a double-click or a retried request must not award
     * XP twice. We guarantee that with a *conditional update*: only the request
     * that flips the row from IN_PROGRESS to COMPLETED gets count === 1, so
     * only that request awards XP — even if two run at the same moment.
     */
    async complete(userId: string, quest: Quest, input: CompletionInput = {}): Promise<CompletionResult> {
      const now = clock();
      const extra = {
        ...(input.code !== undefined ? { code: input.code } : {}),
        ...(input.repoUrl !== undefined ? { repoUrl: input.repoUrl } : {}),
        ...(input.liveUrl !== undefined ? { liveUrl: input.liveUrl } : {}),
      };

      return db.$transaction(async (tx) => {
        // Serialize completions per user. Without this lock, two quests finished
        // at the same moment (two tabs) can't see each other's rows, and a
        // "chapter complete" achievement could be missed forever.
        await tx.$queryRaw`SELECT id FROM "User" WHERE id = ${userId} FOR UPDATE`;
        await tx.questProgress.upsert({
          where: { userId_questSlug: { userId, questSlug: quest.slug } },
          create: { userId, questSlug: quest.slug, attempts: 0 },
          update: {},
        });

        const flipped = await tx.questProgress.updateMany({
          where: { userId, questSlug: quest.slug, status: 'IN_PROGRESS' },
          data: { status: 'COMPLETED', completedAt: now, xpAwarded: quest.xp, attempts: { increment: 1 }, ...extra },
        });

        if (flipped.count === 0) {
          // Already completed: this is a review (re-practice). Keep their latest
          // code/links, count the review for spaced repetition, award nothing.
          const row = await tx.questProgress.findUniqueOrThrow({ where: { userId_questSlug: { userId, questSlug: quest.slug } } });
          const due = row.completedAt ? reviewDueAt(row.reviewedAt ?? row.completedAt, row.reviews) : null;
          await tx.questProgress.update({
            where: { userId_questSlug: { userId, questSlug: quest.slug } },
            data: { ...extra, ...(due && due <= now ? { reviews: { increment: 1 }, reviewedAt: now } : {}) },
          });
          const user = await tx.user.findUniqueOrThrow({ where: { id: userId } });
          return { completed: true, alreadyCompleted: true, xpAwarded: 0, user: toPublicUser(user, now), newAchievements: [] };
        }

        const before = await tx.user.findUniqueOrThrow({ where: { id: userId } });
        const today = toUtcDay(now);
        const streak = nextStreak(before.streak, before.lastActiveDate, today);
        const user = await tx.user.update({
          where: { id: userId },
          data: {
            xp: { increment: quest.xp },
            streak,
            longestStreak: Math.max(before.longestStreak, streak),
            lastActiveDate: today,
          },
        });

        const doneRows = await tx.questProgress.findMany({ where: { userId, status: 'COMPLETED' }, select: { questSlug: true } });
        const done = new Set(doneRows.map((r) => r.questSlug));
        const earned = await tx.userAchievement.findMany({ where: { userId }, select: { key: true } });
        const keys = newlyEarned(
          {
            completedCount: done.size,
            completedProjects: [...done].filter((s) => projectSlugs.has(s)).length,
            completedChapters: chaptersCompleted(done),
            totalChapters: curriculum.chapters.length,
            completedTracks: tracksCompleted(done),
            completedDesigns: [...done].filter((s) => designSlugs.has(s)).length,
            streak: user.streak,
            level: levelForXp(user.xp),
            xp: user.xp,
          },
          earned.map((e) => e.key),
        );
        if (keys.length) {
          await tx.userAchievement.createMany({ data: keys.map((key) => ({ userId, key })), skipDuplicates: true });
        }

        return {
          completed: true,
          alreadyCompleted: false,
          xpAwarded: quest.xp,
          user: toPublicUser(user, now),
          newAchievements: keys.map((k) => achievementDefinition(k)).filter((a): a is AchievementDefinition => Boolean(a)),
        };
      });
    },
  };
}

export type ProgressService = ReturnType<typeof createProgressService>;
