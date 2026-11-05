---
slug: "validate-recipes-update"
title: "Validate an update to recipe"
type: "code"
language: "js"
xp: 20
optional: true
section: "Practice: Input Validation"
hints: ["Collect errors in an array, checking each field in order, then decide ok/not ok at the end.","Build `data` from an allow-list of field names, never by copying `input` wholesale."]
---
# Validate an update to recipe

Every write endpoint needs this (Zod does it for you in real projects, but you should know what it does). Write `validateRecipeUpdate(input)` returning `{ ok: true, data }` or `{ ok: false, errors: [{ field, message }] }`, with errors in the order below.

**This is a partial update (PATCH)**: every field is optional, but any field that *is* provided must be valid.

- `name`: a string of 1–40 characters after trimming (store it trimmed) → `'must be 1-40 characters'`
- `minutes`: a number from 10 to 120 → `'must be a number from 10 to 120'`
- `calories`: a number from 180 to 950 → `'must be a number from 180 to 950'`
- `cuisine`: one of `italian`, `asian`, `mexican`, `middle-eastern` → `'must be one of italian, asian, mexican, middle-eastern'`
- `difficulty`: one of `easy`, `medium`, `hard` → `'must be one of easy, medium, hard'`
- `vegetarian` (optional): a boolean → `'must be true or false'`

Non-objects (including arrays and `null`) → `[{ field: '_', message: 'must be an object' }]`. On success, `data` contains **only** the known fields (unknown ones like `ownerId` or `role` are stripped, which prevents mass assignment).
