---
slug: "node-access-logs"
title: "Access Logs"
type: "code"
language: "js"
xp: 15
hints: ["Use the `getUTC*` methods for every date part.", "Build the JSON object explicitly from allowed fields: an allow-list, never a deny-list."]
---
# Access Logs

Every production server logs requests. The classic **Common Log Format** (used by Apache and nginx) looks like:

```
127.0.0.1 - ada [05/Mar/2026:10:00:00 +0000] "GET /todos HTTP/1.1" 200 1234
```

Modern apps prefer **structured JSON logs** (one object per line), which log platforms can search and aggregate:

```json
{"time":"2026-03-05T10:00:00.000Z","method":"GET","path":"/todos","status":200,"ms":12}
```

## Your task

1. `commonLog(entry)` formats `{ ip, user, time (Date), method, path, status, bytes }` in Common Log Format. A missing user is `-`, and so are missing bytes. Use UTC, the English month abbreviation, and `+0000`.
2. `jsonLog(entry)` returns a JSON string with **only** `time` (ISO), `method`, `path`, `status` and `ms`. It must never include `entry.headers`, `entry.body` or anything else, so passwords never end up in logs.
3. `parseCommonLog(line)` parses a CLF line back into `{ ip, user, method, path, status, bytes }`, with `user` and `bytes` as `null` when they're `-`.
