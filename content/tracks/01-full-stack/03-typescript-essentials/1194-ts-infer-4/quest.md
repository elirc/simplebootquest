---
slug: "ts-infer-4"
title: "Type Inference Drill #4"
type: "quiz"
xp: 10
optional: true
section: "Practice: Type Inference & Errors"
questions: [{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [60, 61].find((v) => v > 60);\n```","options":["`boolean`","`number | undefined`","`number[]`","`number`"],"answer":1,"explanation":"TypeScript infers `number | undefined`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [69, \"paid\"];\n```","options":["`(69 | \"paid\")[]`","`any[]`","`(string | number)[]`","`[number, string]`"],"answer":2,"explanation":"TypeScript infers `(string | number)[]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = 87;\n```","options":["`87 | number`","`any`","`87`","`number`"],"answer":2,"explanation":"TypeScript infers `87`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nlet x = \"paid\";\n```","options":["`string`","`\"paid\"`","`any`","`String`"],"answer":0,"explanation":"TypeScript infers `string`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\ndeclare const n: number;\nconst x = n > 96 && \"todo\";\n```","options":["`\"todo\"`","`false | \"todo\"`","`string | boolean`","`boolean`"],"answer":1,"explanation":"TypeScript infers `false | \"todo\"`."}]
---
# Type Inference Drill #4

TypeScript infers types from values, so you rarely write annotations for local variables. Knowing *what* it infers is the key to reading error messages. Remember:

- `const` keeps **literal** types (`"draft"`), `let` **widens** them (`string`).
- `as const` makes everything `readonly` and literal.
- Array methods like `find` can return `undefined`.
- Narrowing (`typeof`, `??`, `!== null`) changes the type.

These answers come from the real TypeScript compiler in strict mode.
