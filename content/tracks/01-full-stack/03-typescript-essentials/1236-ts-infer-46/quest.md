---
slug: "ts-infer-46"
title: "Type Inference Drill #46"
type: "quiz"
xp: 10
optional: true
section: "Practice: Type Inference & Errors"
questions: [{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = new Map([[\"error\", 55]]);\n```","options":["`Map<any, any>`","`Map<string, number>`","`Record<string, number>`","`Map<\"error\", 55>`"],"answer":1,"explanation":"TypeScript infers `Map<string, number>`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\ndeclare const n: number;\nconst x = n > 17 && \"paid\";\n```","options":["`false | \"paid\"`","`boolean`","`string | boolean`","`\"paid\"`"],"answer":0,"explanation":"TypeScript infers `false | \"paid\"`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst statuses = [\"todo\", \"ok\"] as const;\nconst x: (typeof statuses)[number] = \"todo\";\n```","options":["`never`","`string`","`readonly [\"todo\", \"ok\"]`","`\"todo\" | \"ok\"`"],"answer":3,"explanation":"TypeScript infers `\"todo\" | \"ok\"`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = new Set([\"open\", \"todo\"]);\n```","options":["`string[]`","`Set<string>`","`Set<\"open\" | \"todo\">`","`Set<any>`"],"answer":1,"explanation":"TypeScript infers `Set<string>`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = { id: 54, status: \"guest\" };\n```","options":["`{ readonly id: number; readonly status: string; }`","`{ id: number; status: string; }`","`object`","`{ id: 54; status: \"guest\"; }`"],"answer":1,"explanation":"TypeScript infers `{ id: number; status: string; }`."}]
---
# Type Inference Drill #46

TypeScript infers types from values, so you rarely write annotations for local variables. Knowing *what* it infers is the key to reading error messages. Remember:

- `const` keeps **literal** types (`"draft"`), `let` **widens** them (`string`).
- `as const` makes everything `readonly` and literal.
- Array methods like `find` can return `undefined`.
- Narrowing (`typeof`, `??`, `!== null`) changes the type.

These answers come from the real TypeScript compiler in strict mode.
