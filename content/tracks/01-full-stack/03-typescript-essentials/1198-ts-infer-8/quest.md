---
slug: "ts-infer-8"
title: "Type Inference Drill #8"
type: "quiz"
xp: 10
optional: true
section: "Practice: Type Inference & Errors"
questions: [{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [97, 98].map(String);\n```","options":["`any[]`","`number[]`","`String[]`","`string[]`"],"answer":3,"explanation":"TypeScript infers `string[]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\ndeclare const id: string | null;\nconst x = id ?? 67;\n```","options":["`string`","`string | null | 67`","`string | null`","`string | 67`"],"answer":3,"explanation":"TypeScript infers `string | 67`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [{ id: 57 }, { id: 58, label: \"draft\" }];\n```","options":["`{ id: number; label: string; }[]`","`object[]`","`({ id: number; } & { label: string; })[]`","`({ id: number; label?: undefined; } | { id: number; label: string; })[]`"],"answer":3,"explanation":"TypeScript infers `({ id: number; label?: undefined; } | { id: number; label: string; })[]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = ([\"paid\", \"error\"] as const)[0];\n```","options":["`\"paid\" | \"error\"`","`\"paid\"`","`readonly [\"paid\", \"error\"]`","`string`"],"answer":1,"explanation":"TypeScript infers `\"paid\"`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = Array.from({ length: 1 }, (_, i) => i * 2);\n```","options":["`number[]`","`any[]`","`unknown[]`","`1[]`"],"answer":0,"explanation":"TypeScript infers `number[]`."}]
---
# Type Inference Drill #8

TypeScript infers types from values, so you rarely write annotations for local variables. Knowing *what* it infers is the key to reading error messages. Remember:

- `const` keeps **literal** types (`"draft"`), `let` **widens** them (`string`).
- `as const` makes everything `readonly` and literal.
- Array methods like `find` can return `undefined`.
- Narrowing (`typeof`, `??`, `!== null`) changes the type.

These answers come from the real TypeScript compiler in strict mode.
