---
slug: "ts-infer-12"
title: "Type Inference Drill #12"
type: "quiz"
xp: 10
optional: true
section: "Practice: Type Inference & Errors"
questions: [{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [{ id: 35 }, { id: 36, label: \"error\" }];\n```","options":["`object[]`","`({ id: number; } & { label: string; })[]`","`{ id: number; label: string; }[]`","`({ id: number; label?: undefined; } | { id: number; label: string; })[]`"],"answer":3,"explanation":"TypeScript infers `({ id: number; label?: undefined; } | { id: number; label: string; })[]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [23, 24].find((v) => v > 23);\n```","options":["`number`","`number | undefined`","`number[]`","`boolean`"],"answer":1,"explanation":"TypeScript infers `number | undefined`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\ndeclare const s: \"open\" | \"todo\";\nlet x = s;\n```","options":["`\"open\" | \"todo\"`","`any`","`\"open\"`","`string`"],"answer":0,"explanation":"TypeScript infers `\"open\" | \"todo\"`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = Array.from({ length: 5 }, (_, i) => i * 2);\n```","options":["`5[]`","`any[]`","`unknown[]`","`number[]`"],"answer":3,"explanation":"TypeScript infers `number[]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = { id: 97, status: \"todo\" } as const;\n```","options":["`Readonly<object>`","`{ id: 97; status: \"todo\"; }`","`{ id: number; status: string; }`","`{ readonly id: 97; readonly status: \"todo\"; }`"],"answer":3,"explanation":"TypeScript infers `{ readonly id: 97; readonly status: \"todo\"; }`."}]
---
# Type Inference Drill #12

TypeScript infers types from values, so you rarely write annotations for local variables. Knowing *what* it infers is the key to reading error messages. Remember:

- `const` keeps **literal** types (`"draft"`), `let` **widens** them (`string`).
- `as const` makes everything `readonly` and literal.
- Array methods like `find` can return `undefined`.
- Narrowing (`typeof`, `??`, `!== null`) changes the type.

These answers come from the real TypeScript compiler in strict mode.
