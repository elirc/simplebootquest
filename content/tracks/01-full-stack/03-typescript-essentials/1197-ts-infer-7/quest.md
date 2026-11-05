---
slug: "ts-infer-7"
title: "Type Inference Drill #7"
type: "quiz"
xp: 10
optional: true
section: "Practice: Type Inference & Errors"
questions: [{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = Promise.resolve(55);\n```","options":["`Promise<any>`","`Promise<55>`","`number`","`Promise<number>`"],"answer":3,"explanation":"TypeScript infers `Promise<number>`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = Promise.resolve(48);\n```","options":["`Promise<number>`","`Promise<any>`","`Promise<48>`","`number`"],"answer":0,"explanation":"TypeScript infers `Promise<number>`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [13, 14].find((v) => v > 13);\n```","options":["`number[]`","`number`","`boolean`","`number | undefined`"],"answer":3,"explanation":"TypeScript infers `number | undefined`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\ndeclare const s: \"guest\" | \"todo\";\nlet x = s;\n```","options":["`any`","`\"guest\"`","`string`","`\"guest\" | \"todo\"`"],"answer":3,"explanation":"TypeScript infers `\"guest\" | \"todo\"`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = Object.keys({ todo: 66 });\n```","options":["`string[]`","`string`","`\"todo\"[]`","`(keyof { todo: number })[]`"],"answer":0,"explanation":"TypeScript infers `string[]`."}]
---
# Type Inference Drill #7

TypeScript infers types from values, so you rarely write annotations for local variables. Knowing *what* it infers is the key to reading error messages. Remember:

- `const` keeps **literal** types (`"draft"`), `let` **widens** them (`string`).
- `as const` makes everything `readonly` and literal.
- Array methods like `find` can return `undefined`.
- Narrowing (`typeof`, `??`, `!== null`) changes the type.

These answers come from the real TypeScript compiler in strict mode.
