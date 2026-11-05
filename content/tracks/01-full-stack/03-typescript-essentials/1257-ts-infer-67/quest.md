---
slug: "ts-infer-67"
title: "Type Inference Drill #67"
type: "quiz"
xp: 10
optional: true
section: "Practice: Type Inference & Errors"
questions: [{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = new Map([[\"admin\", 81]]);\n```","options":["`Map<\"admin\", 81>`","`Map<string, number>`","`Record<string, number>`","`Map<any, any>`"],"answer":1,"explanation":"TypeScript infers `Map<string, number>`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = { id: 57, status: \"guest\" } as const;\n```","options":["`Readonly<object>`","`{ id: 57; status: \"guest\"; }`","`{ readonly id: 57; readonly status: \"guest\"; }`","`{ id: number; status: string; }`"],"answer":2,"explanation":"TypeScript infers `{ readonly id: 57; readonly status: \"guest\"; }`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\ndeclare const s: \"guest\" | \"open\";\nlet x = s;\n```","options":["`any`","`string`","`\"guest\"`","`\"guest\" | \"open\"`"],"answer":3,"explanation":"TypeScript infers `\"guest\" | \"open\"`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = Promise.resolve(15);\n```","options":["`number`","`Promise<15>`","`Promise<any>`","`Promise<number>`"],"answer":3,"explanation":"TypeScript infers `Promise<number>`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = new Map([[\"draft\", 21]]);\n```","options":["`Map<any, any>`","`Record<string, number>`","`Map<string, number>`","`Map<\"draft\", 21>`"],"answer":2,"explanation":"TypeScript infers `Map<string, number>`."}]
---
# Type Inference Drill #67

TypeScript infers types from values, so you rarely write annotations for local variables. Knowing *what* it infers is the key to reading error messages. Remember:

- `const` keeps **literal** types (`"draft"`), `let` **widens** them (`string`).
- `as const` makes everything `readonly` and literal.
- Array methods like `find` can return `undefined`.
- Narrowing (`typeof`, `??`, `!== null`) changes the type.

These answers come from the real TypeScript compiler in strict mode.
