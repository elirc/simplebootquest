---
slug: "validate-events"
title: "Validate a new event"
type: "code"
language: "js"
xp: 20
optional: true
section: "Practice: Input Validation"
hints: ["Collect errors in an array, checking each field in order, then decide ok/not ok at the end.","Build `data` from an allow-list of field names, never by copying `input` wholesale."]
---
# Validate a new event

Every write endpoint needs this (Zod does it for you in real projects, but you should know what it does). Write `validateEvent(input)` returning `{ ok: true, data }` or `{ ok: false, errors: [{ field, message }] }`, with errors in the order below.

**All fields are required** except booleans.

- `name`: a string of 1–40 characters after trimming (store it trimmed) → `'must be 1-40 characters'`
- `capacity`: a number from 20 to 400 → `'must be a number from 20 to 400'`
- `registered`: a number from 0 to 380 → `'must be a number from 0 to 380'`
- `format`: one of `in-person`, `online`, `hybrid` → `'must be one of in-person, online, hybrid'`
- `free` (optional): a boolean → `'must be true or false'`

Non-objects (including arrays and `null`) → `[{ field: '_', message: 'must be an object' }]`. On success, `data` contains **only** the known fields (unknown ones like `ownerId` or `role` are stripped, which prevents mass assignment).
