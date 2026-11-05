---
slug: "validate-cities-update"
title: "Validate an update to city"
type: "code"
language: "js"
xp: 20
optional: true
section: "Practice: Input Validation"
hints: ["Collect errors in an array, checking each field in order, then decide ok/not ok at the end.","Build `data` from an allow-list of field names, never by copying `input` wholesale."]
---
# Validate an update to city

Every write endpoint needs this (Zod does it for you in real projects, but you should know what it does). Write `validateCityUpdate(input)` returning `{ ok: true, data }` or `{ ok: false, errors: [{ field, message }] }`, with errors in the order below.

**This is a partial update (PATCH)**: every field is optional, but any field that *is* provided must be valid.

- `name`: a string of 1–40 characters after trimming (store it trimmed) → `'must be 1-40 characters'`
- `population`: a number from 300 to 9900 → `'must be a number from 300 to 9900'`
- `avgTemp`: a number from 2 to 29 → `'must be a number from 2 to 29'`
- `continent`: one of `Europe`, `Africa`, `Americas`, `Asia`, `Oceania` → `'must be one of Europe, Africa, Americas, Asia, Oceania'`

Non-objects (including arrays and `null`) → `[{ field: '_', message: 'must be an object' }]`. On success, `data` contains **only** the known fields (unknown ones like `ownerId` or `role` are stripped, which prevents mass assignment).
