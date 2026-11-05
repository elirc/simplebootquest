---
slug: "express-p-api-versioning"
title: "Practice: API Versioning"
type: "code"
language: "js"
xp: 15
hints: ["Anchor the URL regex so `/videos` is not mistaken for a version: `/^\\\\/v(\\\\d+)(\\\\/.*)?$/`."]
---
# Practice: API Versioning

Once mobile apps depend on your API, you can't change response shapes freely. Old app versions stay installed for years. APIs therefore carry a **version**, usually in one of three places:

1. The URL: `/v2/todos` (most common, and easy to see in logs).
2. A header: `Accept-Version: 2`.
3. The media type: `Accept: application/vnd.todoapp.v2+json`.

## Your task
Write `resolveVersion(req, supported)`, where `req` has `path` and `headers` (lowercase names), and `supported` is something like `[1, 2]`. It returns `{ version, path }`:
- Check the URL first: a leading `/v<N>` segment sets the version, and `path` is returned **without** it (`/v2/todos` → `/todos`, `/v2` → `/`).
- Otherwise the `accept-version` header, then an `accept` header containing `vnd.<anything>.v<N>+json`.
- Otherwise default to the **lowest** supported version (old clients that never sent a version).
- A requested version that isn't supported → return `null` (the caller sends 400).
