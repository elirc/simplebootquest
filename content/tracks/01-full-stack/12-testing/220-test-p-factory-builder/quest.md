---
slug: "test-p-factory-builder"
title: "Practice: Test Data Builders with Sequences"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice"
hints: ["Merge recursively only when BOTH sides are plain objects. Everything else is replaced."]
---
# Practice: Test Data Builders with Sequences

Test data factories keep tests short and focused: `buildUser({ role: 'admin' })` says exactly what matters in this test, and everything else gets a sensible default. **Sequences** give each object a unique id and email, so unique constraints never collide.

## Your task
Write `defineFactory(defaults)`, where `defaults` is a function `(n) => object` that receives a sequence number (1, 2, 3…). It returns:
- `build(overrides = {})`: calls `defaults(n)` with the next sequence number and **deep-merges** `overrides` on top. Plain objects merge recursively. Arrays and other values replace.
- `buildList(count, overrides = {})`: builds `count` objects. `overrides` may also be a function `(i) => overrides` that receives the index (0-based).
- `reset()`: restarts the sequence at 1 (call it in `beforeEach`).
