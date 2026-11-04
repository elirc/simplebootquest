---
slug: "deploy-migration-planner"
title: "Planning Database Migrations"
type: "code"
language: "ts"
xp: 20
hints: ["Index local migrations by name in a Map.", "Migrations are pending if they aren't in the applied set; sort them by name."]
resources: [{"title": "Prisma: Migrate in production", "url": "https://www.prisma.io/docs/orm/prisma-migrate/workflows/development-and-production"}]
---
# Planning Database Migrations

`prisma migrate deploy` compares the migration folders in your repo with the `_prisma_migrations` table in the database, and applies the ones that are missing, **in order**. Understanding what it checks helps you debug failed deploys:

- Migrations are applied in **name order** (their names start with a timestamp).
- A migration that was applied but has since been **edited** (its checksum changed) is dangerous, because production no longer matches the code. Stop!
- A migration recorded in the database but **missing from the repo** usually means someone deployed from another branch.

## Your task

`planMigrations(local, applied)`, where `local` is `{ name, checksum }[]` (from the repo, in any order) and `applied` is `{ name, checksum }[]` (from the database), returns:

- `{ ok: true, pending: [names in order] }`, or
- `{ ok: false, errors: [...] }`, with one message per problem, in this order:
  - `"Modified migration: <name>"` (applied, but the checksum differs)
  - `"Missing locally: <name>"` (applied, but not in the repo)
  - `"Out of order: <name>"` (pending, but sorts **before** the latest applied migration, so it would run in a different order than in development)
