import request from 'supertest';
import { describe, expect, it } from 'vitest';
import { app, clock, curriculum, db, firstCodeQuest, firstDesign, firstProject, firstQuiz, registeredAgent, useCleanDatabase } from './helpers.ts';

useCleanDatabase();

describe('curriculum', () => {
  it('lists tracks, chapters and quests for guests', async () => {
    const res = await request(app).get('/api/curriculum');
    expect(res.status).toBe(200);
    expect(res.body.tracks.map((t: { slug: string }) => t.slug)).toEqual(curriculum.tracks.map((t) => t.slug));
    const chapters = res.body.tracks.flatMap((t: { chapters: unknown[] }) => t.chapters);
    expect(chapters).toHaveLength(curriculum.chapters.length);
    expect(res.body.tracks[0].chapters[0].preview[0].status).toBe('not_started');
    expect(res.body.tracks[0].chapters[0].next.slug).toBe(curriculum.chapters[0]!.quests.find((q) => !q.optional)!.slug);
    expect(res.body.totalXp).toBe(curriculum.totalXp);
    expect(res.body.resume).toBeNull();
    // The overview never carries every quest (it would be megabytes at scale).
    expect(JSON.stringify(res.body).length).toBeLessThan(200_000);
  });

  it('returns one chapter with all its quests and core/practice counts', async () => {
    const chapter = curriculum.chapters[0]!;
    const res = await request(app).get(`/api/chapters/${chapter.slug}`);
    expect(res.status).toBe(200);
    expect(res.body.quests).toHaveLength(chapter.quests.length);
    expect(res.body.coreTotal).toBe(chapter.quests.filter((q) => !q.optional).length);
    expect(res.body.total).toBe(chapter.quests.length);
    expect((await request(app).get('/api/chapters/nope')).status).toBe(404);
  });

  it('searches quest titles across tracks', async () => {
    const target = curriculum.quests[3]!;
    const res = await request(app).get('/api/search').query({ q: target.title });
    expect(res.status).toBe(200);
    expect(res.body.results.map((r: { slug: string }) => r.slug)).toContain(target.slug);
    expect(res.body.results[0]).toHaveProperty('chapterTitle');
    expect((await request(app).get('/api/search').query({ q: '   ' })).body.results).toEqual([]);
  });

  it('suggests where a signed-in learner should resume', async () => {
    const agent = await registeredAgent();
    const quest = firstCodeQuest();
    expect((await agent.get('/api/curriculum')).body.resume).toMatchObject({ reason: 'next' });
    await agent.put(`/api/quests/${quest.slug}/draft`).send({ code: 'let x' });
    expect((await agent.get('/api/curriculum')).body.resume).toMatchObject({ slug: quest.slug, reason: 'in_progress' });
  });

  it('keeps prev/next links inside a track', async () => {
    for (const track of curriculum.tracks.slice(1)) {
      const first = track.chapters[0]!.quests[0]!;
      const res = await request(app).get(`/api/quests/${first.slug}`);
      expect(res.body.prev).toBeNull();
      expect(res.body.trackSlug).toBe(track.slug);
    }
  });

  it('returns quest details with starter code and tests, but no solution', async () => {
    const quest = firstCodeQuest();
    const res = await request(app).get(`/api/quests/${quest.slug}`);
    expect(res.status).toBe(200);
    expect(res.body).toMatchObject({ slug: quest.slug, type: 'code', code: quest.starter, tests: quest.tests, solutionAvailable: false });
    expect(res.body.solution).toBeUndefined();
    expect(res.body.next.slug).toBe(curriculum.quests[1]!.slug);
    expect(res.body.prev).toBeNull();
  });

  it('never sends quiz answers to the client', async () => {
    const res = await request(app).get(`/api/quests/${firstQuiz().slug}`);
    expect(res.body.questions[0]).toEqual({ prompt: expect.any(String), options: expect.any(Array) });
    expect(JSON.stringify(res.body)).not.toContain('"answer"');
  });

  it('404s for unknown quests', async () => {
    expect((await request(app).get('/api/quests/nope')).status).toBe(404);
  });
});

