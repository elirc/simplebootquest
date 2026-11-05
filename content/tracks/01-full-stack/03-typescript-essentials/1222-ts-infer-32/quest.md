---
slug: "ts-infer-32"
title: "Type Inference Drill #32"
type: "quiz"
xp: 10
optional: true
section: "Practice: Type Inference & Errors"
questions: [{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = Array.from({ length: 2 }, (_, i) => i * 2);\n```","options":["`any[]`","`number[]`","`2[]`","`unknown[]`"],"answer":1,"explanation":"TypeScript infers `number[]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = ([\"draft\", \"error\"] as const)[0];\n```","options":["`\"draft\"`","`\"draft\" | \"error\"`","`string`","`readonly [\"draft\", \"error\"]`"],"answer":0,"explanation":"TypeScript infers `\"draft\"`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nlet x = 28;\n```","options":["`unknown`","`28`","`number`","`any`"],"answer":2,"explanation":"TypeScript infers `number`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [48, null, 50].filter((v) => v !== null);\n```","options":["`number[]`","`(number | null)[]`","`number`","`null[]`"],"answer":0,"explanation":"TypeScript infers `number[]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = { id: 39, status: \"admin\" } as const;\n```","options":["`{ id: 39; status: \"admin\"; }`","`{ id: number; status: string; }`","`{ readonly id: 39; readonly status: \"admin\"; }`","`Readonly<object>`"],"answer":2,"explanation":"TypeScript infers `{ readonly id: 39; readonly status: \"admin\"; }`."}]
---
# Type Inference Drill #32

TypeScript infers types from values, so you rarely write annotations for local variables. Knowing *what* it infers is the key to reading error messages. Remember:

- `const` keeps **literal** types (`"draft"`), `let` **widens** them (`string`).
- `as const` makes everything `readonly` and literal.
- Array methods like `find` can return `undefined`.
- Narrowing (`typeof`, `??`, `!== null`) changes the type.

These answers come from the real TypeScript compiler in strict mode.
