---
slug: "testing-factories"
title: "Test Data Factories"
type: "code"
language: "ts"
xp: 20
hints: ["Keep a `sequence` counter in the closure.", "Merge nested objects only when both the default and the override are plain objects."]
resources: [{"title": "fishery", "url": "https://github.com/thoughtbot/fishery"}]
---
# Test Data Factories

Tests that build objects by hand get noisy and brittle. Add one required field to `User`, and 200 tests break. **Factories** create valid objects with sensible defaults, and each test overrides only what it cares about:

```ts
const admin = buildUser({ role: 'admin' });
const [a, b] = buildList(buildUser, 2);
```

Unique fields (ids, emails) come from a **sequence**, so tests never collide. Libraries like `fishery` do this, but a hand-written factory is ~20 lines.

## Your task

1. `createFactory(defaults: (n: number) => T)` returns `build(overrides?)`, which calls `defaults` with an incrementing sequence number (starting at 1) and merges in the overrides. Nested objects are merged **one level deep** (`build({ address: { city: 'Paris' } })` keeps the default street).
2. `build.reset()` resets the sequence.
3. `buildList(build, count, overrides?)` builds an array.
