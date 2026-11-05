---
slug: "ts-infer-38"
title: "Type Inference Drill #38"
type: "quiz"
xp: 10
optional: true
section: "Practice: Type Inference & Errors"
questions: [{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = Math.random() > 0.5 ? \"error\" : 86;\n```","options":["`\"error\" | 86`","`\"error\"`","`any`","`string | number`"],"answer":0,"explanation":"TypeScript infers `\"error\" | 86`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = async () => 69;\n```","options":["`Promise<number>`","`() => Promise<69>`","`() => number`","`() => Promise<number>`"],"answer":3,"explanation":"TypeScript infers `() => Promise<number>`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = \"todo\".split(\"\");\n```","options":["`\"todo\"[]`","`char[]`","`string[]`","`string`"],"answer":2,"explanation":"TypeScript infers `string[]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [95, \"open\"] as const;\n```","options":["`(string | number)[]`","`readonly [95, \"open\"]`","`readonly (string | number)[]`","`[number, string]`"],"answer":1,"explanation":"TypeScript infers `readonly [95, \"open\"]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\ndeclare const id: string | null;\nconst x = id ?? 77;\n```","options":["`string | null | 77`","`string | 77`","`string`","`string | null`"],"answer":1,"explanation":"TypeScript infers `string | 77`."}]
---
# Type Inference Drill #38

TypeScript infers types from values, so you rarely write annotations for local variables. Knowing *what* it infers is the key to reading error messages. Remember:

- `const` keeps **literal** types (`"draft"`), `let` **widens** them (`string`).
- `as const` makes everything `readonly` and literal.
- Array methods like `find` can return `undefined`.
- Narrowing (`typeof`, `??`, `!== null`) changes the type.

These answers come from the real TypeScript compiler in strict mode.
