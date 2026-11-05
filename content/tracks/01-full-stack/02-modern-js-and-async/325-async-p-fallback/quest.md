---
slug: "async-p-fallback"
title: "Practice: Primary with Fallback"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice"
hints: ["Race the primary against a timeout, and catch either failure."]
---
# Practice: Primary with Fallback

Resilient apps degrade gracefully: if the primary source is slow or down, use a backup (a cache, a replica, a default value).

## Your task
`withFallback(primary, fallback, timeoutMs)`:

- Calls `primary()`. If it resolves within `timeoutMs`, returns `{ value, source: 'primary' }`.
- If it rejects **or** times out, calls `fallback()` and returns `{ value, source: 'fallback' }`.
- If the fallback also fails, rejects with the **fallback's** error.
