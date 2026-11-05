---
slug: "ts-infer-33"
title: "Type Inference Drill #33"
type: "quiz"
xp: 10
optional: true
section: "Practice: Type Inference & Errors"
questions: [{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = new Set([\"open\", \"paid\"]);\n```","options":["`Set<\"open\" | \"paid\">`","`Set<string>`","`string[]`","`Set<any>`"],"answer":1,"explanation":"TypeScript infers `Set<string>`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [27, 28].map(String);\n```","options":["`number[]`","`any[]`","`string[]`","`String[]`"],"answer":2,"explanation":"TypeScript infers `string[]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = Math.random() > 0.5 ? \"error\" : 71;\n```","options":["`any`","`\"error\" | 71`","`\"error\"`","`string | number`"],"answer":1,"explanation":"TypeScript infers `\"error\" | 71`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = Object.keys({ guest: 62 });\n```","options":["`string`","`(keyof { guest: number })[]`","`\"guest\"[]`","`string[]`"],"answer":3,"explanation":"TypeScript infers `string[]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [28, 29].find((v) => v > 28);\n```","options":["`number | undefined`","`number`","`number[]`","`boolean`"],"answer":0,"explanation":"TypeScript infers `number | undefined`."}]
---
# Type Inference Drill #33

TypeScript infers types from values, so you rarely write annotations for local variables. Knowing *what* it infers is the key to reading error messages. Remember:

- `const` keeps **literal** types (`"draft"`), `let` **widens** them (`string`).
- `as const` makes everything `readonly` and literal.
- Array methods like `find` can return `undefined`.
- Narrowing (`typeof`, `??`, `!== null`) changes the type.

These answers come from the real TypeScript compiler in strict mode.
