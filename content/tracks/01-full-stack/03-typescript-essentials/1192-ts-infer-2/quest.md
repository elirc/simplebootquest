---
slug: "ts-infer-2"
title: "Type Inference Drill #2"
type: "quiz"
xp: 10
optional: true
section: "Practice: Type Inference & Errors"
questions: [{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\ndeclare const s: \"todo\" | \"paid\";\nlet x = s;\n```","options":["`\"todo\"`","`string`","`\"todo\" | \"paid\"`","`any`"],"answer":2,"explanation":"TypeScript infers `\"todo\" | \"paid\"`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = { id: 29, status: \"open\" } as const;\n```","options":["`Readonly<object>`","`{ id: 29; status: \"open\"; }`","`{ id: number; status: string; }`","`{ readonly id: 29; readonly status: \"open\"; }`"],"answer":3,"explanation":"TypeScript infers `{ readonly id: 29; readonly status: \"open\"; }`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = 89;\n```","options":["`any`","`89`","`89 | number`","`number`"],"answer":1,"explanation":"TypeScript infers `89`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [{ id: 3 }, { id: 4, label: \"error\" }];\n```","options":["`{ id: number; label: string; }[]`","`({ id: number; label?: undefined; } | { id: number; label: string; })[]`","`object[]`","`({ id: number; } & { label: string; })[]`"],"answer":1,"explanation":"TypeScript infers `({ id: number; label?: undefined; } | { id: number; label: string; })[]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\ndeclare const n: number;\nconst x = n > 96 && \"guest\";\n```","options":["`string | boolean`","`boolean`","`\"guest\"`","`false | \"guest\"`"],"answer":3,"explanation":"TypeScript infers `false | \"guest\"`."}]
---
# Type Inference Drill #2

TypeScript infers types from values, so you rarely write annotations for local variables. Knowing *what* it infers is the key to reading error messages. Remember:

- `const` keeps **literal** types (`"draft"`), `let` **widens** them (`string`).
- `as const` makes everything `readonly` and literal.
- Array methods like `find` can return `undefined`.
- Narrowing (`typeof`, `??`, `!== null`) changes the type.

These answers come from the real TypeScript compiler in strict mode.
