---
slug: "ts-infer-66"
title: "Type Inference Drill #66"
type: "quiz"
xp: 10
optional: true
section: "Practice: Type Inference & Errors"
questions: [{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [11, 12].map(String);\n```","options":["`any[]`","`string[]`","`String[]`","`number[]`"],"answer":1,"explanation":"TypeScript infers `string[]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = Object.keys({ ok: 29 });\n```","options":["`(keyof { ok: number })[]`","`string[]`","`\"ok\"[]`","`string`"],"answer":1,"explanation":"TypeScript infers `string[]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = { id: 57, status: \"admin\" } as const;\n```","options":["`{ id: 57; status: \"admin\"; }`","`{ id: number; status: string; }`","`{ readonly id: 57; readonly status: \"admin\"; }`","`Readonly<object>`"],"answer":2,"explanation":"TypeScript infers `{ readonly id: 57; readonly status: \"admin\"; }`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nfunction pick<T>(items: T[]): T | undefined {\n  return items[0];\n}\nconst x = pick([70, 71]);\n```","options":["`70 | undefined`","`unknown`","`number | undefined`","`number`"],"answer":2,"explanation":"TypeScript infers `number | undefined`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [76, \"todo\"];\n```","options":["`(76 | \"todo\")[]`","`[number, string]`","`any[]`","`(string | number)[]`"],"answer":3,"explanation":"TypeScript infers `(string | number)[]`."}]
---
# Type Inference Drill #66

TypeScript infers types from values, so you rarely write annotations for local variables. Knowing *what* it infers is the key to reading error messages. Remember:

- `const` keeps **literal** types (`"draft"`), `let` **widens** them (`string`).
- `as const` makes everything `readonly` and literal.
- Array methods like `find` can return `undefined`.
- Narrowing (`typeof`, `??`, `!== null`) changes the type.

These answers come from the real TypeScript compiler in strict mode.
