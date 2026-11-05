---
slug: "ts-infer-49"
title: "Type Inference Drill #49"
type: "quiz"
xp: 10
optional: true
section: "Practice: Type Inference & Errors"
questions: [{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = { id: 33, status: \"todo\" } as const;\n```","options":["`{ id: number; status: string; }`","`Readonly<object>`","`{ readonly id: 33; readonly status: \"todo\"; }`","`{ id: 33; status: \"todo\"; }`"],"answer":2,"explanation":"TypeScript infers `{ readonly id: 33; readonly status: \"todo\"; }`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = { id: 56, status: \"draft\" };\n```","options":["`{ id: number; status: string; }`","`object`","`{ readonly id: number; readonly status: string; }`","`{ id: 56; status: \"draft\"; }`"],"answer":0,"explanation":"TypeScript infers `{ id: number; status: string; }`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [6, \"open\"] as const;\n```","options":["`readonly [6, \"open\"]`","`[number, string]`","`(string | number)[]`","`readonly (string | number)[]`"],"answer":0,"explanation":"TypeScript infers `readonly [6, \"open\"]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst statuses = [\"todo\", \"paid\"] as const;\nconst x: (typeof statuses)[number] = \"todo\";\n```","options":["`readonly [\"todo\", \"paid\"]`","`string`","`never`","`\"todo\" | \"paid\"`"],"answer":3,"explanation":"TypeScript infers `\"todo\" | \"paid\"`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [17, 18].map(String);\n```","options":["`string[]`","`String[]`","`number[]`","`any[]`"],"answer":0,"explanation":"TypeScript infers `string[]`."}]
---
# Type Inference Drill #49

TypeScript infers types from values, so you rarely write annotations for local variables. Knowing *what* it infers is the key to reading error messages. Remember:

- `const` keeps **literal** types (`"draft"`), `let` **widens** them (`string`).
- `as const` makes everything `readonly` and literal.
- Array methods like `find` can return `undefined`.
- Narrowing (`typeof`, `??`, `!== null`) changes the type.

These answers come from the real TypeScript compiler in strict mode.
