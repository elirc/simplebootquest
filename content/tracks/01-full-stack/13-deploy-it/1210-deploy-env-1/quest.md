---
slug: "deploy-env-1"
title: "Deploy Drill: Reading environment variables #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"With `WORKERS=\"4\"`, what is `Number(process.env.WORKERS) + 1`?","options":["`0`","`true`","`false`","`5`"],"answer":3,"explanation":"It evaluates to `5`."},{"prompt":"With `ORIGINS=\"a.com, b.com\"`, what is `process.env.ORIGINS.split(\",\")`?","options":["`false`","`0`","`true`","`[\"a.com\", \" b.com\"]`"],"answer":3,"explanation":"It evaluates to `[\"a.com\", \" b.com\"]`."},{"prompt":"With `WORKERS=\"4\"`, what is `process.env.WORKERS + 1`?","options":["`true`","`\"41\"`","`0`","`false`"],"answer":1,"explanation":"It evaluates to `\"41\"`."},{"prompt":"With `RATE=\"10req\"`, what is `parseInt(process.env.RATE)`?","options":["`false`","`0`","`10`","`true`"],"answer":2,"explanation":"It evaluates to `10`."},{"prompt":"With `PORT is not set`, what is `Number(process.env.PORT ?? 3000)`?","options":["`0`","`true`","`false`","`3000`"],"answer":3,"explanation":"It evaluates to `3000`."}]
---
# Deploy Drill: Reading environment variables #1

Everything in `process.env` is a **string** (or `undefined`). `Boolean("false")` is `true`, `Number("")` is `0`, and `Number(undefined)` is `NaN`. Parse and validate config once at startup (Zod is great for this) and fail fast.
