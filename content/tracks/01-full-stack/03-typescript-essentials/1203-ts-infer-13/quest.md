---
slug: "ts-infer-13"
title: "Type Inference Drill #13"
type: "quiz"
xp: 10
optional: true
section: "Practice: Type Inference & Errors"
questions: [{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = ([\"error\", \"admin\"] as const)[0];\n```","options":["`readonly [\"error\", \"admin\"]`","`\"error\" | \"admin\"`","`string`","`\"error\"`"],"answer":3,"explanation":"TypeScript infers `\"error\"`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [27, 28].find((v) => v > 27);\n```","options":["`number`","`number[]`","`number | undefined`","`boolean`"],"answer":2,"explanation":"TypeScript infers `number | undefined`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = Object.keys({ open: 45 });\n```","options":["`\"open\"[]`","`(keyof { open: number })[]`","`string`","`string[]`"],"answer":3,"explanation":"TypeScript infers `string[]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = 91;\n```","options":["`number`","`91`","`91 | number`","`any`"],"answer":1,"explanation":"TypeScript infers `91`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [56, null, 58].filter((v) => v !== null);\n```","options":["`null[]`","`number`","`(number | null)[]`","`number[]`"],"answer":3,"explanation":"TypeScript infers `number[]`."}]
---
# Type Inference Drill #13

TypeScript infers types from values, so you rarely write annotations for local variables. Knowing *what* it infers is the key to reading error messages. Remember:

- `const` keeps **literal** types (`"draft"`), `let` **widens** them (`string`).
- `as const` makes everything `readonly` and literal.
- Array methods like `find` can return `undefined`.
- Narrowing (`typeof`, `??`, `!== null`) changes the type.

These answers come from the real TypeScript compiler in strict mode.
