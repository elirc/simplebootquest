import request from 'supertest';
import { describe, expect, it } from 'vitest';
import { app, db, registeredAgent, useCleanDatabase } from './helpers.ts';

useCleanDatabase();

describe('auth', () => {
  it('registers a user, sets an httpOnly cookie and never returns the hash', async () => {
    const res = await request(app).post('/api/auth/register').send({ name: 'Ada', email: ' ADA@example.com ', password: 'correct horse battery' });
    expect(res.status).toBe(201);
    expect(res.body.user).toMatchObject({ name: 'Ada', email: 'ada@example.com', xp: 0, level: 1 });
    expect(JSON.stringify(res.body)).not.toContain('passwordHash');
    const cookie = res.headers['set-cookie']?.[0] ?? '';
    expect(cookie).toMatch(/^sbq_token=/);
    expect(cookie).toContain('HttpOnly');
    expect(cookie).toContain('SameSite=Lax');

    const stored = await db.user.findUniqueOrThrow({ where: { email: 'ada@example.com' } });
    expect(stored.passwordHash).not.toContain('correct horse');
  });

  it('validates registration input', async () => {
    const res = await request(app).post('/api/auth/register').send({ name: '', email: 'nope', password: 'short' });
    expect(res.status).toBe(400);
    expect(res.body.details).toMatchObject({
      name: 'Name is required',
      email: 'Email is invalid',
      password: 'Password must be at least 8 characters',
    });
  });

  it('rejects duplicate emails with 409', async () => {
    await registeredAgent('Ada');
    const res = await request(app).post('/api/auth/register').send({ name: 'Ada 2', email: 'ada@example.com', password: 'another long password' });
    expect(res.status).toBe(409);
  });

  it('logs in with the same generic error for unknown email and wrong password', async () => {
    await registeredAgent('Ada');
    const wrongPassword = await request(app).post('/api/auth/login').send({ email: 'ada@example.com', password: 'wrong password!' });
    const unknownEmail = await request(app).post('/api/auth/login').send({ email: 'nobody@example.com', password: 'wrong password!' });
    expect(wrongPassword.status).toBe(401);
    expect(unknownEmail.status).toBe(401);
    expect(wrongPassword.body).toEqual(unknownEmail.body);

    const ok = await request(app).post('/api/auth/login').send({ email: 'ADA@example.com', password: 'correct horse battery' });
    expect(ok.status).toBe(200);
    expect(ok.body.user.name).toBe('Ada');
  });

  it('returns the current user, and 401 after logout', async () => {
    const agent = await registeredAgent('Grace');
    expect((await agent.get('/api/auth/me')).body.user.name).toBe('Grace');
    expect((await agent.post('/api/auth/logout')).status).toBe(204);
    expect((await agent.get('/api/auth/me')).status).toBe(401);
  });

  it('ignores tampered tokens', async () => {
    const res = await request(app).get('/api/auth/me').set('Cookie', 'sbq_token=not.a.real.token');
    expect(res.status).toBe(401);
  });
});

describe('errors', () => {
  it('returns JSON 404s for unknown API routes', async () => {
    const res = await request(app).get('/api/nope');
    expect(res.status).toBe(404);
    expect(res.body.error).toBe('Route GET /api/nope not found');
  });

  it('handles malformed JSON', async () => {
    const res = await request(app).post('/api/auth/login').set('Content-Type', 'application/json').send('{bad json');
    expect(res.status).toBe(400);
    expect(res.body).toEqual({ error: 'Invalid JSON' });
  });

  it('reports healthy when the database is up', async () => {
    const res = await request(app).get('/api/health');
    expect(res.status).toBe(200);
    expect(res.body.checks.database).toBe('up');
  });
});
