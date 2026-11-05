---
slug: "ts-infer-40"
title: "Type Inference Drill #40"
type: "quiz"
xp: 10
optional: true
section: "Practice: Type Inference & Errors"
questions: [{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [28, 29].map(String);\n```","options":["`string[]`","`any[]`","`number[]`","`String[]`"],"answer":0,"explanation":"TypeScript infers `string[]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nfunction pick<T>(items: T[]): T | undefined {\n  return items[0];\n}\nconst x = pick([12, 13]);\n```","options":["`unknown`","`number`","`number | undefined`","`12 | undefined`"],"answer":2,"explanation":"TypeScript infers `number | undefined`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nlet x = 24;\n```","options":["`24`","`any`","`number`","`unknown`"],"answer":2,"explanation":"TypeScript infers `number`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [5, \"admin\"];\n```","options":["`any[]`","`(string | number)[]`","`[number, string]`","`(5 | \"admin\")[]`"],"answer":1,"explanation":"TypeScript infers `(string | number)[]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [82, 83].map(String);\n```","options":["`number[]`","`string[]`","`any[]`","`String[]`"],"answer":1,"explanation":"TypeScript infers `string[]`."}]
---
# Type Inference Drill #40

TypeScript infers types from values, so you rarely write annotations for local variables. Knowing *what* it infers is the key to reading error messages. Remember:

- `const` keeps **literal** types (`"draft"`), `let` **widens** them (`string`).
- `as const` makes everything `readonly` and literal.
- Array methods like `find` can return `undefined`.
- Narrowing (`typeof`, `??`, `!== null`) changes the type.

These answers come from the real TypeScript compiler in strict mode.
