---
slug: "ts-infer-58"
title: "Type Inference Drill #58"
type: "quiz"
xp: 10
optional: true
section: "Practice: Type Inference & Errors"
questions: [{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nfunction pick<T>(items: T[]): T | undefined {\n  return items[0];\n}\nconst x = pick([83, 84]);\n```","options":["`number | undefined`","`number`","`83 | undefined`","`unknown`"],"answer":0,"explanation":"TypeScript infers `number | undefined`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = JSON.parse(\"26\");\n```","options":["`unknown`","`number`","`any`","`string`"],"answer":2,"explanation":"TypeScript infers `any`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = { id: 42, status: \"guest\" } as const;\n```","options":["`Readonly<object>`","`{ readonly id: 42; readonly status: \"guest\"; }`","`{ id: 42; status: \"guest\"; }`","`{ id: number; status: string; }`"],"answer":1,"explanation":"TypeScript infers `{ readonly id: 42; readonly status: \"guest\"; }`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = { id: 91, status: \"guest\" } as const;\n```","options":["`{ readonly id: 91; readonly status: \"guest\"; }`","`Readonly<object>`","`{ id: 91; status: \"guest\"; }`","`{ id: number; status: string; }`"],"answer":0,"explanation":"TypeScript infers `{ readonly id: 91; readonly status: \"guest\"; }`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\ndeclare const n: number;\nconst x = n > 27 && \"admin\";\n```","options":["`\"admin\"`","`string | boolean`","`boolean`","`false | \"admin\"`"],"answer":3,"explanation":"TypeScript infers `false | \"admin\"`."}]
---
# Type Inference Drill #58

TypeScript infers types from values, so you rarely write annotations for local variables. Knowing *what* it infers is the key to reading error messages. Remember:

- `const` keeps **literal** types (`"draft"`), `let` **widens** them (`string`).
- `as const` makes everything `readonly` and literal.
- Array methods like `find` can return `undefined`.
- Narrowing (`typeof`, `??`, `!== null`) changes the type.

These answers come from the real TypeScript compiler in strict mode.
