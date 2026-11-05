---
slug: "validate-hotels"
title: "Validate a new hotel"
type: "code"
language: "js"
xp: 20
optional: true
section: "Practice: Input Validation"
hints: ["Collect errors in an array, checking each field in order, then decide ok/not ok at the end.","Build `data` from an allow-list of field names, never by copying `input` wholesale."]
---
# Validate a new hotel

Every write endpoint needs this (Zod does it for you in real projects, but you should know what it does). Write `validateHotel(input)` returning `{ ok: true, data }` or `{ ok: false, errors: [{ field, message }] }`, with errors in the order below.

**All fields are required** except booleans.

- `name`: a string of 1–40 characters after trimming (store it trimmed) → `'must be 1-40 characters'`
- `nightlyPrice`: a number from 45 to 420 → `'must be a number from 45 to 420'`
- `stars`: a number from 1 to 5 → `'must be a number from 1 to 5'`
- `city`: one of `Lisbon`, `Kyoto`, `Toronto` → `'must be one of Lisbon, Kyoto, Toronto'`
- `breakfast` (optional): a boolean → `'must be true or false'`

Non-objects (including arrays and `null`) → `[{ field: '_', message: 'must be an object' }]`. On success, `data` contains **only** the known fields (unknown ones like `ownerId` or `role` are stripped, which prevents mass assignment).
