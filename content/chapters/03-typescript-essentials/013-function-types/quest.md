---
slug: "ts-function-types"
title: "Typing Functions"
type: "code"
language: "ts"
xp: 15
hints: ["`combine` returns a new validator that loops over the others.", "Use a rest parameter with a generic tuple type: `(...args: A) => R`."]
resources: [{"title": "TS Handbook: More on Functions", "url": "https://www.typescriptlang.org/docs/handbook/2/functions.html"}]
---
# Typing Functions

```ts
// a function type
type Predicate<T> = (value: T) => boolean;
type Handler = (req: Request, res: Response) => Promise<void>;

// optional and default parameters
function greet(name: string, greeting = 'Hello'): string { ... }

// callbacks
function onEach<T>(items: T[], cb: (item: T, index: number) => void): void { ... }

// void: the return value is ignored
// never: the function never returns (it always throws, or loops forever)
function fail(message: string): never { throw new Error(message); }
```

Typing callbacks well gives you autocompletion **inside** the callback. You never need to annotate `item` yourself.

## Your task

1. `type Validator<T> = (value: T) => string | null` and `combine<T>(...validators: Validator<T>[]): Validator<T>`, which returns the first error.
2. `assertNever(value: never): never` throws `Error("Unexpected value: <value>")`.
3. `retryable<A extends unknown[], R>(fn: (...args: A) => R, attempts: number): (...args: A) => R` calls `fn` up to `attempts` times **synchronously** until it doesn't throw, and rethrows the last error.
