---
slug: "validate-transactions"
title: "Validate a new transaction"
type: "code"
language: "js"
xp: 20
optional: true
section: "Practice: Input Validation"
hints: ["Collect errors in an array, checking each field in order, then decide ok/not ok at the end.","Build `data` from an allow-list of field names, never by copying `input` wholesale."]
---
# Validate a new transaction

Every write endpoint needs this (Zod does it for you in real projects, but you should know what it does). Write `validateTransaction(input)` returning `{ ok: true, data }` or `{ ok: false, errors: [{ field, message }] }`, with errors in the order below.

**All fields are required** except booleans.

- `reference`: a string of 1–40 characters after trimming (store it trimmed) → `'must be 1-40 characters'`
- `amount`: a number from -400 to 1200 → `'must be a number from -400 to 1200'`
- `day`: a number from 1 to 28 → `'must be a number from 1 to 28'`
- `category`: one of `food`, `rent`, `salary`, `travel`, `fun` → `'must be one of food, rent, salary, travel, fun'`

Non-objects (including arrays and `null`) → `[{ field: '_', message: 'must be an object' }]`. On success, `data` contains **only** the known fields (unknown ones like `ownerId` or `role` are stripped, which prevents mass assignment).
