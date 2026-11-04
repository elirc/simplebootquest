---
slug: "ts-mini-zod"
title: "Build a Mini Zod"
type: "code"
language: "ts"
xp: 35
hints: ["Every schema is just `{ parse(value) { ... } }`.", "In `object` and `array`, catch child `SchemaError`s and prefix their paths with the key or index.", "Write a shared `primitive(check, message)` helper for string, number and boolean."]
resources: [{"title": "Zod source code", "url": "https://github.com/colinhacks/zod"}]
---
# Build a Mini Zod

Zod lets you write a schema **once** and get both runtime validation **and** a TypeScript type:

```ts
const User = z.object({ name: z.string(), age: z.number() });
type User = z.infer<typeof User>;   // { name: string; age: number }
User.parse(input);                  // validates at runtime
```

Under the hood, each schema is an object with a `parse` method. `object()` composes the schemas of its fields. You'll build a tiny version: the runtime half (the clever type inference is a stretch goal).

## Your task

Implement the factories below. Every schema has `parse(value)`, which returns the parsed value or throws `SchemaError`, whose `issues` is an array of `{ path, message }` (path is a dot-joined string, `""` for the root).

- `string()`: message `"Expected string"`.
- `number()`: message `"Expected number"` (reject `NaN`).
- `boolean()`: message `"Expected boolean"`.
- `optional(schema)`: `undefined` passes through.
- `array(schema)`: message `"Expected array"`. Element issues get paths like `"tags.0"`.
- `object(shape)`: message `"Expected object"`. Collects **all** field issues, with paths. Unknown keys are stripped.

`SchemaError` extends `Error` with message `"Validation failed"`.
