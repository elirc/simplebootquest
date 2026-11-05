---
slug: "validate-movies"
title: "Validate a new movie"
type: "code"
language: "js"
xp: 20
optional: true
section: "Practice: Input Validation"
hints: ["Collect errors in an array, checking each field in order, then decide ok/not ok at the end.","Build `data` from an allow-list of field names, never by copying `input` wholesale."]
---
# Validate a new movie

Every write endpoint needs this (Zod does it for you in real projects, but you should know what it does). Write `validateMovie(input)` returning `{ ok: true, data }` or `{ ok: false, errors: [{ field, message }] }`, with errors in the order below.

**All fields are required** except booleans.

- `title`: a string of 1–40 characters after trimming (store it trimmed) → `'must be 1-40 characters'`
- `year`: a number from 1980 to 2024 → `'must be a number from 1980 to 2024'`
- `minutes`: a number from 82 to 175 → `'must be a number from 82 to 175'`
- `rating`: a number from 4 to 9.5 → `'must be a number from 4 to 9.5'`
- `genre`: one of `drama`, `comedy`, `sci-fi`, `thriller` → `'must be one of drama, comedy, sci-fi, thriller'`

Non-objects (including arrays and `null`) → `[{ field: '_', message: 'must be an object' }]`. On success, `data` contains **only** the known fields (unknown ones like `ownerId` or `role` are stripped, which prevents mass assignment).
