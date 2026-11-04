---
slug: "ts-result-helpers"
title: "Working with Result<T, E>"
type: "code"
language: "ts"
xp: 20
hints: ["`map` and `andThen` both start with `result.ok ? ... : result`.", "Build `parsePort` as \"parse\" followed by `andThen(check range)`."]
---
# Working with Result<T, E>

You met `Result` when validating unknown data. Small helper functions make it pleasant to use:

```ts
type Result<T, E = string> = { ok: true; value: T } | { ok: false; error: E };

const ok = <T>(value: T): Result<T, never> => ({ ok: true, value });
const err = <E>(error: E): Result<never, E> => ({ ok: false, error });
```

With `map` and `andThen` you can chain operations that might fail, without nested `if`s. Each step runs only if the previous one succeeded. It's the same idea as `.then` on promises.

## Your task

1. `ok(value)` and `err(error)` constructors.
2. `map(result, fn)` applies `fn` to the value of an ok result, and passes errors through unchanged.
3. `andThen(result, fn)`, where `fn` itself returns a Result (this is "flatMap").
4. `unwrapOr(result, fallback)`.
5. Use them in `parsePort(input: string)`: parse an integer (error `"not a number"`), then check 1–65535 (error `"out of range"`).
