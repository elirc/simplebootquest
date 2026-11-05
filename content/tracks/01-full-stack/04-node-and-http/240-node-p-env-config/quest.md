---
slug: "node-p-env-config"
title: "Practice: Loading Config from the Environment"
type: "code"
language: "js"
xp: 15
hints: ["`Number.isInteger(Number(\"80.5\"))` is false, and so is `Number.isInteger(NaN)`, which covers both bad cases.", "Compare DEBUG against an allow-list instead of using `Boolean(...)`."]
resources: [{"title": "The Twelve-Factor App: Config", "url": "https://12factor.net/config"}]
---
# Practice: Loading Config from the Environment

Twelve-factor apps read configuration from environment variables. Everything in `process.env` is a **string** (or missing), so config loading means parsing and validating, and failing fast at startup, not hours later.

## Your task
Write `loadConfig(env)` (pass `process.env` in real code) returning:
- `port`: from `PORT`, default `3000`. Must be an integer from 1 to 65535, else throw `Error('PORT must be a number between 1 and 65535')`.
- `nodeEnv`: from `NODE_ENV`, default `'development'`. Must be `development`, `test` or `production`, else throw `Error('NODE_ENV must be development, test or production')`.
- `databaseUrl`: `DATABASE_URL`, required. Missing or empty → throw `Error('DATABASE_URL is required')`.
- `debug`: `true` only for `'true'` or `'1'` (case-insensitive). Note that `Boolean('false')` is `true`!
- `corsOrigins`: `CORS_ORIGINS` split on commas and trimmed, empty entries removed. Default `[]`.

Also `Object.freeze` the result so nothing can change config at runtime.
