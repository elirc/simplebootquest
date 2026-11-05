---
slug: "ts-infer-35"
title: "Type Inference Drill #35"
type: "quiz"
xp: 10
optional: true
section: "Practice: Type Inference & Errors"
questions: [{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = { id: 86, status: \"ok\" } as const;\n```","options":["`{ readonly id: 86; readonly status: \"ok\"; }`","`{ id: number; status: string; }`","`{ id: 86; status: \"ok\"; }`","`Readonly<object>`"],"answer":0,"explanation":"TypeScript infers `{ readonly id: 86; readonly status: \"ok\"; }`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst statuses = [\"guest\", \"todo\"] as const;\nconst x: (typeof statuses)[number] = \"guest\";\n```","options":["`string`","`\"guest\" | \"todo\"`","`never`","`readonly [\"guest\", \"todo\"]`"],"answer":1,"explanation":"TypeScript infers `\"guest\" | \"todo\"`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = new Set([\"admin\", \"guest\"]);\n```","options":["`Set<string>`","`Set<\"admin\" | \"guest\">`","`string[]`","`Set<any>`"],"answer":0,"explanation":"TypeScript infers `Set<string>`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [{ id: 82 }, { id: 83, label: \"draft\" }];\n```","options":["`object[]`","`({ id: number; label?: undefined; } | { id: number; label: string; })[]`","`{ id: number; label: string; }[]`","`({ id: number; } & { label: string; })[]`"],"answer":1,"explanation":"TypeScript infers `({ id: number; label?: undefined; } | { id: number; label: string; })[]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [46, null, 48].filter((v) => v !== null);\n```","options":["`(number | null)[]`","`null[]`","`number`","`number[]`"],"answer":3,"explanation":"TypeScript infers `number[]`."}]
---
# Type Inference Drill #35

TypeScript infers types from values, so you rarely write annotations for local variables. Knowing *what* it infers is the key to reading error messages. Remember:

- `const` keeps **literal** types (`"draft"`), `let` **widens** them (`string`).
- `as const` makes everything `readonly` and literal.
- Array methods like `find` can return `undefined`.
- Narrowing (`typeof`, `??`, `!== null`) changes the type.

These answers come from the real TypeScript compiler in strict mode.
