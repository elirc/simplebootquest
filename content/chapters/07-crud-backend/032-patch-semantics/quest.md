---
slug: "crud-patch-semantics"
title: "PATCH Semantics: undefined vs null"
type: "code"
language: "ts"
xp: 20
hints: ["Loop over the patch entries and sort each key into: immutable, unknown, null, or a value.", "`\"key\" in patch` vs `patch.key === undefined` is the whole lesson here."]
resources: [{"title": "Zod: nullable and optional", "url": "https://zod.dev/?id=nullable"}]
---
# PATCH Semantics: undefined vs null

In a `PATCH` body, these mean different things:

```json
{ "dueDate": null }      // clear the due date
{ }                      // don't touch the due date
```

JavaScript keeps them apart (`null` vs a missing key, which is `undefined`), but sloppy code (`body.dueDate || existing.dueDate`) erases the distinction, and then users can never clear a field. Zod's `.nullable().optional()` models exactly this.

## Your task

`applyPatch(todo, patch)` returns the updated todo, where:

- A key **missing** from the patch keeps the existing value.
- `null` clears **nullable** fields: `dueDate`, `notes`. For non-nullable fields (`title`, `done`), `null` is an error.
- `title` is trimmed and must not be empty.
- `id`, `ownerId` and `createdAt` can never change, even if they're present in the patch.
- Any unknown key is an error.

Throw a `ValidationError` (provided in the starter) with `fields` mapping each bad key to a message: `"cannot be null"`, `"must not be empty"` or `"unknown field"`. Collect all the problems.
