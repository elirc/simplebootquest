---
slug: "ts-type-guards"
title: "Custom Type Guards"
type: "code"
language: "ts"
xp: 20
hints: ["Arrays are objects too, so exclude them explicitly with `Array.isArray`.", "A type-guard callback looks like `(x): x is T => x != null`."]
resources: [{"title": "TS Handbook: Using type predicates", "url": "https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates"}]
---
# Custom Type Guards

TypeScript narrows types with `typeof`, `instanceof`, `in`, and equality checks. For your own shapes, write a **type guard**: a function returning `value is SomeType`.

```ts
interface Cat { meow(): string }
interface Dog { bark(): string }

function isCat(pet: Cat | Dog): pet is Cat {
  return 'meow' in pet;
}

if (isCat(pet)) pet.meow();   // narrowed to Cat
```

Guards on `unknown` are how you safely handle JSON, `localStorage` values, and caught errors (in TypeScript, `catch (err)` gives you `unknown`).

## Your task

1. `isRecord(v: unknown): v is Record<string, unknown>` is true for non-null, non-array objects.
2. `hasMessage(err: unknown): err is { message: string }`.
3. `errorMessage(err: unknown): string` returns `err.message` when there is one, the string itself if `err` is a string, or `"Unknown error"`.
4. `isStringArray(v: unknown): v is string[]`.
5. `filterDefined<T>(items: (T | null | undefined)[]): T[]`, written using a type guard in `filter`.
