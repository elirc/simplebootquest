---
slug: "validate-tickets"
title: "Validate a new ticket"
type: "code"
language: "js"
xp: 20
optional: true
section: "Practice: Input Validation"
hints: ["Collect errors in an array, checking each field in order, then decide ok/not ok at the end.","Build `data` from an allow-list of field names, never by copying `input` wholesale."]
---
# Validate a new ticket

Every write endpoint needs this (Zod does it for you in real projects, but you should know what it does). Write `validateTicket(input)` returning `{ ok: true, data }` or `{ ok: false, errors: [{ field, message }] }`, with errors in the order below.

**All fields are required** except booleans.

- `subject`: a string of 1–40 characters after trimming (store it trimmed) → `'must be 1-40 characters'`
- `ageHours`: a number from 1 to 200 → `'must be a number from 1 to 200'`
- `replies`: a number from 0 to 12 → `'must be a number from 0 to 12'`
- `priority`: one of `low`, `normal`, `urgent` → `'must be one of low, normal, urgent'`
- `channel`: one of `email`, `chat`, `phone` → `'must be one of email, chat, phone'`
- `resolved` (optional): a boolean → `'must be true or false'`

Non-objects (including arrays and `null`) → `[{ field: '_', message: 'must be an object' }]`. On success, `data` contains **only** the known fields (unknown ones like `ownerId` or `role` are stripped, which prevents mass assignment).
