---
slug: "express-p-sparse-fields"
title: "Practice: Sparse Fieldsets"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice"
hints: ["Build a `Set` of wanted fields, add `id`, then walk `allowed` in order and keep the ones in the set."]
---
# Practice: Sparse Fieldsets

Mobile clients often want less data: `GET /users?fields=id,name`. Returning only the requested fields saves bandwidth.

## Your task
Write `selectFields(records, fieldsParam, allowed)`:
- `records` is an array of objects. Return new objects (don't mutate the originals).
- `fieldsParam` is a comma-separated list. Missing or empty → every **allowed** field (never everything: think `passwordHash`).
- Requested fields that aren't allowed are silently ignored.
- `id` is always included, even if not requested.
- Keys appear in the order of `allowed`, and fields missing on a record are left out (not set to `undefined`).
