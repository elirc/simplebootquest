import { Router } from 'express';
import { ACHIEVEMENTS, achievementDefinition, levelForXp, levelProgress, type ProfileResponse } from '@sbq/shared';
import type { Curriculum } from '@sbq/curriculum';
import type { Db } from '../db.ts';
import { requireAuth, toPublicUser } from '../auth.ts';
import { HttpError } from '../errors.ts';

export function meRouter(db: Db, curriculum: Curriculum) {
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

    const earnedKeys = new Set(user.achievements.map((a) => a.key));
    const profile: ProfileResponse = {
      user: toPublicUser(user),
      levelProgress: levelProgress(user.xp),
      completedQuests: user.progress.filter((p) => curriculum.bySlug.has(p.questSlug)).length,
      totalQuests: curriculum.quests.length,
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

  router.get('/leaderboard', async (_req, res) => {
    const users = await db.user.findMany({
      orderBy: [{ xp: 'desc' }, { createdAt: 'asc' }],
      take: 25,
      select: { name: true, xp: true, streak: true },
    });
    res.json({
      entries: users.map((u, i) => ({ rank: i + 1, name: u.name, xp: u.xp, level: levelForXp(u.xp), streak: u.streak })),
    });
  });

  return router;
}
