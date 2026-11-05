---
slug: "deploy-p-json-logger"
title: "Practice: A Structured JSON Logger"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice"
resources: [{"title": "pino logger", "url": "https://getpino.io/"}]
---
# Practice: A Structured JSON Logger

In production, logs are read by machines first (Datadog, Grafana Loki, CloudWatch) and humans second. **One JSON object per line** lets you filter by `level`, `requestId` or `userId` instead of grepping text. That's what `pino` does.

## Your task
Write `createLogger({ level = 'info', now = () => new Date().toISOString(), write, base = {} })` returning `{ debug, info, warn, error, child }`:
- The levels in order are `debug < info < warn < error`. Messages below `level` are dropped.
- Each call `logger.info(msg, fields = {})` calls `write(line)` with `JSON.stringify` of `{ time, level, msg, ...base, ...fields }`. Keep that key order.
- An `Error` in `fields.err` is serialised as `{ name, message, stack }` (a plain `JSON.stringify` of an Error gives `{}`).
- `child(fields)` returns a logger with the same settings and `base` extended by `fields` (for per-request context like `requestId`).
