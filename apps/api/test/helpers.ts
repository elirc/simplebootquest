import request from 'supertest';
import { afterAll, beforeEach } from 'vitest';
import { loadCurriculum } from '@sbq/curriculum';
import { createApp } from '../src/app.ts';
import { loadConfig } from '../src/config.ts';
import { createDb } from '../src/db.ts';

export const config = loadConfig();
export const db = createDb(config.databaseUrl);
export const curriculum = loadCurriculum();

let now = new Date('2026-03-10T12:00:00Z');
export const clock = {
  now: () => now,
  set: (iso: string) => {
    now = new Date(iso);
  },
};

export const app = createApp({ config, db, curriculum, clock: clock.now });

/** Every test starts from an empty database. */
export function useCleanDatabase() {
  beforeEach(async () => {
    clock.set('2026-03-10T12:00:00Z');
    await db.userAchievement.deleteMany();
    await db.questProgress.deleteMany();
    await db.user.deleteMany();
  });
  afterAll(async () => {
    await db.$disconnect();
  });
}

/** A Supertest agent keeps cookies between requests, like a browser. */
export async function registeredAgent(name = 'Ada', email = `${name.toLowerCase()}@example.com`) {
  const agent = request.agent(app);
  const res = await agent.post('/api/auth/register').send({ name, email, password: 'correct horse battery' });
  if (res.status !== 201) throw new Error(`register failed: ${res.status} ${JSON.stringify(res.body)}`);
  return agent;
}

export const firstCodeQuest = () => curriculum.quests.find((q) => q.type === 'code')!;
export const firstQuiz = () => curriculum.quests.find((q) => q.type === 'quiz')!;
export const firstProject = () => curriculum.quests.find((q) => q.type === 'project')!;
export const firstDesign = () => curriculum.quests.find((q) => q.type === 'design')!;
