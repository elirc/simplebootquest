---
slug: "deploy-env-2"
title: "Deploy Drill: Reading environment variables #2"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"With `PORT=\"\"`, what is `Number(process.env.PORT ?? 3000)`?","options":["`NaN`","`true`","`false`","`0`"],"answer":3,"explanation":"It evaluates to `0`."},{"prompt":"With `DEBUG=\"false\"`, what is `process.env.DEBUG === \"true\"`?","options":["`false`","`0`","`true`","`NaN`"],"answer":0,"explanation":"It evaluates to `false`."},{"prompt":"With `PORT=\"\"`, what is `Number(process.env.PORT || 3000)`?","options":["`true`","`3000`","`false`","`0`"],"answer":1,"explanation":"It evaluates to `3000`."},{"prompt":"With `PORT is not set`, what is `Number(process.env.PORT)`?","options":["`0`","`NaN`","`true`","`false`"],"answer":1,"explanation":"It evaluates to `NaN`."},{"prompt":"With `RATE=\"1e3\"`, what is `Number(process.env.RATE)`?","options":["`1000`","`false`","`0`","`true`"],"answer":0,"explanation":"It evaluates to `1000`."}]
---
# Deploy Drill: Reading environment variables #2

Everything in `process.env` is a **string** (or `undefined`). `Boolean("false")` is `true`, `Number("")` is `0`, and `Number(undefined)` is `NaN`. Parse and validate config once at startup (Zod is great for this) and fail fast.
