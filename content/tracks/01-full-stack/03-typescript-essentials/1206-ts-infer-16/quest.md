---
slug: "ts-infer-16"
title: "Type Inference Drill #16"
type: "quiz"
xp: 10
optional: true
section: "Practice: Type Inference & Errors"
questions: [{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = new Set([\"ok\", \"draft\"]);\n```","options":["`Set<string>`","`Set<any>`","`Set<\"ok\" | \"draft\">`","`string[]`"],"answer":0,"explanation":"TypeScript infers `Set<string>`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\ndeclare const s: \"draft\" | \"paid\";\nlet x = s;\n```","options":["`any`","`string`","`\"draft\" | \"paid\"`","`\"draft\"`"],"answer":2,"explanation":"TypeScript infers `\"draft\" | \"paid\"`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [92, \"draft\"];\n```","options":["`(string | number)[]`","`any[]`","`[number, string]`","`(92 | \"draft\")[]`"],"answer":0,"explanation":"TypeScript infers `(string | number)[]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [15, 16].find((v) => v > 15);\n```","options":["`boolean`","`number`","`number | undefined`","`number[]`"],"answer":2,"explanation":"TypeScript infers `number | undefined`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = Math.random() > 0.5 ? \"guest\" : 34;\n```","options":["`\"guest\"`","`any`","`string | number`","`\"guest\" | 34`"],"answer":3,"explanation":"TypeScript infers `\"guest\" | 34`."}]
---
# Type Inference Drill #16

TypeScript infers types from values, so you rarely write annotations for local variables. Knowing *what* it infers is the key to reading error messages. Remember:

- `const` keeps **literal** types (`"draft"`), `let` **widens** them (`string`).
- `as const` makes everything `readonly` and literal.
- Array methods like `find` can return `undefined`.
- Narrowing (`typeof`, `??`, `!== null`) changes the type.

These answers come from the real TypeScript compiler in strict mode.
