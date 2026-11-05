---
slug: "ts-infer-18"
title: "Type Inference Drill #18"
type: "quiz"
xp: 10
optional: true
section: "Practice: Type Inference & Errors"
questions: [{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [52, 53].map(String);\n```","options":["`string[]`","`String[]`","`number[]`","`any[]`"],"answer":0,"explanation":"TypeScript infers `string[]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = Object.keys({ admin: 51 });\n```","options":["`(keyof { admin: number })[]`","`string[]`","`string`","`\"admin\"[]`"],"answer":1,"explanation":"TypeScript infers `string[]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [65, 66].map(String);\n```","options":["`string[]`","`any[]`","`number[]`","`String[]`"],"answer":0,"explanation":"TypeScript infers `string[]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = Array.from({ length: 3 }, (_, i) => i * 2);\n```","options":["`unknown[]`","`3[]`","`number[]`","`any[]`"],"answer":2,"explanation":"TypeScript infers `number[]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [{ id: 40 }, { id: 41, label: \"draft\" }];\n```","options":["`({ id: number; label?: undefined; } | { id: number; label: string; })[]`","`object[]`","`({ id: number; } & { label: string; })[]`","`{ id: number; label: string; }[]`"],"answer":0,"explanation":"TypeScript infers `({ id: number; label?: undefined; } | { id: number; label: string; })[]`."}]
---
# Type Inference Drill #18

TypeScript infers types from values, so you rarely write annotations for local variables. Knowing *what* it infers is the key to reading error messages. Remember:

- `const` keeps **literal** types (`"draft"`), `let` **widens** them (`string`).
- `as const` makes everything `readonly` and literal.
- Array methods like `find` can return `undefined`.
- Narrowing (`typeof`, `??`, `!== null`) changes the type.

These answers come from the real TypeScript compiler in strict mode.
