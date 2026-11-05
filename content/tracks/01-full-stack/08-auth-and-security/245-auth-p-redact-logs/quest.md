---
slug: "auth-p-redact-logs"
title: "Practice: Redacting Secrets from Logs"
type: "code"
language: "js"
xp: 15
hints: ["Track the objects on the CURRENT path in a WeakSet (add before recursing, delete after). That detects cycles without flagging shared references.", "Check the key before recursing, so you never descend into a redacted value."]
---
# Practice: Redacting Secrets from Logs

Logging `req.body` or `req.headers` is handy for debugging, and it's also how passwords and session tokens end up in your log provider, readable by anyone with dashboard access.

## Your task
Write `redact(value, keys = ['password', 'token', 'authorization', 'cookie', 'secret'])` returning a **deep copy** where:
- Any object key that **contains** one of `keys` (case-insensitive) has its value replaced with `'[REDACTED]'`. So `accessToken`, `Authorization` and `passwordConfirm` are all covered.
- It recurses into nested objects and arrays.
- Circular references become `'[Circular]'` instead of crashing.
- Primitives, `null` and `Date`s are returned unchanged (keep the same `Date` object).
- The input isn't modified.
