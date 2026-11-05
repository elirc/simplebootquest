---
slug: "ts-infer-44"
title: "Type Inference Drill #44"
type: "quiz"
xp: 10
optional: true
section: "Practice: Type Inference & Errors"
questions: [{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [{ id: 94 }, { id: 95, label: \"paid\" }];\n```","options":["`({ id: number; label?: undefined; } | { id: number; label: string; })[]`","`{ id: number; label: string; }[]`","`({ id: number; } & { label: string; })[]`","`object[]`"],"answer":0,"explanation":"TypeScript infers `({ id: number; label?: undefined; } | { id: number; label: string; })[]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = async () => 91;\n```","options":["`() => Promise<number>`","`() => number`","`() => Promise<91>`","`Promise<number>`"],"answer":0,"explanation":"TypeScript infers `() => Promise<number>`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = \"error\";\n```","options":["`String`","`\"error\" | string`","`string`","`\"error\"`"],"answer":3,"explanation":"TypeScript infers `\"error\"`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [63, \"admin\"];\n```","options":["`(63 | \"admin\")[]`","`any[]`","`(string | number)[]`","`[number, string]`"],"answer":2,"explanation":"TypeScript infers `(string | number)[]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nlet x = 95;\n```","options":["`unknown`","`number`","`any`","`95`"],"answer":1,"explanation":"TypeScript infers `number`."}]
---
# Type Inference Drill #44

TypeScript infers types from values, so you rarely write annotations for local variables. Knowing *what* it infers is the key to reading error messages. Remember:

- `const` keeps **literal** types (`"draft"`), `let` **widens** them (`string`).
- `as const` makes everything `readonly` and literal.
- Array methods like `find` can return `undefined`.
- Narrowing (`typeof`, `??`, `!== null`) changes the type.

These answers come from the real TypeScript compiler in strict mode.
