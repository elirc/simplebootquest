---
slug: ts-generics
title: Generics
type: code
language: ts
xp: 20
hints: ["`(groups[key] ??= []).push(item)`.", "A `Set` remembers the keys you have seen."]
resources: [{"title": "TS Handbook: Generics", "url": "https://www.typescriptlang.org/docs/handbook/2/generics.html"}]
---
# Generics

Generics are **type parameters**. They let one function work with many types while keeping type safety.

```ts
function first<T>(items: T[]): T | undefined {
  return items[0];
}
first([1, 2]);        // T = number → returns number | undefined
first(['a', 'b']);    // T = string
```

Without generics you'd write `any[]` and lose all type information about what comes out.

### Constraints

Restrict what `T` can be with `extends`:

```ts
function byId<T extends { id: number }>(items: T[], id: number): T | undefined {
  return items.find((item) => item.id === id);
}
```

### Multiple type parameters

```ts
function groupBy<T, K extends string | number>(items: T[], key: (item: T) => K): Record<K, T[]> { ... }
```

You use generics constantly without noticing: `Array<T>`, `Promise<T>`, `useState<T>()`, `Map<K, V>`.

## Your task

1. `groupBy(items, keyFn)` groups items into an object keyed by `keyFn(item)`, keeping each group in input order.
2. `uniqueBy(items, keyFn)` returns the items with duplicate keys removed, keeping the **first** occurrence.
3. `indexById(items)` takes items with an `id` and returns a `Map` from id to item.
