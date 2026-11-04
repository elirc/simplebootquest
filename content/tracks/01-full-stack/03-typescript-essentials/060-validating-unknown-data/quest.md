---
slug: ts-validating-unknown-data
title: Validating Unknown Data
type: code
language: ts
xp: 25
hints: ["Check `typeof input !== \"object\" || input === null || Array.isArray(input)` first.", "Collect errors in an array and only return `ok: true` if it is empty."]
resources: [{"title": "Zod", "url": "https://zod.dev/"}]
---
# Validating Unknown Data

**Types disappear at runtime.** When JSON arrives from an HTTP request, a file or `localStorage`, TypeScript has no idea what's actually inside. Writing `const todo = JSON.parse(body) as Todo` is a lie that the compiler will happily believe.

The safe pattern: treat outside data as `unknown`, then **prove** its shape with a *type guard*:

```ts
function isTodo(value: unknown): value is Todo {
  return (
    typeof value === 'object' && value !== null &&
    typeof (value as Todo).id === 'number' &&
    typeof (value as Todo).title === 'string'
  );
}

const data: unknown = await res.json();
if (isTodo(data)) {
  data.title; // ✅ narrowed to Todo
}
```

The `value is Todo` return type tells TypeScript that if this function returns true, the value is a `Todo`.

### The Result pattern

Instead of throwing, return a discriminated union that callers must check:

```ts
type Result<T> = { ok: true; data: T } | { ok: false; errors: string[] };
```

Libraries like **Zod** automate this, and this app's own backend uses Zod. But writing one by hand once shows you exactly what they do.

## Your task

Implement `parseTodoInput(input: unknown): Result<TodoInput>`. A valid input is an object where:

- `title` is a string that, once trimmed, is 1–100 characters (return the trimmed title).
- `done` is optional. If present, it must be a boolean. It defaults to `false`.
- `tags` is optional. If present, it must be an array of strings. It defaults to `[]`.

Collect **every** problem rather than stopping at the first one. Use these exact messages:

- `"Input must be an object"` (and stop: there's nothing else to check)
- `"title is required"` (missing, not a string, or empty after trimming)
- `"title must be at most 100 characters"`
- `"done must be a boolean"`
- `"tags must be an array of strings"`
