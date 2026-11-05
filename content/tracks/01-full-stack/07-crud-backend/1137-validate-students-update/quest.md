---
slug: "validate-students-update"
title: "Validate an update to student"
type: "code"
language: "js"
xp: 20
optional: true
section: "Practice: Input Validation"
hints: ["Collect errors in an array, checking each field in order, then decide ok/not ok at the end.","Build `data` from an allow-list of field names, never by copying `input` wholesale."]
---
# Validate an update to student

Every write endpoint needs this (Zod does it for you in real projects, but you should know what it does). Write `validateStudentUpdate(input)` returning `{ ok: true, data }` or `{ ok: false, errors: [{ field, message }] }`, with errors in the order below.

**This is a partial update (PATCH)**: every field is optional, but any field that *is* provided must be valid.

- `name`: a string of 1–40 characters after trimming (store it trimmed) → `'must be 1-40 characters'`
- `score`: a number from 31 to 100 → `'must be a number from 31 to 100'`
- `age`: a number from 17 to 34 → `'must be a number from 17 to 34'`
- `course`: one of `web`, `data`, `design` → `'must be one of web, data, design'`
- `graduated` (optional): a boolean → `'must be true or false'`

Non-objects (including arrays and `null`) → `[{ field: '_', message: 'must be an object' }]`. On success, `data` contains **only** the known fields (unknown ones like `ownerId` or `role` are stripped, which prevents mass assignment).
