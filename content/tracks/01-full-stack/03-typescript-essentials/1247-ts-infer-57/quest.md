---
slug: "ts-infer-57"
title: "Type Inference Drill #57"
type: "quiz"
xp: 10
optional: true
section: "Practice: Type Inference & Errors"
questions: [{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = Math.random() > 0.5 ? \"ok\" : 59;\n```","options":["`any`","`string | number`","`\"ok\" | 59`","`\"ok\"`"],"answer":2,"explanation":"TypeScript infers `\"ok\" | 59`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = Promise.resolve(90);\n```","options":["`number`","`Promise<90>`","`Promise<any>`","`Promise<number>`"],"answer":3,"explanation":"TypeScript infers `Promise<number>`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\ndeclare const n: number;\nconst x = n > 52 && \"ok\";\n```","options":["`false | \"ok\"`","`string | boolean`","`boolean`","`\"ok\"`"],"answer":0,"explanation":"TypeScript infers `false | \"ok\"`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nlet x = 69;\n```","options":["`any`","`unknown`","`69`","`number`"],"answer":3,"explanation":"TypeScript infers `number`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [79, null, 81].filter((v) => v !== null);\n```","options":["`null[]`","`(number | null)[]`","`number[]`","`number`"],"answer":2,"explanation":"TypeScript infers `number[]`."}]
---
# Type Inference Drill #57

TypeScript infers types from values, so you rarely write annotations for local variables. Knowing *what* it infers is the key to reading error messages. Remember:

- `const` keeps **literal** types (`"draft"`), `let` **widens** them (`string`).
- `as const` makes everything `readonly` and literal.
- Array methods like `find` can return `undefined`.
- Narrowing (`typeof`, `??`, `!== null`) changes the type.

These answers come from the real TypeScript compiler in strict mode.
