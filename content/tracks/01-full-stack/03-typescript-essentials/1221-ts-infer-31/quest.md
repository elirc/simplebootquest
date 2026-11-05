---
slug: "ts-infer-31"
title: "Type Inference Drill #31"
type: "quiz"
xp: 10
optional: true
section: "Practice: Type Inference & Errors"
questions: [{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = new Set([\"paid\", \"draft\"]);\n```","options":["`Set<any>`","`string[]`","`Set<\"paid\" | \"draft\">`","`Set<string>`"],"answer":3,"explanation":"TypeScript infers `Set<string>`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [76, \"admin\"] as const;\n```","options":["`readonly (string | number)[]`","`(string | number)[]`","`[number, string]`","`readonly [76, \"admin\"]`"],"answer":3,"explanation":"TypeScript infers `readonly [76, \"admin\"]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = 81;\n```","options":["`81`","`81 | number`","`number`","`any`"],"answer":0,"explanation":"TypeScript infers `81`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = Object.keys({ admin: 37 });\n```","options":["`string[]`","`\"admin\"[]`","`(keyof { admin: number })[]`","`string`"],"answer":0,"explanation":"TypeScript infers `string[]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\ndeclare const n: number;\nconst x = n > 85 && \"todo\";\n```","options":["`string | boolean`","`\"todo\"`","`boolean`","`false | \"todo\"`"],"answer":3,"explanation":"TypeScript infers `false | \"todo\"`."}]
---
# Type Inference Drill #31

TypeScript infers types from values, so you rarely write annotations for local variables. Knowing *what* it infers is the key to reading error messages. Remember:

- `const` keeps **literal** types (`"draft"`), `let` **widens** them (`string`).
- `as const` makes everything `readonly` and literal.
- Array methods like `find` can return `undefined`.
- Narrowing (`typeof`, `??`, `!== null`) changes the type.

These answers come from the real TypeScript compiler in strict mode.