describe('code submissions', () => {
  it('requires login', async () => {
    const res = await request(app).post(`/api/quests/${firstCodeQuest().slug}/submissions`).send({ code: 'x', passed: true });
    expect(res.status).toBe(401);
  });

  it('awards XP exactly once', async () => {
    const quest = firstCodeQuest();
    const agent = await registeredAgent();
    const first = await agent.post(`/api/quests/${quest.slug}/submissions`).send({ code: 'solution v1', passed: true });
    expect(first.status).toBe(200);
    expect(first.body).toMatchObject({ completed: true, alreadyCompleted: false, xpAwarded: quest.xp });
    expect(first.body.user.xp).toBe(quest.xp);
    expect(first.body.newAchievements.map((a: { key: string }) => a.key)).toContain('first-quest');

    const again = await agent.post(`/api/quests/${quest.slug}/submissions`).send({ code: 'solution v2', passed: true });
    expect(again.body).toMatchObject({ alreadyCompleted: true, xpAwarded: 0 });
    expect(again.body.user.xp).toBe(quest.xp);

    const detail = await agent.get(`/api/quests/${quest.slug}`);
    expect(detail.body).toMatchObject({ status: 'completed', code: 'solution v2', solutionAvailable: true });
  });

  it('is safe against concurrent duplicate submissions', async () => {
    const quest = firstCodeQuest();
    const agent = await registeredAgent();
    const results = await Promise.all(
      Array.from({ length: 5 }, () => agent.post(`/api/quests/${quest.slug}/submissions`).send({ code: 'x', passed: true })),
    );
    const awarded = results.filter((r) => r.body.xpAwarded > 0);
    expect(awarded).toHaveLength(1);
    const user = await db.user.findFirstOrThrow();
    expect(user.xp).toBe(quest.xp);
  });

  it('unlocks the solution after 3 failed attempts', async () => {
    const quest = firstCodeQuest();
    const agent = await registeredAgent();
    expect((await agent.get(`/api/quests/${quest.slug}/solution`)).status).toBe(403);
    for (let i = 0; i < 3; i++) {
      const res = await agent.post(`/api/quests/${quest.slug}/submissions`).send({ code: `attempt ${i}`, passed: false });
      expect(res.body.completed).toBe(false);
    }
    const res = await agent.get(`/api/quests/${quest.slug}/solution`);
    expect(res.status).toBe(200);
    expect(res.body.solution).toBe(quest.solution);
    expect((await agent.get(`/api/quests/${quest.slug}`)).body.code).toBe('attempt 2');
  });

  it('saves drafts', async () => {
    const quest = firstCodeQuest();
    const agent = await registeredAgent();
    expect((await agent.put(`/api/quests/${quest.slug}/draft`).send({ code: 'my draft' })).status).toBe(204);
    const detail = await agent.get(`/api/quests/${quest.slug}`);
    expect(detail.body).toMatchObject({ code: 'my draft', status: 'in_progress', attempts: 0 });
  });

  it('keeps progress private to each user', async () => {
    const quest = firstCodeQuest();
    const ada = await registeredAgent('Ada');
    const grace = await registeredAgent('Grace');
    await ada.put(`/api/quests/${quest.slug}/draft`).send({ code: 'ada secret' });
    expect((await grace.get(`/api/quests/${quest.slug}`)).body.code).toBe(quest.starter);
  });

  it('rejects oversized code', async () => {
    const agent = await registeredAgent();
    const res = await agent.post(`/api/quests/${firstCodeQuest().slug}/submissions`).send({ code: 'x'.repeat(60_000), passed: true });
    expect(res.status).toBe(400);
  });
});

