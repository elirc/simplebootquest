---
slug: "ts-infer-52"
title: "Type Inference Drill #52"
type: "quiz"
xp: 10
optional: true
section: "Practice: Type Inference & Errors"
questions: [{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nfunction pick<T>(items: T[]): T | undefined {\n  return items[0];\n}\nconst x = pick([24, 25]);\n```","options":["`24 | undefined`","`number | undefined`","`unknown`","`number`"],"answer":1,"explanation":"TypeScript infers `number | undefined`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\ndeclare const id: string | null;\nconst x = id ?? 59;\n```","options":["`string | 59`","`string | null`","`string | null | 59`","`string`"],"answer":0,"explanation":"TypeScript infers `string | 59`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [38, null, 40].filter((v) => v !== null);\n```","options":["`number`","`number[]`","`(number | null)[]`","`null[]`"],"answer":1,"explanation":"TypeScript infers `number[]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = Math.random() > 0.5 ? \"open\" : 3;\n```","options":["`string | number`","`\"open\" | 3`","`any`","`\"open\"`"],"answer":1,"explanation":"TypeScript infers `\"open\" | 3`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = Promise.resolve(79);\n```","options":["`Promise<number>`","`number`","`Promise<any>`","`Promise<79>`"],"answer":0,"explanation":"TypeScript infers `Promise<number>`."}]
---
# Type Inference Drill #52

TypeScript infers types from values, so you rarely write annotations for local variables. Knowing *what* it infers is the key to reading error messages. Remember:

- `const` keeps **literal** types (`"draft"`), `let` **widens** them (`string`).
- `as const` makes everything `readonly` and literal.
- Array methods like `find` can return `undefined`.
- Narrowing (`typeof`, `??`, `!== null`) changes the type.

These answers come from the real TypeScript compiler in strict mode.
