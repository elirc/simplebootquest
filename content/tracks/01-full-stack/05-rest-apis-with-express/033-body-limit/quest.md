---
slug: "express-body-limit"
title: "Limiting Request Size"
type: "code"
language: "js"
xp: 15
hints: ["One regex with an optional unit group handles every format.", "`Number(undefined)` is `NaN`, and `Number.isFinite` filters it out."]
---
# Limiting Request Size

An API that accepts unlimited request bodies can be knocked over by one client sending a 2 GB JSON payload. `express.json({ limit: '100kb' })` rejects oversized bodies with **413 Payload Too Large**.

Limits are usually written human-friendly (`'100kb'`, `'1mb'`) and parsed into bytes.

## Your task

1. `parseSize(str)` converts `'512'`, `'100b'`, `'10kb'`, `'1.5mb'`, `'2gb'` (case-insensitive, base 1024) into whole bytes (round down). Throw an `Error` for anything else.
2. `bodyLimit(limit)` returns middleware that reads `req.headers['content-length']`. If it's greater than the limit, respond `413` with `{ error: 'Request body too large', limit: <bytes> }`, otherwise call `next()`. A missing content-length passes through (the parser enforces the limit while streaming).
