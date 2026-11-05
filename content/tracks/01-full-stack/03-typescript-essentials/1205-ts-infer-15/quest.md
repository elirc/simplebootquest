---
slug: "ts-infer-15"
title: "Type Inference Drill #15"
type: "quiz"
xp: 10
optional: true
section: "Practice: Type Inference & Errors"
questions: [{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = Promise.resolve(86);\n```","options":["`Promise<86>`","`number`","`Promise<any>`","`Promise<number>`"],"answer":3,"explanation":"TypeScript infers `Promise<number>`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = { id: 86, status: \"guest\" };\n```","options":["`{ readonly id: number; readonly status: string; }`","`object`","`{ id: number; status: string; }`","`{ id: 86; status: \"guest\"; }`"],"answer":2,"explanation":"TypeScript infers `{ id: number; status: string; }`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = \"ok\";\n```","options":["`\"ok\"`","`string`","`String`","`\"ok\" | string`"],"answer":0,"explanation":"TypeScript infers `\"ok\"`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = JSON.parse(\"10\");\n```","options":["`any`","`string`","`number`","`unknown`"],"answer":0,"explanation":"TypeScript infers `any`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\ndeclare const n: number;\nconst x = n > 38 && \"todo\";\n```","options":["`false | \"todo\"`","`boolean`","`\"todo\"`","`string | boolean`"],"answer":0,"explanation":"TypeScript infers `false | \"todo\"`."}]
---
# Type Inference Drill #15

TypeScript infers types from values, so you rarely write annotations for local variables. Knowing *what* it infers is the key to reading error messages. Remember:

- `const` keeps **literal** types (`"draft"`), `let` **widens** them (`string`).
- `as const` makes everything `readonly` and literal.
- Array methods like `find` can return `undefined`.
- Narrowing (`typeof`, `??`, `!== null`) changes the type.

These answers come from the real TypeScript compiler in strict mode.
