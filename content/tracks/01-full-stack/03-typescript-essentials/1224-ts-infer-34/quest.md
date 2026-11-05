---
slug: "ts-infer-34"
title: "Type Inference Drill #34"
type: "quiz"
xp: 10
optional: true
section: "Practice: Type Inference & Errors"
questions: [{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [41, \"todo\"] as const;\n```","options":["`readonly (string | number)[]`","`[number, string]`","`(string | number)[]`","`readonly [41, \"todo\"]`"],"answer":3,"explanation":"TypeScript infers `readonly [41, \"todo\"]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = Promise.resolve(7);\n```","options":["`Promise<any>`","`Promise<7>`","`number`","`Promise<number>`"],"answer":3,"explanation":"TypeScript infers `Promise<number>`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nfunction pick<T>(items: T[]): T | undefined {\n  return items[0];\n}\nconst x = pick([61, 62]);\n```","options":["`61 | undefined`","`number`","`number | undefined`","`unknown`"],"answer":2,"explanation":"TypeScript infers `number | undefined`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = \"paid\".split(\"\");\n```","options":["`string`","`char[]`","`string[]`","`\"paid\"[]`"],"answer":2,"explanation":"TypeScript infers `string[]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = { id: 7, status: \"ok\" };\n```","options":["`{ id: 7; status: \"ok\"; }`","`{ readonly id: number; readonly status: string; }`","`object`","`{ id: number; status: string; }`"],"answer":3,"explanation":"TypeScript infers `{ id: number; status: string; }`."}]
---
# Type Inference Drill #34

TypeScript infers types from values, so you rarely write annotations for local variables. Knowing *what* it infers is the key to reading error messages. Remember:

- `const` keeps **literal** types (`"draft"`), `let` **widens** them (`string`).
- `as const` makes everything `readonly` and literal.
- Array methods like `find` can return `undefined`.
- Narrowing (`typeof`, `??`, `!== null`) changes the type.

These answers come from the real TypeScript compiler in strict mode.
