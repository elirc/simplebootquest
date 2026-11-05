---
slug: "ts-infer-55"
title: "Type Inference Drill #55"
type: "quiz"
xp: 10
optional: true
section: "Practice: Type Inference & Errors"
questions: [{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [64, \"open\"];\n```","options":["`any[]`","`(string | number)[]`","`[number, string]`","`(64 | \"open\")[]`"],"answer":1,"explanation":"TypeScript infers `(string | number)[]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [{ id: 39 }, { id: 40, label: \"error\" }];\n```","options":["`({ id: number; } & { label: string; })[]`","`{ id: number; label: string; }[]`","`({ id: number; label?: undefined; } | { id: number; label: string; })[]`","`object[]`"],"answer":2,"explanation":"TypeScript infers `({ id: number; label?: undefined; } | { id: number; label: string; })[]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [59, null, 61].filter((v) => v !== null);\n```","options":["`number`","`(number | null)[]`","`null[]`","`number[]`"],"answer":3,"explanation":"TypeScript infers `number[]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = Math.random() > 0.5 ? \"ok\" : 30;\n```","options":["`\"ok\" | 30`","`string | number`","`any`","`\"ok\"`"],"answer":0,"explanation":"TypeScript infers `\"ok\" | 30`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = new Set([\"paid\", \"ok\"]);\n```","options":["`Set<any>`","`Set<string>`","`string[]`","`Set<\"paid\" | \"ok\">`"],"answer":1,"explanation":"TypeScript infers `Set<string>`."}]
---
# Type Inference Drill #55

TypeScript infers types from values, so you rarely write annotations for local variables. Knowing *what* it infers is the key to reading error messages. Remember:

- `const` keeps **literal** types (`"draft"`), `let` **widens** them (`string`).
- `as const` makes everything `readonly` and literal.
- Array methods like `find` can return `undefined`.
- Narrowing (`typeof`, `??`, `!== null`) changes the type.

These answers come from the real TypeScript compiler in strict mode.
