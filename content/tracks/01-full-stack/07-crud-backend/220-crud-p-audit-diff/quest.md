---
slug: "crud-p-audit-diff"
title: "Practice: An Audit Log Diff"
type: "code"
language: "js"
xp: 15
hints: ["Union the keys of both objects with a `Set`, then sort."]
---
# Practice: An Audit Log Diff

"Who changed the price, and when?" Many apps keep an **audit log**: for each update, record which fields changed from what to what.

## Your task
Write `diff(before, after, { ignore = ['updatedAt'] } = {})` returning an array of `{ field, from, to }`:
- Look at every key in either object (sorted alphabetically for stable output).
- A field counts as changed when its values differ. Compare `Date`s by time, and arrays or plain objects by their `JSON.stringify` form.
- A key missing on one side counts as `undefined`.
- Skip the fields listed in `ignore`.
