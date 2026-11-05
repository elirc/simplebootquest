---
slug: "ts-infer-23"
title: "Type Inference Drill #23"
type: "quiz"
xp: 10
optional: true
section: "Practice: Type Inference & Errors"
questions: [{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [53, \"todo\"];\n```","options":["`any[]`","`[number, string]`","`(53 | \"todo\")[]`","`(string | number)[]`"],"answer":3,"explanation":"TypeScript infers `(string | number)[]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nlet x = \"guest\";\n```","options":["`\"guest\"`","`any`","`String`","`string`"],"answer":3,"explanation":"TypeScript infers `string`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = Promise.resolve(98);\n```","options":["`Promise<any>`","`Promise<number>`","`number`","`Promise<98>`"],"answer":1,"explanation":"TypeScript infers `Promise<number>`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = Object.keys({ open: 40 });\n```","options":["`\"open\"[]`","`string[]`","`string`","`(keyof { open: number })[]`"],"answer":1,"explanation":"TypeScript infers `string[]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = Math.random() > 0.5 ? \"open\" : 31;\n```","options":["`string | number`","`\"open\"`","`\"open\" | 31`","`any`"],"answer":2,"explanation":"TypeScript infers `\"open\" | 31`."}]
---
# Type Inference Drill #23

TypeScript infers types from values, so you rarely write annotations for local variables. Knowing *what* it infers is the key to reading error messages. Remember:

- `const` keeps **literal** types (`"draft"`), `let` **widens** them (`string`).
- `as const` makes everything `readonly` and literal.
- Array methods like `find` can return `undefined`.
- Narrowing (`typeof`, `??`, `!== null`) changes the type.

These answers come from the real TypeScript compiler in strict mode.
