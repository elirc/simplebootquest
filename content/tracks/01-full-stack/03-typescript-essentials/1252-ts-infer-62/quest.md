---
slug: "ts-infer-62"
title: "Type Inference Drill #62"
type: "quiz"
xp: 10
optional: true
section: "Practice: Type Inference & Errors"
questions: [{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nfunction pick<T>(items: T[]): T | undefined {\n  return items[0];\n}\nconst x = pick([77, 78]);\n```","options":["`number | undefined`","`77 | undefined`","`number`","`unknown`"],"answer":0,"explanation":"TypeScript infers `number | undefined`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\ndeclare const s: \"admin\" | \"draft\";\nlet x = s;\n```","options":["`\"admin\" | \"draft\"`","`string`","`any`","`\"admin\"`"],"answer":0,"explanation":"TypeScript infers `\"admin\" | \"draft\"`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = { id: 41, status: \"admin\" } as const;\n```","options":["`{ readonly id: 41; readonly status: \"admin\"; }`","`{ id: number; status: string; }`","`Readonly<object>`","`{ id: 41; status: \"admin\"; }`"],"answer":0,"explanation":"TypeScript infers `{ readonly id: 41; readonly status: \"admin\"; }`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\ndeclare const id: string | null;\nconst x = id ?? 38;\n```","options":["`string`","`string | null | 38`","`string | null`","`string | 38`"],"answer":3,"explanation":"TypeScript infers `string | 38`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = { id: 10, status: \"admin\" };\n```","options":["`{ id: number; status: string; }`","`object`","`{ id: 10; status: \"admin\"; }`","`{ readonly id: number; readonly status: string; }`"],"answer":0,"explanation":"TypeScript infers `{ id: number; status: string; }`."}]
---
# Type Inference Drill #62

TypeScript infers types from values, so you rarely write annotations for local variables. Knowing *what* it infers is the key to reading error messages. Remember:

- `const` keeps **literal** types (`"draft"`), `let` **widens** them (`string`).
- `as const` makes everything `readonly` and literal.
- Array methods like `find` can return `undefined`.
- Narrowing (`typeof`, `??`, `!== null`) changes the type.

These answers come from the real TypeScript compiler in strict mode.
