---
slug: "validate-repos-update"
title: "Validate an update to repo"
type: "code"
language: "js"
xp: 20
optional: true
section: "Practice: Input Validation"
hints: ["Collect errors in an array, checking each field in order, then decide ok/not ok at the end.","Build `data` from an allow-list of field names, never by copying `input` wholesale."]
---
# Validate an update to repo

Every write endpoint needs this (Zod does it for you in real projects, but you should know what it does). Write `validateRepoUpdate(input)` returning `{ ok: true, data }` or `{ ok: false, errors: [{ field, message }] }`, with errors in the order below.

**This is a partial update (PATCH)**: every field is optional, but any field that *is* provided must be valid.

- `name`: a string of 1–40 characters after trimming (store it trimmed) → `'must be 1-40 characters'`
- `stars`: a number from 0 to 5400 → `'must be a number from 0 to 5400'`
- `openIssues`: a number from 0 to 140 → `'must be a number from 0 to 140'`
- `language`: one of `TypeScript`, `Go`, `Python` → `'must be one of TypeScript, Go, Python'`
- `archived` (optional): a boolean → `'must be true or false'`

Non-objects (including arrays and `null`) → `[{ field: '_', message: 'must be an object' }]`. On success, `data` contains **only** the known fields (unknown ones like `ownerId` or `role` are stripped, which prevents mass assignment).
