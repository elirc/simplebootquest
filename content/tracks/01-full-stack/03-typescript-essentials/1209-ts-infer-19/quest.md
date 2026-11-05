---
slug: "ts-infer-19"
title: "Type Inference Drill #19"
type: "quiz"
xp: 10
optional: true
section: "Practice: Type Inference & Errors"
questions: [{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nlet x = 35;\n```","options":["`number`","`unknown`","`any`","`35`"],"answer":0,"explanation":"TypeScript infers `number`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = JSON.parse(\"84\");\n```","options":["`any`","`unknown`","`string`","`number`"],"answer":0,"explanation":"TypeScript infers `any`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [24, \"paid\"];\n```","options":["`(string | number)[]`","`any[]`","`[number, string]`","`(24 | \"paid\")[]`"],"answer":0,"explanation":"TypeScript infers `(string | number)[]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [7, \"open\"] as const;\n```","options":["`(string | number)[]`","`readonly (string | number)[]`","`readonly [7, \"open\"]`","`[number, string]`"],"answer":2,"explanation":"TypeScript infers `readonly [7, \"open\"]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = ([\"admin\", \"guest\"] as const)[0];\n```","options":["`\"admin\"`","`readonly [\"admin\", \"guest\"]`","`string`","`\"admin\" | \"guest\"`"],"answer":0,"explanation":"TypeScript infers `\"admin\"`."}]
---
# Type Inference Drill #19

TypeScript infers types from values, so you rarely write annotations for local variables. Knowing *what* it infers is the key to reading error messages. Remember:

- `const` keeps **literal** types (`"draft"`), `let` **widens** them (`string`).
- `as const` makes everything `readonly` and literal.
- Array methods like `find` can return `undefined`.
- Narrowing (`typeof`, `??`, `!== null`) changes the type.

These answers come from the real TypeScript compiler in strict mode.
