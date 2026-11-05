---
slug: "validate-cars-update"
title: "Validate an update to car"
type: "code"
language: "js"
xp: 20
optional: true
section: "Practice: Input Validation"
hints: ["Collect errors in an array, checking each field in order, then decide ok/not ok at the end.","Build `data` from an allow-list of field names, never by copying `input` wholesale."]
---
# Validate an update to car

Every write endpoint needs this (Zod does it for you in real projects, but you should know what it does). Write `validateCarUpdate(input)` returning `{ ok: true, data }` or `{ ok: false, errors: [{ field, message }] }`, with errors in the order below.

**This is a partial update (PATCH)**: every field is optional, but any field that *is* provided must be valid.

- `model`: a string of 1–40 characters after trimming (store it trimmed) → `'must be 1-40 characters'`
- `priceK`: a number from 14 to 58 → `'must be a number from 14 to 58'`
- `km`: a number from 0 to 180000 → `'must be a number from 0 to 180000'`
- `year`: a number from 2008 to 2024 → `'must be a number from 2008 to 2024'`
- `fuel`: one of `petrol`, `diesel`, `electric`, `hybrid` → `'must be one of petrol, diesel, electric, hybrid'`

Non-objects (including arrays and `null`) → `[{ field: '_', message: 'must be an object' }]`. On success, `data` contains **only** the known fields (unknown ones like `ownerId` or `role` are stripped, which prevents mass assignment).
