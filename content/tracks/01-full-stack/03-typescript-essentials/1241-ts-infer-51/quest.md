---
slug: "ts-infer-51"
title: "Type Inference Drill #51"
type: "quiz"
xp: 10
optional: true
section: "Practice: Type Inference & Errors"
questions: [{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = new Map([[\"admin\", 82]]);\n```","options":["`Record<string, number>`","`Map<string, number>`","`Map<\"admin\", 82>`","`Map<any, any>`"],"answer":1,"explanation":"TypeScript infers `Map<string, number>`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = ([\"open\", \"paid\"] as const)[0];\n```","options":["`\"open\"`","`\"open\" | \"paid\"`","`readonly [\"open\", \"paid\"]`","`string`"],"answer":0,"explanation":"TypeScript infers `\"open\"`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = Promise.resolve(56);\n```","options":["`Promise<any>`","`Promise<number>`","`number`","`Promise<56>`"],"answer":1,"explanation":"TypeScript infers `Promise<number>`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = Object.keys({ ok: 95 });\n```","options":["`\"ok\"[]`","`string[]`","`string`","`(keyof { ok: number })[]`"],"answer":1,"explanation":"TypeScript infers `string[]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = { id: 97, status: \"draft\" };\n```","options":["`object`","`{ id: number; status: string; }`","`{ id: 97; status: \"draft\"; }`","`{ readonly id: number; readonly status: string; }`"],"answer":1,"explanation":"TypeScript infers `{ id: number; status: string; }`."}]
---
# Type Inference Drill #51

TypeScript infers types from values, so you rarely write annotations for local variables. Knowing *what* it infers is the key to reading error messages. Remember:

- `const` keeps **literal** types (`"draft"`), `let` **widens** them (`string`).
- `as const` makes everything `readonly` and literal.
- Array methods like `find` can return `undefined`.
- Narrowing (`typeof`, `??`, `!== null`) changes the type.

These answers come from the real TypeScript compiler in strict mode.
