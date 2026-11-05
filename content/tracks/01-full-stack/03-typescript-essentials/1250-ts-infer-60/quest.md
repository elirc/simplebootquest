---
slug: "ts-infer-60"
title: "Type Inference Drill #60"
type: "quiz"
xp: 10
optional: true
section: "Practice: Type Inference & Errors"
questions: [{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [69, 70].map(String);\n```","options":["`any[]`","`string[]`","`String[]`","`number[]`"],"answer":1,"explanation":"TypeScript infers `string[]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\ndeclare const id: string | null;\nconst x = id ?? 7;\n```","options":["`string`","`string | null`","`string | 7`","`string | null | 7`"],"answer":2,"explanation":"TypeScript infers `string | 7`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [35, 36].find((v) => v > 35);\n```","options":["`number | undefined`","`number[]`","`number`","`boolean`"],"answer":0,"explanation":"TypeScript infers `number | undefined`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nfunction pick<T>(items: T[]): T | undefined {\n  return items[0];\n}\nconst x = pick([88, 89]);\n```","options":["`88 | undefined`","`number`","`number | undefined`","`unknown`"],"answer":2,"explanation":"TypeScript infers `number | undefined`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [27, null, 29].filter((v) => v !== null);\n```","options":["`number`","`null[]`","`(number | null)[]`","`number[]`"],"answer":3,"explanation":"TypeScript infers `number[]`."}]
---
# Type Inference Drill #60

TypeScript infers types from values, so you rarely write annotations for local variables. Knowing *what* it infers is the key to reading error messages. Remember:

- `const` keeps **literal** types (`"draft"`), `let` **widens** them (`string`).
- `as const` makes everything `readonly` and literal.
- Array methods like `find` can return `undefined`.
- Narrowing (`typeof`, `??`, `!== null`) changes the type.

These answers come from the real TypeScript compiler in strict mode.
