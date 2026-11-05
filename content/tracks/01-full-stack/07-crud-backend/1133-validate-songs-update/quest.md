---
slug: "validate-songs-update"
title: "Validate an update to song"
type: "code"
language: "js"
xp: 20
optional: true
section: "Practice: Input Validation"
hints: ["Collect errors in an array, checking each field in order, then decide ok/not ok at the end.","Build `data` from an allow-list of field names, never by copying `input` wholesale."]
---
# Validate an update to song

Every write endpoint needs this (Zod does it for you in real projects, but you should know what it does). Write `validateSongUpdate(input)` returning `{ ok: true, data }` or `{ ok: false, errors: [{ field, message }] }`, with errors in the order below.

**This is a partial update (PATCH)**: every field is optional, but any field that *is* provided must be valid.

- `title`: a string of 1–40 characters after trimming (store it trimmed) → `'must be 1-40 characters'`
- `seconds`: a number from 120 to 420 → `'must be a number from 120 to 420'`
- `plays`: a number from 10 to 9800 → `'must be a number from 10 to 9800'`
- `artist`: one of `Nova`, `The Pines`, `Kairo` → `'must be one of Nova, The Pines, Kairo'`
- `mood`: one of `calm`, `happy`, `dark` → `'must be one of calm, happy, dark'`

Non-objects (including arrays and `null`) → `[{ field: '_', message: 'must be an object' }]`. On success, `data` contains **only** the known fields (unknown ones like `ownerId` or `role` are stripped, which prevents mass assignment).
