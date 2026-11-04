import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globalSetup: ['./test/global-setup.ts'],
    // Tests share one database, so run files one at a time.
    fileParallelism: false,
    env: {
      NODE_ENV: 'test',
      DATABASE_URL: process.env.TEST_DATABASE_URL ?? 'postgresql://sbq:sbq@localhost:5432/simplebootquest_test',
      JWT_SECRET: 'test-secret-test-secret-test-secret-123',
    },
  },
});
