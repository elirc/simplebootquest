---
slug: deploy-config-validation
title: Fail Fast on Bad Config
type: code
language: ts
xp: 25
---
# Fail Fast on Bad Config

The worst production bug: the app boots fine, then crashes on the first login at 3am because `JWT_SECRET` was never set. **Validate all config at startup**, and refuse to start if anything is wrong:

```ts
const env = z.object({
  DATABASE_URL: z.string().url(),
  JWT_SECRET: z.string().min(32),
  PORT: z.coerce.number().default(3001),
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
}).parse(process.env);
```

Then import `env` everywhere instead of reading `process.env` directly. You get one source of truth, real types, and errors at boot time instead of runtime.

## Your task

Implement `loadConfig(rawEnv)` without a library. It returns a typed config, or **throws one `Error` listing every problem** (one per line, prefixed with `"Invalid configuration:\n"`).

| Key | Rules |
|-----|-------|
| `DATABASE_URL` | Required. Must start with `postgres://` or `postgresql://` → `"DATABASE_URL must be a postgres URL"` (missing → `"DATABASE_URL is required"`) |
| `JWT_SECRET` | Required. At least 32 characters → `"JWT_SECRET must be at least 32 characters"` (missing → `"JWT_SECRET is required"`) |
| `PORT` | Optional, default `3001`. An integer from 1–65535 → `"PORT must be an integer between 1 and 65535"` |
| `NODE_ENV` | Optional, default `"development"`. One of `development`, `test`, `production` → `"NODE_ENV must be one of: development, test, production"` |
| `CORS_ORIGINS` | Optional, comma-separated → an array of trimmed, non-empty strings. Default `[]` |

Return `{ databaseUrl, jwtSecret, port, nodeEnv, corsOrigins, isProduction }`.

Empty strings count as missing.
