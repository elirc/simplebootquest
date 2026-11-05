---
slug: "ts-infer-17"
title: "Type Inference Drill #17"
type: "quiz"
xp: 10
optional: true
section: "Practice: Type Inference & Errors"
questions: [{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = Object.keys({ todo: 50 });\n```","options":["`string`","`(keyof { todo: number })[]`","`string[]`","`\"todo\"[]`"],"answer":2,"explanation":"TypeScript infers `string[]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [74, \"ok\"] as const;\n```","options":["`readonly (string | number)[]`","`(string | number)[]`","`[number, string]`","`readonly [74, \"ok\"]`"],"answer":3,"explanation":"TypeScript infers `readonly [74, \"ok\"]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [71, null, 73].filter((v) => v !== null);\n```","options":["`number`","`number[]`","`(number | null)[]`","`null[]`"],"answer":1,"explanation":"TypeScript infers `number[]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [47, 48].find((v) => v > 47);\n```","options":["`boolean`","`number`","`number | undefined`","`number[]`"],"answer":2,"explanation":"TypeScript infers `number | undefined`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nlet x = 71;\n```","options":["`any`","`unknown`","`number`","`71`"],"answer":2,"explanation":"TypeScript infers `number`."}]
---
# Type Inference Drill #17

TypeScript infers types from values, so you rarely write annotations for local variables. Knowing *what* it infers is the key to reading error messages. Remember:

- `const` keeps **literal** types (`"draft"`), `let` **widens** them (`string`).
- `as const` makes everything `readonly` and literal.
- Array methods like `find` can return `undefined`.
- Narrowing (`typeof`, `??`, `!== null`) changes the type.

These answers come from the real TypeScript compiler in strict mode.
