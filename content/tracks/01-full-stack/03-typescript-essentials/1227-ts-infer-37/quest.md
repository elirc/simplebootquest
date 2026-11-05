---
slug: "ts-infer-37"
title: "Type Inference Drill #37"
type: "quiz"
xp: 10
optional: true
section: "Practice: Type Inference & Errors"
questions: [{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [69, 70].find((v) => v > 69);\n```","options":["`number`","`number[]`","`boolean`","`number | undefined`"],"answer":3,"explanation":"TypeScript infers `number | undefined`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [25, \"guest\"];\n```","options":["`(25 | \"guest\")[]`","`any[]`","`[number, string]`","`(string | number)[]`"],"answer":3,"explanation":"TypeScript infers `(string | number)[]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = async () => 33;\n```","options":["`() => Promise<number>`","`Promise<number>`","`() => number`","`() => Promise<33>`"],"answer":0,"explanation":"TypeScript infers `() => Promise<number>`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = { id: 15, status: \"ok\" };\n```","options":["`object`","`{ id: 15; status: \"ok\"; }`","`{ id: number; status: string; }`","`{ readonly id: number; readonly status: string; }`"],"answer":2,"explanation":"TypeScript infers `{ id: number; status: string; }`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nfunction pick<T>(items: T[]): T | undefined {\n  return items[0];\n}\nconst x = pick([22, 23]);\n```","options":["`number | undefined`","`22 | undefined`","`unknown`","`number`"],"answer":0,"explanation":"TypeScript infers `number | undefined`."}]
---
# Type Inference Drill #37

TypeScript infers types from values, so you rarely write annotations for local variables. Knowing *what* it infers is the key to reading error messages. Remember:

- `const` keeps **literal** types (`"draft"`), `let` **widens** them (`string`).
- `as const` makes everything `readonly` and literal.
- Array methods like `find` can return `undefined`.
- Narrowing (`typeof`, `??`, `!== null`) changes the type.

These answers come from the real TypeScript compiler in strict mode.
