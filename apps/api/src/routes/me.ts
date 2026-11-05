import { Router } from 'express';
import { z } from 'zod';
import {
  ACHIEVEMENTS,
  achievementDefinition,
  effectiveStreak,
  levelForXp,
  levelProgress,
  reviewDueAt,
  toUtcDay,
  type LeaderboardEntry,
  type LeaderboardResponse,
  type ProfileResponse,
  type ReviewItem,
} from '@sbq/shared';
import type { Curriculum } from '@sbq/curriculum';
import type { Db } from '../db.ts';
import { requireAuth, toPublicUser } from '../auth.ts';
import { HttpError, parse } from '../errors.ts';
import { displayName } from './auth.ts';

const SettingsBody = z
  .object({
    name: displayName.optional(),
    showOnLeaderboard: z.boolean().optional(),
  })
  .strict();

const REVIEW_BATCH = 5;

export function meRouter(db: Db, curriculum: Curriculum, clock: () => Date = () => new Date()) {
  const router = Router();

  router.get('/me/profile', requireAuth, async (req, res) => {
    const user = await db.user.findUnique({
      where: { id: req.userId },
      include: {
        achievements: { orderBy: { earnedAt: 'asc' } },
        progress: { where: { status: 'COMPLETED' }, orderBy: { completedAt: 'desc' } },
      },
    });
    if (!user) throw new HttpError(401, 'You need to log in first');

    const done = new Set(user.progress.map((p) => p.questSlug));
    const earnedKeys = new Set(user.achievements.map((a) => a.key));
    const profile: ProfileResponse = {
      user: toPublicUser(user, clock()),
      levelProgress: levelProgress(user.xp),
      completedQuests: user.progress.filter((p) => curriculum.bySlug.has(p.questSlug)).length,
      totalQuests: curriculum.quests.length,
      tracks: curriculum.tracks.map((t) => {
        // Track progress counts the core path; practice is extra credit.
        const quests = t.chapters.flatMap((c) => c.quests).filter((q) => !q.optional);
        return { slug: t.slug, title: t.title, icon: t.icon, completed: quests.filter((q) => done.has(q.slug)).length, total: quests.length };
      }),
      achievements: user.achievements.flatMap((a) => {
        const def = achievementDefinition(a.key);
        return def ? [{ ...def, earnedAt: a.earnedAt.toISOString() }] : [];
      }),
      lockedAchievements: ACHIEVEMENTS.filter((a) => !earnedKeys.has(a.key)).map((a) => achievementDefinition(a.key)!),
      recent: user.progress.slice(0, 10).flatMap((p) => {
        const quest = curriculum.bySlug.get(p.questSlug);
        return quest && p.completedAt
          ? [{ questSlug: quest.slug, chapterSlug: quest.chapterSlug, title: quest.title, completedAt: p.completedAt.toISOString() }]
          : [];
      }),
    };
    res.json(profile);
  });

  router.patch('/me/settings', requireAuth, async (req, res) => {
    const body = parse(SettingsBody, req.body);
    const user = await db.user.update({ where: { id: req.userId }, data: body });
    res.json({ user: toPublicUser(user, clock()) });
  });

  /**
   * Spaced review: completed quests come back after 3, 7, 21 and 60 days.
   * Re-solving one (no XP) counts as a review. Items are interleaved across
   * chapters, because mixing topics strengthens recall more than blocks do.
   */
  router.get('/me/review', requireAuth, async (req, res) => {
    const now = clock();
    const rows = await db.questProgress.findMany({
      where: { userId: req.userId, status: 'COMPLETED' },
      select: { questSlug: true, completedAt: true, reviewedAt: true, reviews: true },
    });
    const due = rows
      .flatMap((r) => {
        const quest = curriculum.bySlug.get(r.questSlug);
        if (!quest || !r.completedAt || (quest.type !== 'code' && quest.type !== 'quiz')) return [];
        const at = reviewDueAt(r.reviewedAt ?? r.completedAt, r.reviews);
        return at && at <= now ? [{ quest, row: r, at }] : [];
      })
      .sort((a, b) => a.at.getTime() - b.at.getTime());

    // Round-robin across chapters so a batch mixes topics.
    const byChapter = new Map<string, typeof due>();
    for (const d of due) byChapter.set(d.quest.chapterSlug, [...(byChapter.get(d.quest.chapterSlug) ?? []), d]);
    const batch: typeof due = [];
    while (batch.length < REVIEW_BATCH && [...byChapter.values()].some((l) => l.length)) {
      for (const list of byChapter.values()) {
        const item = list.shift();
        if (item && batch.length < REVIEW_BATCH) batch.push(item);
      }
    }
    const items: ReviewItem[] = batch.map(({ quest, row }) => ({
      slug: quest.slug,
      trackSlug: quest.trackSlug,
      chapterSlug: quest.chapterSlug,
      chapterTitle: quest.chapterTitle,
      title: quest.title,
      type: quest.type,
      language: quest.language,
      xp: quest.xp,
      boss: quest.boss,
      optional: quest.optional,
      status: 'completed',
      completedAt: row.completedAt!.toISOString(),
      reviews: row.reviews,
    }));
    res.json({ items, dueCount: due.length });
  });

  /**
   * Leaderboard. Progress is self-reported (code runs in the browser), so the
   * board is labelled as such in the UI. The weekly board is the default:
   * it resets, so newcomers can compete and inflated totals fade.
   */
  router.get('/leaderboard', async (req, res) => {
    const period = req.query.period === 'all' ? 'all' : 'week';
    const today = toUtcDay(clock());
    let ranked: { id: string; name: string; xp: number; totalXp: number; streak: number; lastActiveDate: string | null }[];

    if (period === 'all') {
      const users = await db.user.findMany({
        where: { showOnLeaderboard: true },
        orderBy: [{ xp: 'desc' }, { createdAt: 'asc' }],
        take: 100,
        select: { id: true, name: true, xp: true, streak: true, lastActiveDate: true },
      });
      ranked = users.map((u) => ({ ...u, totalXp: u.xp }));
    } else {
      const since = new Date(clock().getTime() - 7 * 86_400_000);
      const sums = await db.questProgress.groupBy({
        by: ['userId'],
        where: { completedAt: { gte: since }, user: { showOnLeaderboard: true } },
        _sum: { xpAwarded: true },
        orderBy: { _sum: { xpAwarded: 'desc' } },
        take: 100,
      });
      const users = await db.user.findMany({
        where: { id: { in: sums.map((s) => s.userId) } },
        select: { id: true, name: true, xp: true, streak: true, lastActiveDate: true },
      });
      const byId = new Map(users.map((u) => [u.id, u]));
      ranked = sums.flatMap((s) => {
        const u = byId.get(s.userId);
        return u ? [{ ...u, totalXp: u.xp, xp: s._sum.xpAwarded ?? 0 }] : [];
      });
    }

    const toEntry = (u: (typeof ranked)[number], i: number): LeaderboardEntry => ({
      rank: i + 1,
      name: u.name,
      xp: u.xp,
      level: levelForXp(u.totalXp),
      streak: effectiveStreak(u.streak, u.lastActiveDate, today),
      ...(u.id === req.userId ? { you: true } : {}),
    });
    const entries = ranked.slice(0, 25).map(toEntry);
    const myIndex = ranked.findIndex((u) => u.id === req.userId);
    const body: LeaderboardResponse = { period, entries, me: myIndex >= 0 ? toEntry(ranked[myIndex]!, myIndex) : null };
    res.json(body);
  });

  return router;
}
