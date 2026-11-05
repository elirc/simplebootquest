---
slug: "ts-infer-14"
title: "Type Inference Drill #14"
type: "quiz"
xp: 10
optional: true
section: "Practice: Type Inference & Errors"
questions: [{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = \"guest\";\n```","options":["`\"guest\" | string`","`String`","`\"guest\"`","`string`"],"answer":2,"explanation":"TypeScript infers `\"guest\"`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = Math.random() > 0.5 ? \"todo\" : 96;\n```","options":["`\"todo\"`","`\"todo\" | 96`","`string | number`","`any`"],"answer":1,"explanation":"TypeScript infers `\"todo\" | 96`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = Promise.resolve(85);\n```","options":["`Promise<number>`","`number`","`Promise<85>`","`Promise<any>`"],"answer":0,"explanation":"TypeScript infers `Promise<number>`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nfunction pick<T>(items: T[]): T | undefined {\n  return items[0];\n}\nconst x = pick([34, 35]);\n```","options":["`number`","`unknown`","`number | undefined`","`34 | undefined`"],"answer":2,"explanation":"TypeScript infers `number | undefined`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = \"admin\";\n```","options":["`string`","`\"admin\"`","`\"admin\" | string`","`String`"],"answer":1,"explanation":"TypeScript infers `\"admin\"`."}]
---
# Type Inference Drill #14

TypeScript infers types from values, so you rarely write annotations for local variables. Knowing *what* it infers is the key to reading error messages. Remember:

- `const` keeps **literal** types (`"draft"`), `let` **widens** them (`string`).
- `as const` makes everything `readonly` and literal.
- Array methods like `find` can return `undefined`.
- Narrowing (`typeof`, `??`, `!== null`) changes the type.

These answers come from the real TypeScript compiler in strict mode.
