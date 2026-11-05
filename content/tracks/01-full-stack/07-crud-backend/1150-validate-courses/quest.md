---
slug: "validate-courses"
title: "Validate a new course"
type: "code"
language: "js"
xp: 20
optional: true
section: "Practice: Input Validation"
hints: ["Collect errors in an array, checking each field in order, then decide ok/not ok at the end.","Build `data` from an allow-list of field names, never by copying `input` wholesale."]
---
# Validate a new course

Every write endpoint needs this (Zod does it for you in real projects, but you should know what it does). Write `validateCourse(input)` returning `{ ok: true, data }` or `{ ok: false, errors: [{ field, message }] }`, with errors in the order below.

**All fields are required** except booleans.

- `title`: a string of 1–40 characters after trimming (store it trimmed) → `'must be 1-40 characters'`
- `lessons`: a number from 6 to 48 → `'must be a number from 6 to 48'`
- `enrolled`: a number from 12 to 4800 → `'must be a number from 12 to 4800'`
- `level`: one of `beginner`, `intermediate`, `advanced` → `'must be one of beginner, intermediate, advanced'`

Non-objects (including arrays and `null`) → `[{ field: '_', message: 'must be an object' }]`. On success, `data` contains **only** the known fields (unknown ones like `ownerId` or `role` are stripped, which prevents mass assignment).
