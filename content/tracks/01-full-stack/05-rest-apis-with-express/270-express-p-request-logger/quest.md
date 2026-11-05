---
slug: "express-p-request-logger"
title: "Practice: A Safe Request Logger"
type: "code"
language: "js"
xp: 15
hints: ["Work on the raw query string pairs rather than re-encoding everything. That keeps the other parameters byte-for-byte identical."]
---
# Practice: A Safe Request Logger

Access logs are invaluable for debugging production, but they're also a classic place to leak secrets: `GET /reset?token=…` or `POST /login?password=…` (yes, people do that).

## Your task
1. `redactUrl(url, keys = ['token', 'password', 'secret', 'apiKey'])`: replace the **values** of those query parameters with `[REDACTED]`. Match parameter names case-insensitively, leave other parameters untouched, and keep their original order and encoding.
2. `logLine({ method, url, status, ms, userId })`: return `"<METHOD> <redacted url> <status> <ms>ms"`, with `ms` rounded to one decimal place. Append ` user=<id>` when `userId` is set.
