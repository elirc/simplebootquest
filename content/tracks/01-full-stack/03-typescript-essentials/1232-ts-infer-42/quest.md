---
slug: "ts-infer-42"
title: "Type Inference Drill #42"
type: "quiz"
xp: 10
optional: true
section: "Practice: Type Inference & Errors"
questions: [{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = Object.keys({ admin: 97 });\n```","options":["`string[]`","`string`","`(keyof { admin: number })[]`","`\"admin\"[]`"],"answer":0,"explanation":"TypeScript infers `string[]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nfunction pick<T>(items: T[]): T | undefined {\n  return items[0];\n}\nconst x = pick([21, 22]);\n```","options":["`number`","`21 | undefined`","`unknown`","`number | undefined`"],"answer":3,"explanation":"TypeScript infers `number | undefined`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = 18;\n```","options":["`number`","`18 | number`","`18`","`any`"],"answer":2,"explanation":"TypeScript infers `18`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = Object.keys({ todo: 39 });\n```","options":["`(keyof { todo: number })[]`","`\"todo\"[]`","`string`","`string[]`"],"answer":3,"explanation":"TypeScript infers `string[]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nlet x = \"error\";\n```","options":["`string`","`\"error\"`","`any`","`String`"],"answer":0,"explanation":"TypeScript infers `string`."}]
---
# Type Inference Drill #42

TypeScript infers types from values, so you rarely write annotations for local variables. Knowing *what* it infers is the key to reading error messages. Remember:

- `const` keeps **literal** types (`"draft"`), `let` **widens** them (`string`).
- `as const` makes everything `readonly` and literal.
- Array methods like `find` can return `undefined`.
- Narrowing (`typeof`, `??`, `!== null`) changes the type.

These answers come from the real TypeScript compiler in strict mode.