describe('streaks', () => {
  it('counts consecutive days and resets after a gap', async () => {
    const [a, b, c, d] = curriculum.quests.filter((q) => q.type === 'code');
    const agent = await registeredAgent();
    const submit = (slug: string) => agent.post(`/api/quests/${slug}/submissions`).send({ code: 'x', passed: true });

    clock.set('2026-03-10T09:00:00Z');
    expect((await submit(a!.slug)).body.user.streak).toBe(1);
    clock.set('2026-03-11T23:00:00Z');
    expect((await submit(b!.slug)).body.user.streak).toBe(2);
    clock.set('2026-03-14T08:00:00Z');
    const reset = (await submit(c!.slug)).body.user;
    expect(reset.streak).toBe(1);
    expect(reset.longestStreak).toBe(2);
    clock.set('2026-03-14T20:00:00Z');
    expect((await submit(d!.slug)).body.user.streak).toBe(1);
  });

  it('shows a broken streak as 0 without waiting for the next completion', async () => {
    const [a] = curriculum.quests.filter((q) => q.type === 'code');
    const agent = await registeredAgent();
    clock.set('2026-03-10T09:00:00Z');
    await agent.post(`/api/quests/${a!.slug}/submissions`).send({ code: 'x', passed: true });
    clock.set('2026-03-11T22:00:00Z');
    expect((await agent.get('/api/auth/me')).body.user.streak).toBe(1);
    clock.set('2026-03-13T08:00:00Z');
    expect((await agent.get('/api/auth/me')).body.user.streak).toBe(0);
  });
});

describe('spaced review', () => {
  it('brings completed quests back after 3 days, counts a re-solve as a review, then spaces it out', async () => {
    const quest = firstCodeQuest();
    const agent = await registeredAgent();
    const submit = () => agent.post(`/api/quests/${quest.slug}/submissions`).send({ code: 'x', passed: true });
    clock.set('2026-04-01T10:00:00Z');
    await submit();
    expect((await agent.get('/api/me/review')).body.items).toEqual([]);

    clock.set('2026-04-04T11:00:00Z');
    const due = await agent.get('/api/me/review');
    expect(due.body.items.map((i: { slug: string }) => i.slug)).toEqual([quest.slug]);

    const again = await submit();
    expect(again.body).toMatchObject({ alreadyCompleted: true, xpAwarded: 0 });
    expect((await agent.get('/api/me/review')).body.items).toEqual([]);

    // Next interval is 7 days after the review.
    clock.set('2026-04-10T11:00:00Z');
    expect((await agent.get('/api/me/review')).body.items).toEqual([]);
    clock.set('2026-04-11T12:00:00Z');
    expect((await agent.get('/api/me/review')).body.items[0]).toMatchObject({ slug: quest.slug, reviews: 1 });
  });
});

describe('quizzes', () => {
  it('grades on the server and only completes with every answer right', async () => {
    const quiz = firstQuiz();
    const agent = await registeredAgent();
    const right = quiz.questions!.map((q) => q.answer);
    const wrong = right.map((a, i) => (i === 0 ? (a + 1) % quiz.questions![0]!.options.length : a));

    const fail = await agent.post(`/api/quests/${quiz.slug}/quiz`).send({ answers: wrong });
    expect(fail.body.completed).toBe(false);
    expect(fail.body.score).toBe(right.length - 1);
    expect(fail.body.total).toBe(right.length);
    // Which answers were wrong is NOT revealed (it would leak the answer key).
    expect(fail.body.correct).toBeNull();
    expect(fail.body.explanations).toBeNull();

    const pass = await agent.post(`/api/quests/${quiz.slug}/quiz`).send({ answers: right });
    expect(pass.body).toMatchObject({ completed: true, xpAwarded: quiz.xp, score: right.length });
    expect(pass.body.correct.every(Boolean)).toBe(true);
    expect(pass.body.explanations).toHaveLength(right.length);
  });
});

describe('projects', () => {
  it('requires a valid repository URL', async () => {
    const agent = await registeredAgent();
    const slug = firstProject().slug;
    expect((await agent.post(`/api/quests/${slug}/project`).send({ repoUrl: 'not a url' })).status).toBe(400);
    const ok = await agent.post(`/api/quests/${slug}/project`).send({ repoUrl: 'https://github.com/ada/notes-api', liveUrl: '' });
    expect(ok.body).toMatchObject({ completed: true, xpAwarded: firstProject().xp });
    expect(ok.body.newAchievements.map((a: { key: string }) => a.key)).toContain('first-project');
    expect((await agent.get(`/api/quests/${slug}`)).body.repoUrl).toBe('https://github.com/ada/notes-api');
  });
});

