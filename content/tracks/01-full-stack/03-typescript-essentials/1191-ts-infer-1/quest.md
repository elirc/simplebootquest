---
slug: "ts-infer-1"
title: "Type Inference Drill #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Type Inference & Errors"
questions: [{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = new Set([\"error\", \"todo\"]);\n```","options":["`string[]`","`Set<string>`","`Set<any>`","`Set<\"error\" | \"todo\">`"],"answer":1,"explanation":"TypeScript infers `Set<string>`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nlet x = 7;\n```","options":["`number`","`any`","`unknown`","`7`"],"answer":0,"explanation":"TypeScript infers `number`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = \"open\";\n```","options":["`string`","`String`","`\"open\"`","`\"open\" | string`"],"answer":2,"explanation":"TypeScript infers `\"open\"`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [29, null, 31].filter((v) => v !== null);\n```","options":["`number[]`","`number`","`null[]`","`(number | null)[]`"],"answer":0,"explanation":"TypeScript infers `number[]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = 8;\n```","options":["`8 | number`","`any`","`number`","`8`"],"answer":3,"explanation":"TypeScript infers `8`."}]
---
# Type Inference Drill #1

TypeScript infers types from values, so you rarely write annotations for local variables. Knowing *what* it infers is the key to reading error messages. Remember:

- `const` keeps **literal** types (`"draft"`), `let` **widens** them (`string`).
- `as const` makes everything `readonly` and literal.
- Array methods like `find` can return `undefined`.
- Narrowing (`typeof`, `??`, `!== null`) changes the type.

These answers come from the real TypeScript compiler in strict mode.
