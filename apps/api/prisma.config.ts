import 'dotenv/config';
import { defineConfig } from 'prisma/config';

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: { path: 'prisma/migrations' },
  datasource: {
    // A placeholder keeps `prisma generate` working without a database
    // (e.g. in CI typecheck); migrate/deploy need the real DATABASE_URL.
    url: process.env.DATABASE_URL ?? 'postgresql://placeholder:placeholder@localhost:5432/placeholder',
  },
});