describe('design write-ups', () => {
  it('returns the rubric and template but hides the reference', async () => {
    const quest = firstDesign();
    const res = await request(app).get(`/api/quests/${quest.slug}`);
    expect(res.body).toMatchObject({ type: 'design', rubric: quest.rubric, minWords: quest.minWords, code: quest.template, solutionAvailable: false });
    expect(JSON.stringify(res.body)).not.toContain(quest.reference!.slice(0, 60));
  });

  it('enforces a minimum length, then reveals the reference', async () => {
    const quest = firstDesign();
    const agent = await registeredAgent();
    expect((await agent.get(`/api/quests/${quest.slug}/solution`)).status).toBe(403);

    const short = await agent.post(`/api/quests/${quest.slug}/design`).send({ document: 'Too short.' });
    expect(short.status).toBe(400);
    expect(short.body.error).toMatch(/at least \d+ words/);

    const document = Array.from({ length: quest.minWords! + 5 }, (_, i) => `word${i}`).join(' ');
    const ok = await agent.post(`/api/quests/${quest.slug}/design`).send({ document });
    expect(ok.body).toMatchObject({ completed: true, xpAwarded: quest.xp });
    expect(ok.body.newAchievements.map((a: { key: string }) => a.key)).toContain('first-design');

    const ref = await agent.get(`/api/quests/${quest.slug}/solution`);
    expect(ref.status).toBe(200);
    expect(ref.body.solution).toBe(quest.reference);
    expect((await agent.get(`/api/quests/${quest.slug}`)).body.code).toBe(document);
  });

  it('saves design drafts', async () => {
    const quest = firstDesign();
    const agent = await registeredAgent();
    expect((await agent.put(`/api/quests/${quest.slug}/draft`).send({ code: '# My draft' })).status).toBe(204);
    expect((await agent.get(`/api/quests/${quest.slug}`)).body.code).toBe('# My draft');
  });
});

describe('profile and leaderboard', () => {
  it('summarises progress and ranks users by XP', async () => {
    const ada = await registeredAgent('Ada');
    await registeredAgent('Grace');
    await ada.post(`/api/quests/${firstCodeQuest().slug}/submissions`).send({ code: 'x', passed: true });

    const profile = await ada.get('/api/me/profile');
    expect(profile.body).toMatchObject({ completedQuests: 1, totalQuests: curriculum.quests.length });
    expect(profile.body.tracks[0]).toMatchObject({ slug: curriculum.tracks[0]!.slug, completed: 1 });
    expect(profile.body.achievements[0].key).toBe('first-quest');
    expect(profile.body.recent[0].questSlug).toBe(firstCodeQuest().slug);

    const all = await request(app).get('/api/leaderboard?period=all');
    expect(all.body.entries.map((e: { name: string }) => e.name)).toEqual(['Ada', 'Grace']);
    expect(JSON.stringify(all.body)).not.toContain('@');

    // The weekly board only counts XP earned in the last 7 days.
    const week = await ada.get('/api/leaderboard');
    expect(week.body.period).toBe('week');
    expect(week.body.entries.map((e: { name: string }) => e.name)).toEqual(['Ada']);
    expect(week.body.me).toMatchObject({ rank: 1, you: true, xp: firstCodeQuest().xp });
  });

  it('lets learners hide from the leaderboard and rename themselves', async () => {
    const ada = await registeredAgent('Ada');
    expect((await ada.patch('/api/me/settings').send({ showOnLeaderboard: false, name: 'Ada L' })).body.user).toMatchObject({ showOnLeaderboard: false, name: 'Ada L' });
    const board = await request(app).get('/api/leaderboard?period=all');
    expect(board.body.entries.map((e: { name: string }) => e.name)).not.toContain('Ada L');
    expect((await ada.patch('/api/me/settings').send({ name: '<a href=x>spam</a>' })).status).toBe(400);
    expect((await ada.patch('/api/me/settings').send({ xp: 1_000_000 })).status).toBe(400);
  });
});
