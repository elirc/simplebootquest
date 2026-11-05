---
slug: "ts-infer-22"
title: "Type Inference Drill #22"
type: "quiz"
xp: 10
optional: true
section: "Practice: Type Inference & Errors"
questions: [{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [61, \"paid\"] as const;\n```","options":["`readonly [61, \"paid\"]`","`readonly (string | number)[]`","`(string | number)[]`","`[number, string]`"],"answer":0,"explanation":"TypeScript infers `readonly [61, \"paid\"]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [62, 63].find((v) => v > 62);\n```","options":["`boolean`","`number`","`number[]`","`number | undefined`"],"answer":3,"explanation":"TypeScript infers `number | undefined`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\ndeclare const id: string | null;\nconst x = id ?? 90;\n```","options":["`string | 90`","`string | null | 90`","`string`","`string | null`"],"answer":0,"explanation":"TypeScript infers `string | 90`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nfunction pick<T>(items: T[]): T | undefined {\n  return items[0];\n}\nconst x = pick([68, 69]);\n```","options":["`68 | undefined`","`number | undefined`","`number`","`unknown`"],"answer":1,"explanation":"TypeScript infers `number | undefined`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = Math.random() > 0.5 ? \"ok\" : 10;\n```","options":["`any`","`\"ok\" | 10`","`string | number`","`\"ok\"`"],"answer":1,"explanation":"TypeScript infers `\"ok\" | 10`."}]
---
# Type Inference Drill #22

TypeScript infers types from values, so you rarely write annotations for local variables. Knowing *what* it infers is the key to reading error messages. Remember:

- `const` keeps **literal** types (`"draft"`), `let` **widens** them (`string`).
- `as const` makes everything `readonly` and literal.
- Array methods like `find` can return `undefined`.
- Narrowing (`typeof`, `??`, `!== null`) changes the type.

These answers come from the real TypeScript compiler in strict mode.
