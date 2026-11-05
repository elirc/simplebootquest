---
slug: "ts-infer-69"
title: "Type Inference Drill #69"
type: "quiz"
xp: 10
optional: true
section: "Practice: Type Inference & Errors"
questions: [{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = 93;\n```","options":["`93`","`any`","`93 | number`","`number`"],"answer":0,"explanation":"TypeScript infers `93`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = { id: 36, status: \"guest\" } as const;\n```","options":["`{ id: 36; status: \"guest\"; }`","`{ id: number; status: string; }`","`Readonly<object>`","`{ readonly id: 36; readonly status: \"guest\"; }`"],"answer":3,"explanation":"TypeScript infers `{ readonly id: 36; readonly status: \"guest\"; }`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [42, 43].find((v) => v > 42);\n```","options":["`number`","`number | undefined`","`number[]`","`boolean`"],"answer":1,"explanation":"TypeScript infers `number | undefined`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [57, \"todo\"] as const;\n```","options":["`[number, string]`","`(string | number)[]`","`readonly (string | number)[]`","`readonly [57, \"todo\"]`"],"answer":3,"explanation":"TypeScript infers `readonly [57, \"todo\"]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [{ id: 78 }, { id: 79, label: \"guest\" }];\n```","options":["`({ id: number; } & { label: string; })[]`","`({ id: number; label?: undefined; } | { id: number; label: string; })[]`","`{ id: number; label: string; }[]`","`object[]`"],"answer":1,"explanation":"TypeScript infers `({ id: number; label?: undefined; } | { id: number; label: string; })[]`."}]
---
# Type Inference Drill #69

TypeScript infers types from values, so you rarely write annotations for local variables. Knowing *what* it infers is the key to reading error messages. Remember:

- `const` keeps **literal** types (`"draft"`), `let` **widens** them (`string`).
- `as const` makes everything `readonly` and literal.
- Array methods like `find` can return `undefined`.
- Narrowing (`typeof`, `??`, `!== null`) changes the type.

These answers come from the real TypeScript compiler in strict mode.
