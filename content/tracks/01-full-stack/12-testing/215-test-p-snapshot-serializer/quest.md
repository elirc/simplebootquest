---
slug: "test-p-snapshot-serializer"
title: "Practice: A Snapshot Serializer"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice"
hints: ["Recurse with `indent + \"  \"` for children. The closing bracket uses the current `indent`."]
---
# Practice: A Snapshot Serializer

Snapshot tests (`toMatchSnapshot`) save a **text rendering** of a value and compare it on future runs. The serializer must be **deterministic**, or snapshots change for no reason and people learn to blindly press "update".

## Your task
Write `serialize(value, indent = '')` producing a readable, stable string:
- Primitives: strings in double quotes via `JSON.stringify`. Numbers, booleans and `null` as-is, and `undefined` as `undefined`.
- `Date` → `Date(2026-01-01T00:00:00.000Z)`, and a function → `[Function name]` (or `[Function anonymous]`).
- Empty arrays → `[]`, and empty objects → `{}`.
- Arrays: `[` then one element per line, indented two more spaces, each followed by `,`, then `]`.
- Objects: like arrays, but keys are **sorted** and written `key: value,`. Wrap keys in quotes (via `JSON.stringify`) unless they're valid identifiers (`/^[A-Za-z_$][\w$]*$/`).
- Nested values use the deeper indent.
