---
slug: "ts-infer-5"
title: "Type Inference Drill #5"
type: "quiz"
xp: 10
optional: true
section: "Practice: Type Inference & Errors"
questions: [{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = Math.random() > 0.5 ? \"open\" : 43;\n```","options":["`\"open\" | 43`","`string | number`","`\"open\"`","`any`"],"answer":0,"explanation":"TypeScript infers `\"open\" | 43`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\ndeclare const v: string | number;\nconst x = typeof v === \"string\" ? v.length : v;\n```","options":["`any`","`string | number`","`number`","`string`"],"answer":2,"explanation":"TypeScript infers `number`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [77, null, 79].filter((v) => v !== null);\n```","options":["`null[]`","`number[]`","`(number | null)[]`","`number`"],"answer":1,"explanation":"TypeScript infers `number[]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = 28;\n```","options":["`any`","`28 | number`","`28`","`number`"],"answer":2,"explanation":"TypeScript infers `28`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [56, \"admin\"] as const;\n```","options":["`[number, string]`","`readonly [56, \"admin\"]`","`(string | number)[]`","`readonly (string | number)[]`"],"answer":1,"explanation":"TypeScript infers `readonly [56, \"admin\"]`."}]
---
# Type Inference Drill #5

TypeScript infers types from values, so you rarely write annotations for local variables. Knowing *what* it infers is the key to reading error messages. Remember:

- `const` keeps **literal** types (`"draft"`), `let` **widens** them (`string`).
- `as const` makes everything `readonly` and literal.
- Array methods like `find` can return `undefined`.
- Narrowing (`typeof`, `??`, `!== null`) changes the type.

These answers come from the real TypeScript compiler in strict mode.
