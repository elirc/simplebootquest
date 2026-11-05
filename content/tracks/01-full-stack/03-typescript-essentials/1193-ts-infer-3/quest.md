---
slug: "ts-infer-3"
title: "Type Inference Drill #3"
type: "quiz"
xp: 10
optional: true
section: "Practice: Type Inference & Errors"
questions: [{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nlet x = 79;\n```","options":["`79`","`unknown`","`any`","`number`"],"answer":3,"explanation":"TypeScript infers `number`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [{ id: 57 }, { id: 58, label: \"todo\" }];\n```","options":["`({ id: number; label?: undefined; } | { id: number; label: string; })[]`","`{ id: number; label: string; }[]`","`object[]`","`({ id: number; } & { label: string; })[]`"],"answer":0,"explanation":"TypeScript infers `({ id: number; label?: undefined; } | { id: number; label: string; })[]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = ([\"guest\", \"ok\"] as const)[0];\n```","options":["`\"guest\"`","`\"guest\" | \"ok\"`","`string`","`readonly [\"guest\", \"ok\"]`"],"answer":0,"explanation":"TypeScript infers `\"guest\"`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nfunction pick<T>(items: T[]): T | undefined {\n  return items[0];\n}\nconst x = pick([30, 31]);\n```","options":["`unknown`","`number`","`30 | undefined`","`number | undefined`"],"answer":3,"explanation":"TypeScript infers `number | undefined`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = \"open\".split(\"\");\n```","options":["`string`","`char[]`","`string[]`","`\"open\"[]`"],"answer":2,"explanation":"TypeScript infers `string[]`."}]
---
# Type Inference Drill #3

TypeScript infers types from values, so you rarely write annotations for local variables. Knowing *what* it infers is the key to reading error messages. Remember:

- `const` keeps **literal** types (`"draft"`), `let` **widens** them (`string`).
- `as const` makes everything `readonly` and literal.
- Array methods like `find` can return `undefined`.
- Narrowing (`typeof`, `??`, `!== null`) changes the type.

These answers come from the real TypeScript compiler in strict mode.
