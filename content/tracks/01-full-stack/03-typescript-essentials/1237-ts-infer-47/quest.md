---
slug: "ts-infer-47"
title: "Type Inference Drill #47"
type: "quiz"
xp: 10
optional: true
section: "Practice: Type Inference & Errors"
questions: [{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst statuses = [\"error\", \"draft\"] as const;\nconst x: (typeof statuses)[number] = \"error\";\n```","options":["`\"error\" | \"draft\"`","`string`","`readonly [\"error\", \"draft\"]`","`never`"],"answer":0,"explanation":"TypeScript infers `\"error\" | \"draft\"`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nlet x = 61;\n```","options":["`61`","`any`","`unknown`","`number`"],"answer":3,"explanation":"TypeScript infers `number`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = Promise.resolve(1);\n```","options":["`Promise<number>`","`number`","`Promise<1>`","`Promise<any>`"],"answer":0,"explanation":"TypeScript infers `Promise<number>`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = { id: 62, status: \"draft\" };\n```","options":["`{ readonly id: number; readonly status: string; }`","`object`","`{ id: number; status: string; }`","`{ id: 62; status: \"draft\"; }`"],"answer":2,"explanation":"TypeScript infers `{ id: number; status: string; }`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = ([\"admin\", \"paid\"] as const)[0];\n```","options":["`\"admin\" | \"paid\"`","`readonly [\"admin\", \"paid\"]`","`\"admin\"`","`string`"],"answer":2,"explanation":"TypeScript infers `\"admin\"`."}]
---
# Type Inference Drill #47

TypeScript infers types from values, so you rarely write annotations for local variables. Knowing *what* it infers is the key to reading error messages. Remember:

- `const` keeps **literal** types (`"draft"`), `let` **widens** them (`string`).
- `as const` makes everything `readonly` and literal.
- Array methods like `find` can return `undefined`.
- Narrowing (`typeof`, `??`, `!== null`) changes the type.

These answers come from the real TypeScript compiler in strict mode.
