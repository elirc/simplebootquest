---
slug: "ts-infer-25"
title: "Type Inference Drill #25"
type: "quiz"
xp: 10
optional: true
section: "Practice: Type Inference & Errors"
questions: [{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [{ id: 17 }, { id: 18, label: \"admin\" }];\n```","options":["`{ id: number; label: string; }[]`","`({ id: number; } & { label: string; })[]`","`({ id: number; label?: undefined; } | { id: number; label: string; })[]`","`object[]`"],"answer":2,"explanation":"TypeScript infers `({ id: number; label?: undefined; } | { id: number; label: string; })[]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = JSON.parse(\"9\");\n```","options":["`unknown`","`any`","`number`","`string`"],"answer":1,"explanation":"TypeScript infers `any`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [36, \"guest\"];\n```","options":["`(36 | \"guest\")[]`","`any[]`","`[number, string]`","`(string | number)[]`"],"answer":3,"explanation":"TypeScript infers `(string | number)[]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = new Map([[\"open\", 25]]);\n```","options":["`Record<string, number>`","`Map<string, number>`","`Map<\"open\", 25>`","`Map<any, any>`"],"answer":1,"explanation":"TypeScript infers `Map<string, number>`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\ndeclare const id: string | null;\nconst x = id ?? 6;\n```","options":["`string`","`string | 6`","`string | null | 6`","`string | null`"],"answer":1,"explanation":"TypeScript infers `string | 6`."}]
---
# Type Inference Drill #25

TypeScript infers types from values, so you rarely write annotations for local variables. Knowing *what* it infers is the key to reading error messages. Remember:

- `const` keeps **literal** types (`"draft"`), `let` **widens** them (`string`).
- `as const` makes everything `readonly` and literal.
- Array methods like `find` can return `undefined`.
- Narrowing (`typeof`, `??`, `!== null`) changes the type.

These answers come from the real TypeScript compiler in strict mode.
