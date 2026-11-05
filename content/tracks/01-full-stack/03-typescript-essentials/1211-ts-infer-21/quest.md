---
slug: "ts-infer-21"
title: "Type Inference Drill #21"
type: "quiz"
xp: 10
optional: true
section: "Practice: Type Inference & Errors"
questions: [{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [7, null, 9].filter((v) => v !== null);\n```","options":["`number`","`(number | null)[]`","`number[]`","`null[]`"],"answer":2,"explanation":"TypeScript infers `number[]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst statuses = [\"todo\", \"open\"] as const;\nconst x: (typeof statuses)[number] = \"todo\";\n```","options":["`readonly [\"todo\", \"open\"]`","`\"todo\" | \"open\"`","`never`","`string`"],"answer":1,"explanation":"TypeScript infers `\"todo\" | \"open\"`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [30, 31].find((v) => v > 30);\n```","options":["`number | undefined`","`number`","`number[]`","`boolean`"],"answer":0,"explanation":"TypeScript infers `number | undefined`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [15, 16].map(String);\n```","options":["`String[]`","`string[]`","`any[]`","`number[]`"],"answer":1,"explanation":"TypeScript infers `string[]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = new Set([\"todo\", \"open\"]);\n```","options":["`Set<string>`","`Set<\"todo\" | \"open\">`","`Set<any>`","`string[]`"],"answer":0,"explanation":"TypeScript infers `Set<string>`."}]
---
# Type Inference Drill #21

TypeScript infers types from values, so you rarely write annotations for local variables. Knowing *what* it infers is the key to reading error messages. Remember:

- `const` keeps **literal** types (`"draft"`), `let` **widens** them (`string`).
- `as const` makes everything `readonly` and literal.
- Array methods like `find` can return `undefined`.
- Narrowing (`typeof`, `??`, `!== null`) changes the type.

These answers come from the real TypeScript compiler in strict mode.
