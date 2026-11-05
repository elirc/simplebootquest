---
slug: "ts-infer-27"
title: "Type Inference Drill #27"
type: "quiz"
xp: 10
optional: true
section: "Practice: Type Inference & Errors"
questions: [{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nlet x = \"draft\";\n```","options":["`String`","`any`","`string`","`\"draft\"`"],"answer":2,"explanation":"TypeScript infers `string`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nlet x = \"todo\";\n```","options":["`any`","`string`","`\"todo\"`","`String`"],"answer":1,"explanation":"TypeScript infers `string`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\ndeclare const n: number;\nconst x = n > 39 && \"draft\";\n```","options":["`false | \"draft\"`","`\"draft\"`","`boolean`","`string | boolean`"],"answer":0,"explanation":"TypeScript infers `false | \"draft\"`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [30, 31].map(String);\n```","options":["`number[]`","`any[]`","`String[]`","`string[]`"],"answer":3,"explanation":"TypeScript infers `string[]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nfunction pick<T>(items: T[]): T | undefined {\n  return items[0];\n}\nconst x = pick([74, 75]);\n```","options":["`74 | undefined`","`unknown`","`number | undefined`","`number`"],"answer":2,"explanation":"TypeScript infers `number | undefined`."}]
---
# Type Inference Drill #27

TypeScript infers types from values, so you rarely write annotations for local variables. Knowing *what* it infers is the key to reading error messages. Remember:

- `const` keeps **literal** types (`"draft"`), `let` **widens** them (`string`).
- `as const` makes everything `readonly` and literal.
- Array methods like `find` can return `undefined`.
- Narrowing (`typeof`, `??`, `!== null`) changes the type.

These answers come from the real TypeScript compiler in strict mode.
