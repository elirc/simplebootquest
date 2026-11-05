---
slug: "ts-infer-20"
title: "Type Inference Drill #20"
type: "quiz"
xp: 10
optional: true
section: "Practice: Type Inference & Errors"
questions: [{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\ndeclare const n: number;\nconst x = n > 12 && \"error\";\n```","options":["`string | boolean`","`boolean`","`false | \"error\"`","`\"error\"`"],"answer":2,"explanation":"TypeScript infers `false | \"error\"`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = Math.random() > 0.5 ? \"ok\" : 23;\n```","options":["`\"ok\" | 23`","`string | number`","`any`","`\"ok\"`"],"answer":0,"explanation":"TypeScript infers `\"ok\" | 23`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = \"draft\";\n```","options":["`\"draft\" | string`","`\"draft\"`","`string`","`String`"],"answer":1,"explanation":"TypeScript infers `\"draft\"`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nfunction pick<T>(items: T[]): T | undefined {\n  return items[0];\n}\nconst x = pick([81, 82]);\n```","options":["`number`","`number | undefined`","`81 | undefined`","`unknown`"],"answer":1,"explanation":"TypeScript infers `number | undefined`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = { id: 70, status: \"admin\" };\n```","options":["`object`","`{ id: 70; status: \"admin\"; }`","`{ readonly id: number; readonly status: string; }`","`{ id: number; status: string; }`"],"answer":3,"explanation":"TypeScript infers `{ id: number; status: string; }`."}]
---
# Type Inference Drill #20

TypeScript infers types from values, so you rarely write annotations for local variables. Knowing *what* it infers is the key to reading error messages. Remember:

- `const` keeps **literal** types (`"draft"`), `let` **widens** them (`string`).
- `as const` makes everything `readonly` and literal.
- Array methods like `find` can return `undefined`.
- Narrowing (`typeof`, `??`, `!== null`) changes the type.

These answers come from the real TypeScript compiler in strict mode.
