import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import { z } from 'zod';
import type { Config } from '../config.ts';
import type { Db } from '../db.ts';
import { DUMMY_HASH, TOKEN_COOKIE, cookieOptions, hashPassword, requireAuth, signToken, toPublicUser, verifyPassword } from '../auth.ts';
import { HttpError, parse } from '../errors.ts';

/**
 * Names appear on the public leaderboard, so keep them to plain names:
 * letters (any language), digits, spaces and a little punctuation. No URLs,
 * no markup, no emoji spam.
 */
export const displayName = z
  .string()
  .trim()
  .min(1, 'Name is required')
  .max(40, 'Name must be at most 40 characters')
  .regex(/^[\p{L}\p{N}][\p{L}\p{N} .'_-]*$/u, 'Use letters, numbers, spaces and . \' _ - only');

const RegisterBody = z.object({
  name: displayName,
  email: z.string().trim().toLowerCase().email('Email is invalid').max(254),
  password: z.string().min(8, 'Password must be at least 8 characters').max(128, 'Password must be at most 128 characters'),
});

const LoginBody = z.object({
  email: z.string().trim().toLowerCase().min(1, 'Email is required'),
  password: z.string().min(1, 'Password is required'),
});

export function authRouter(db: Db, config: Config, clock: () => Date = () => new Date()) {
  const router = Router();

  // Slow down password guessing. Disabled in tests so suites can log in freely.
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 20,
    standardHeaders: 'draft-8',
    legacyHeaders: false,
    skip: () => config.nodeEnv === 'test',
    message: { error: 'Too many attempts, please try again later' },
  });

  router.post('/register', limiter, async (req, res) => {
    const body = parse(RegisterBody, req.body);
    const existing = await db.user.findUnique({ where: { email: body.email } });
    if (existing) throw new HttpError(409, 'An account with that email already exists', { email: 'Already registered' });

    const user = await db.user.create({
      data: { name: body.name, email: body.email, passwordHash: await hashPassword(body.password) },
    });
    res.cookie(TOKEN_COOKIE, signToken(config, user.id), cookieOptions(config));
    res.status(201).json({ user: toPublicUser(user) });
  });

  router.post('/login', limiter, async (req, res) => {
    const body = parse(LoginBody, req.body);
    const user = await db.user.findUnique({ where: { email: body.email } });
    // Always run bcrypt so both failure cases take the same time.
    const ok = await verifyPassword(body.password, user?.passwordHash ?? DUMMY_HASH);
    if (!user || !ok) throw new HttpError(401, 'Invalid email or password');

    res.cookie(TOKEN_COOKIE, signToken(config, user.id), cookieOptions(config));
    res.json({ user: toPublicUser(user, clock()) });
  });

  router.post('/logout', (_req, res) => {
    const { maxAge: _maxAge, ...opts } = cookieOptions(config);
    res.clearCookie(TOKEN_COOKIE, opts);
    res.status(204).end();
  });

  router.get('/me', requireAuth, async (req, res) => {
    const user = await db.user.findUnique({ where: { id: req.userId } });
    if (!user) throw new HttpError(401, 'You need to log in first');
    res.json({ user: toPublicUser(user, clock()) });
  });

  return router;
}
