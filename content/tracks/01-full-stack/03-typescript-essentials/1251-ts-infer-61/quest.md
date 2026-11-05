---
slug: "ts-infer-61"
title: "Type Inference Drill #61"
type: "quiz"
xp: 10
optional: true
section: "Practice: Type Inference & Errors"
questions: [{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [27, \"paid\"];\n```","options":["`any[]`","`[number, string]`","`(string | number)[]`","`(27 | \"paid\")[]`"],"answer":2,"explanation":"TypeScript infers `(string | number)[]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = new Set([\"guest\", \"draft\"]);\n```","options":["`string[]`","`Set<any>`","`Set<\"guest\" | \"draft\">`","`Set<string>`"],"answer":3,"explanation":"TypeScript infers `Set<string>`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = 70;\n```","options":["`any`","`70`","`number`","`70 | number`"],"answer":1,"explanation":"TypeScript infers `70`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = \"draft\".split(\"\");\n```","options":["`\"draft\"[]`","`string[]`","`string`","`char[]`"],"answer":1,"explanation":"TypeScript infers `string[]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = \"paid\";\n```","options":["`String`","`\"paid\" | string`","`\"paid\"`","`string`"],"answer":2,"explanation":"TypeScript infers `\"paid\"`."}]
---
# Type Inference Drill #61

TypeScript infers types from values, so you rarely write annotations for local variables. Knowing *what* it infers is the key to reading error messages. Remember:

- `const` keeps **literal** types (`"draft"`), `let` **widens** them (`string`).
- `as const` makes everything `readonly` and literal.
- Array methods like `find` can return `undefined`.
- Narrowing (`typeof`, `??`, `!== null`) changes the type.

These answers come from the real TypeScript compiler in strict mode.
