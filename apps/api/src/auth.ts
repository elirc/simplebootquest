import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import type { CookieOptions, RequestHandler } from 'express';
import { levelForXp, type PublicUser } from '@sbq/shared';
import type { Config } from './config.ts';
import { HttpError } from './errors.ts';

export const TOKEN_COOKIE = 'sbq_token';
const TOKEN_TTL_SECONDS = 60 * 60 * 24 * 14; // 14 days

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface Request {
      userId?: string;
    }
  }
}

export const hashPassword = (password: string) => bcrypt.hash(password, 12);
export const verifyPassword = (password: string, hash: string) => bcrypt.compare(password, hash);

/**
 * A real bcrypt hash of a random string. Comparing against it when a login
 * email doesn't exist makes "unknown email" take as long as "wrong password",
 * so response timing doesn't reveal which emails are registered.
 */
export const DUMMY_HASH = bcrypt.hashSync('dummy-password-for-timing', 12);

export function signToken(config: Config, userId: string): string {
  return jwt.sign({ sub: userId }, config.jwtSecret, { expiresIn: TOKEN_TTL_SECONDS });
}

export function cookieOptions(config: Config): CookieOptions {
  return {
    httpOnly: true, // not readable from JavaScript → XSS can't steal it
    sameSite: 'lax', // not sent on cross-site POSTs → blocks most CSRF
    secure: config.isProduction, // HTTPS-only in production
    maxAge: TOKEN_TTL_SECONDS * 1000,
    path: '/',
  };
}

/** Sets req.userId when a valid token cookie is present. Never rejects. */
export function optionalAuth(config: Config): RequestHandler {
  return (req, _res, next) => {
    const token = req.cookies?.[TOKEN_COOKIE];
    if (typeof token === 'string') {
      try {
        const payload = jwt.verify(token, config.jwtSecret);
        if (typeof payload === 'object' && typeof payload.sub === 'string') req.userId = payload.sub;
      } catch {
        // expired or tampered token: treat as logged out
      }
    }
    next();
  };
}

export const requireAuth: RequestHandler = (req, _res, next) => {
  if (!req.userId) throw new HttpError(401, 'You need to log in first');
  next();
};

/** The only shape a user ever leaves the server in. Never includes passwordHash. */
export function toPublicUser(user: {
  id: string;
  email: string;
  name: string;
  xp: number;
  streak: number;
  longestStreak: number;
  createdAt: Date;
}): PublicUser {
  return {
    id: user.id,
    email: user.email,
    name: user.name,
    xp: user.xp,
    level: levelForXp(user.xp),
    streak: user.streak,
    longestStreak: user.longestStreak,
    createdAt: user.createdAt.toISOString(),
  };
}
