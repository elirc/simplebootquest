---
slug: "api-p-build-path"
title: "Practice: Type-Safe-ish Route Building"
type: "code"
language: "js"
xp: 15
hints: ["Split the pattern on `/`, map each segment, and join it back. Optional segments that are missing are simply skipped."]
---
# Practice: Type-Safe-ish Route Building

Hard-coding URLs like `` `/users/${id}/posts?page=${page}` `` everywhere breaks the moment a route changes, and it forgets to encode values. A tiny path builder fixes both.

## Your task
Write `buildPath(pattern, params = {}, query = {})`:
- Replace each `:name` segment with `encodeURIComponent(String(params.name))`. A missing (`undefined` or `null`) param → throw `Error('Missing param "<name>" for <pattern>')`.
- A `:name?` segment is **optional**: omit the whole segment when the param is missing.
- Append the query string from `query`, skipping `undefined`, `null` and `''`, with keys in the given order and both keys and values encoded. Arrays repeat the key.
- Never produce a trailing `?`.
