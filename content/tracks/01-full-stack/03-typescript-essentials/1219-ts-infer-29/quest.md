---
slug: "ts-infer-29"
title: "Type Inference Drill #29"
type: "quiz"
xp: 10
optional: true
section: "Practice: Type Inference & Errors"
questions: [{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\ndeclare const n: number;\nconst x = n > 86 && \"admin\";\n```","options":["`false | \"admin\"`","`string | boolean`","`boolean`","`\"admin\"`"],"answer":0,"explanation":"TypeScript infers `false | \"admin\"`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = new Set([\"todo\", \"paid\"]);\n```","options":["`Set<any>`","`Set<\"todo\" | \"paid\">`","`string[]`","`Set<string>`"],"answer":3,"explanation":"TypeScript infers `Set<string>`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nfunction pick<T>(items: T[]): T | undefined {\n  return items[0];\n}\nconst x = pick([11, 12]);\n```","options":["`number`","`number | undefined`","`unknown`","`11 | undefined`"],"answer":1,"explanation":"TypeScript infers `number | undefined`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = Promise.resolve(76);\n```","options":["`Promise<number>`","`Promise<76>`","`number`","`Promise<any>`"],"answer":0,"explanation":"TypeScript infers `Promise<number>`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst statuses = [\"draft\", \"open\"] as const;\nconst x: (typeof statuses)[number] = \"draft\";\n```","options":["`\"draft\" | \"open\"`","`readonly [\"draft\", \"open\"]`","`never`","`string`"],"answer":0,"explanation":"TypeScript infers `\"draft\" | \"open\"`."}]
---
# Type Inference Drill #29

TypeScript infers types from values, so you rarely write annotations for local variables. Knowing *what* it infers is the key to reading error messages. Remember:

- `const` keeps **literal** types (`"draft"`), `let` **widens** them (`string`).
- `as const` makes everything `readonly` and literal.
- Array methods like `find` can return `undefined`.
- Narrowing (`typeof`, `??`, `!== null`) changes the type.

These answers come from the real TypeScript compiler in strict mode.
