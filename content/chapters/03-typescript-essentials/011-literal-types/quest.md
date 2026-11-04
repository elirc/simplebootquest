---
slug: "ts-literal-types"
title: "Literal Types & as const"
type: "code"
language: "ts"
xp: 15
hints: ["`(typeof PRIORITIES)[number]` extracts the union of element types.", "Use `% PRIORITIES.length` to wrap around."]
resources: [{"title": "TS Handbook: Literal types", "url": "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types"}]
---
# Literal Types & `as const`

A **literal type** is a single exact value: `'GET'`, `404`, `true`. Unions of literals model fixed sets of options without needing enums:

```ts
type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';
let m: Method = 'GET';
m = 'PATCH';   // ❌ Type '"PATCH"' is not assignable to type 'Method'
```

`as const` freezes a value's type to its literals, and you can derive a union from an array:

```ts
const ROLES = ['admin', 'editor', 'member'] as const;
type Role = (typeof ROLES)[number];     // 'admin' | 'editor' | 'member'
```

Now there's **one source of truth**: the array for runtime checks, and the type derived from it.

## Your task

1. Export `const PRIORITIES = ['low', 'medium', 'high'] as const` and `type Priority`, derived from it.
2. `isPriority(value: unknown): value is Priority` checks against the array at runtime.
3. `nextPriority(p)` cycles `low → medium → high → low`.
4. `priorityWeight(p)` returns `1`, `2` or `3`, using a `Record<Priority, number>` lookup.
