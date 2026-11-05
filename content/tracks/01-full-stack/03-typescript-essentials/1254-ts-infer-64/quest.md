---
slug: "ts-infer-64"
title: "Type Inference Drill #64"
type: "quiz"
xp: 10
optional: true
section: "Practice: Type Inference & Errors"
questions: [{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = ([\"paid\", \"open\"] as const)[0];\n```","options":["`string`","`\"paid\" | \"open\"`","`\"paid\"`","`readonly [\"paid\", \"open\"]`"],"answer":2,"explanation":"TypeScript infers `\"paid\"`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = JSON.parse(\"94\");\n```","options":["`unknown`","`any`","`number`","`string`"],"answer":1,"explanation":"TypeScript infers `any`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [93, \"todo\"];\n```","options":["`any[]`","`(93 | \"todo\")[]`","`[number, string]`","`(string | number)[]`"],"answer":3,"explanation":"TypeScript infers `(string | number)[]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [{ id: 14 }, { id: 15, label: \"open\" }];\n```","options":["`object[]`","`({ id: number; label?: undefined; } | { id: number; label: string; })[]`","`({ id: number; } & { label: string; })[]`","`{ id: number; label: string; }[]`"],"answer":1,"explanation":"TypeScript infers `({ id: number; label?: undefined; } | { id: number; label: string; })[]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = Promise.resolve(28);\n```","options":["`Promise<28>`","`number`","`Promise<any>`","`Promise<number>`"],"answer":3,"explanation":"TypeScript infers `Promise<number>`."}]
---
# Type Inference Drill #64

TypeScript infers types from values, so you rarely write annotations for local variables. Knowing *what* it infers is the key to reading error messages. Remember:

- `const` keeps **literal** types (`"draft"`), `let` **widens** them (`string`).
- `as const` makes everything `readonly` and literal.
- Array methods like `find` can return `undefined`.
- Narrowing (`typeof`, `??`, `!== null`) changes the type.

These answers come from the real TypeScript compiler in strict mode.
