import { execSync } from 'node:child_process';

/** Bring the test database's schema up to date before any test runs. */
export default function setup() {
  execSync('npx prisma migrate deploy', {
    stdio: 'pipe',
    env: {
      ...process.env,
      DATABASE_URL: process.env.TEST_DATABASE_URL ?? 'postgresql://sbq:sbq@localhost:5432/simplebootquest_test',
    },
  });
}
