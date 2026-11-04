---
slug: "deploy-redacting-logger"
title: "A Redacting Logger"
type: "code"
language: "ts"
xp: 20
hints: ["Write a recursive `clean(value)` that handles Errors, arrays and objects.", "A child is just `createLogger` with merged bindings."]
resources: [{"title": "pino (fast JSON logger)", "url": "https://getpino.io/"}]
---
# A Redacting Logger

Production logs end up in third-party tools, get shared in incident channels, and are kept for months. A password or token in a log line is a **security incident**. Good loggers support levels and **redact** sensitive keys automatically:

```ts
logger.info('login attempt', { email: 'a@b.co', password: 'hunter2' });
// {"level":"info","msg":"login attempt","email":"a@b.co","password":"[REDACTED]"}
```

## Your task

`createLogger({ level = 'info', write, redact = ['password', 'token', 'authorization', 'cookie', 'secret'] })` returns `{ debug, info, warn, error, child(bindings) }`:

- The levels are ordered `debug < info < warn < error`. Messages below `level` aren't written.
- Each call does `write(line)` with one JSON line: `{ level, msg, ...bindings, ...context }`.
- Keys are redacted (`"[REDACTED]"`) when their **lowercased name contains** any redact word, at **any depth** (nested objects and arrays included).
- `Error` values in the context serialize as `{ name, message }`.
- `child(bindings)` returns a logger that adds those bindings (e.g. `{ requestId }`) to every line.
