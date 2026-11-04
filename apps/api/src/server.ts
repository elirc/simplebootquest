import { loadCurriculum } from '@sbq/curriculum';
import { loadConfig } from './config.ts';
import { createDb } from './db.ts';
import { createApp } from './app.ts';
import { logger } from './logger.ts';

const config = loadConfig();
const db = createDb(config.databaseUrl);
const curriculum = loadCurriculum(process.env.CONTENT_DIR || undefined);

const app = createApp({ config, db, curriculum });
const server = app.listen(config.port, () => {
  logger.info('SimpleBootQuest API listening', {
    port: config.port,
    env: config.nodeEnv,
    chapters: curriculum.chapters.length,
    quests: curriculum.quests.length,
  });
});

// Graceful shutdown: platforms send SIGTERM before replacing an instance.
// Stop accepting connections, let in-flight requests finish, then disconnect.
function shutdown(signal: string) {
  logger.info('Shutting down', { signal });
  server.close(async () => {
    await db.$disconnect();
    process.exit(0);
  });
  setTimeout(() => process.exit(1), 10_000).unref();
}
process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));
