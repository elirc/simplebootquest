import { existsSync } from 'node:fs';
import path from 'node:path';
import express from 'express';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import type { Curriculum } from '@sbq/curriculum';
import type { Config } from './config.ts';
import type { Db } from './db.ts';
import { optionalAuth } from './auth.ts';
import { createErrorHandler, notFoundHandler } from './errors.ts';
import { authRouter } from './routes/auth.ts';
import { questsRouter } from './routes/quests.ts';
import { meRouter } from './routes/me.ts';
import { createProgressService } from './services/progress.ts';
import { logger, requestLogger } from './logger.ts';

export interface AppDeps {
  config: Config;
  db: Db;
  curriculum: Curriculum;
  clock?: () => Date;
}

/**
 * Builds the Express app without starting a server. Tests call this with a
 * test database and use Supertest; server.ts calls it and then listen().
 */
export function createApp({ config, db, curriculum, clock }: AppDeps) {
  const app = express();
  const progress = createProgressService(db, curriculum, clock);

  app.disable('x-powered-by');
  app.set('trust proxy', 1); // behind one proxy (the hosting platform) in production
  app.use(
    helmet({
      contentSecurityPolicy: {
        directives: {
          // The code runner uses `new Function` inside a Web Worker and sql.js uses WebAssembly.
          scriptSrc: ["'self'", "'unsafe-eval'", "'wasm-unsafe-eval'"],
          workerSrc: ["'self'", 'blob:'],
        },
      },
    }),
  );
  if (config.nodeEnv !== 'test') app.use(requestLogger);
  app.use(express.json({ limit: '200kb' }));
  app.use(cookieParser());
  app.use(optionalAuth(config));

  app.get('/api/health', async (_req, res) => {
    try {
      await db.$queryRaw`SELECT 1`;
      res.json({ status: 'ok', checks: { database: 'up' } });
    } catch {
      res.status(503).json({ status: 'error', checks: { database: 'down' } });
    }
  });

  app.use('/api/auth', authRouter(db, config));
  app.use('/api', questsRouter(db, curriculum, progress));
  app.use('/api', meRouter(db, curriculum));
  app.use('/api', notFoundHandler);

  // In production, the same server hosts the built React app (one origin: no CORS).
  const webDist = config.webDist ?? path.resolve(import.meta.dirname, '../../web/dist');
  if (config.nodeEnv !== 'test' && existsSync(path.join(webDist, 'index.html'))) {
    app.use(express.static(webDist, { index: false, maxAge: config.isProduction ? '1h' : 0 }));
    app.get('/{*splat}', (_req, res) => res.sendFile(path.join(webDist, 'index.html')));
  }

  app.use(createErrorHandler((err) => logger.error('Unhandled error', { err })));
  return app;
}
