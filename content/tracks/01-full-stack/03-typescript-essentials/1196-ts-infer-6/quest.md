---
slug: "ts-infer-6"
title: "Type Inference Drill #6"
type: "quiz"
xp: 10
optional: true
section: "Practice: Type Inference & Errors"
questions: [{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nfunction pick<T>(items: T[]): T | undefined {\n  return items[0];\n}\nconst x = pick([64, 65]);\n```","options":["`64 | undefined`","`number`","`number | undefined`","`unknown`"],"answer":2,"explanation":"TypeScript infers `number | undefined`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = Array.from({ length: 4 }, (_, i) => i * 2);\n```","options":["`any[]`","`unknown[]`","`number[]`","`4[]`"],"answer":2,"explanation":"TypeScript infers `number[]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = Object.keys({ guest: 65 });\n```","options":["`(keyof { guest: number })[]`","`string`","`\"guest\"[]`","`string[]`"],"answer":3,"explanation":"TypeScript infers `string[]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nlet x = \"open\";\n```","options":["`string`","`\"open\"`","`String`","`any`"],"answer":0,"explanation":"TypeScript infers `string`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [73, \"paid\"];\n```","options":["`(73 | \"paid\")[]`","`[number, string]`","`(string | number)[]`","`any[]`"],"answer":2,"explanation":"TypeScript infers `(string | number)[]`."}]
---
# Type Inference Drill #6

TypeScript infers types from values, so you rarely write annotations for local variables. Knowing *what* it infers is the key to reading error messages. Remember:

- `const` keeps **literal** types (`"draft"`), `let` **widens** them (`string`).
- `as const` makes everything `readonly` and literal.
- Array methods like `find` can return `undefined`.
- Narrowing (`typeof`, `??`, `!== null`) changes the type.

These answers come from the real TypeScript compiler in strict mode.
