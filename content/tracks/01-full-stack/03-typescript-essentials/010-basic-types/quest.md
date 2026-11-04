---
slug: ts-basic-types
title: Basic Types
type: code
language: ts
xp: 15
hints: ["`(Math.abs(cents) / 100).toFixed(2)` gives the number part.", "A regex like `/^\\d+$/` checks for digits only."]
resources: [{"title": "TS Handbook: Everyday Types", "url": "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"}]
---
# Basic Types

TypeScript adds **type annotations** after a colon:

```ts
let title: string = 'Learn TS';
let count: number = 3;
let done: boolean = false;
let tags: string[] = ['a', 'b'];
let pair: [string, number] = ['age', 42]; // tuple

function add(a: number, b: number): number {
  return a + b;
}
add('1', 2); // ❌ compile error: string isn't assignable to number
```

### Type inference

You rarely need to annotate everything. TypeScript **infers** types from values:

```ts
const name = 'Ada'; // inferred as string
const nums = [1, 2]; // inferred as number[]
```

**Convention:** annotate function parameters and exported return types. Let inference handle local variables.

### `any` vs `unknown`

- `any` switches the type checker off. Avoid it.
- `unknown` means "could be anything, so prove what it is before using it." It's the safe choice for data from outside your program.

### Optional parameters

```ts
function greet(name: string, greeting?: string) { ... } // greeting: string | undefined
```

## Your task

1. `formatPrice(cents: number, currency?: string): string` turns integer cents into a price string like `"$12.50"`. Currency defaults to `"$"`, and negative amounts look like `"-$3.00"`.
2. `parseQuantity(input: string): number | null` parses a positive whole number from a string (surrounding whitespace allowed). Return `null` for anything else (`"abc"`, `"2.5"`, `"0"`, `"-1"`, `""`).

Why integer cents? Floating point can't represent `0.1` exactly. Money should always be stored as integers.
