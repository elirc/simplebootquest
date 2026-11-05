---
slug: "ts-infer-39"
title: "Type Inference Drill #39"
type: "quiz"
xp: 10
optional: true
section: "Practice: Type Inference & Errors"
questions: [{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\ndeclare const n: number;\nconst x = n > 28 && \"guest\";\n```","options":["`boolean`","`false | \"guest\"`","`string | boolean`","`\"guest\"`"],"answer":1,"explanation":"TypeScript infers `false | \"guest\"`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = { id: 71, status: \"todo\" } as const;\n```","options":["`{ id: number; status: string; }`","`{ id: 71; status: \"todo\"; }`","`Readonly<object>`","`{ readonly id: 71; readonly status: \"todo\"; }`"],"answer":3,"explanation":"TypeScript infers `{ readonly id: 71; readonly status: \"todo\"; }`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [36, null, 38].filter((v) => v !== null);\n```","options":["`null[]`","`number[]`","`number`","`(number | null)[]`"],"answer":1,"explanation":"TypeScript infers `number[]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = Promise.resolve(36);\n```","options":["`Promise<any>`","`Promise<36>`","`Promise<number>`","`number`"],"answer":2,"explanation":"TypeScript infers `Promise<number>`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst statuses = [\"admin\", \"paid\"] as const;\nconst x: (typeof statuses)[number] = \"admin\";\n```","options":["`never`","`string`","`\"admin\" | \"paid\"`","`readonly [\"admin\", \"paid\"]`"],"answer":2,"explanation":"TypeScript infers `\"admin\" | \"paid\"`."}]
---
# Type Inference Drill #39

TypeScript infers types from values, so you rarely write annotations for local variables. Knowing *what* it infers is the key to reading error messages. Remember:

- `const` keeps **literal** types (`"draft"`), `let` **widens** them (`string`).
- `as const` makes everything `readonly` and literal.
- Array methods like `find` can return `undefined`.
- Narrowing (`typeof`, `??`, `!== null`) changes the type.

These answers come from the real TypeScript compiler in strict mode.
