---
slug: "express-p-validate-body"
title: "Practice: A Tiny Schema Validator"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice"
hints: ["Loop over the SCHEMA, not the input. That way unknown keys are stripped automatically.", "Use `continue` after pushing an error, so each field gets at most one."]
resources: [{"title": "Zod documentation", "url": "https://zod.dev"}]
---
# Practice: A Tiny Schema Validator

Zod does a lot, but its core idea is small: describe the shape you expect, check the input against it, and return either **clean data** or a **list of errors**.

## Your task
Write `validate(schema, input)`. A schema maps field names to rules:

```js
const schema = {
  title: { type: 'string', required: true, maxLength: 100 },
  done: { type: 'boolean' },
  priority: { type: 'number', min: 1, max: 5 },
};
```

Return `{ ok: true, data }` or `{ ok: false, errors }`, where each error is `{ path, message }`:
- `input` that isn't a plain object → `[{ path: '', message: 'Expected an object' }]`.
- Missing (`undefined`) required field → `"Required"`. Optional missing fields are left out of `data`.
- Wrong type → `"Expected <type>"` (`null` is not a string, and `NaN` is not a number).
- String `maxLength` → `"Must be at most <n> characters"`. Strings are **trimmed** first, and a required string that's empty after trimming → `"Required"`.
- Number `min`/`max` → `"Must be at least <n>"` / `"Must be at most <n>"`.
- Unknown keys are **stripped** from `data` (that's how you stop mass assignment, like `{ "isAdmin": true }`).
- Report errors in schema order, at most one per field.
