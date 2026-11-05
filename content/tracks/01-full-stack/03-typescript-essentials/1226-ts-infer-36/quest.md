---
slug: "ts-infer-36"
title: "Type Inference Drill #36"
type: "quiz"
xp: 10
optional: true
section: "Practice: Type Inference & Errors"
questions: [{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = JSON.parse(\"28\");\n```","options":["`number`","`unknown`","`string`","`any`"],"answer":3,"explanation":"TypeScript infers `any`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [73, 74].map(String);\n```","options":["`any[]`","`string[]`","`number[]`","`String[]`"],"answer":1,"explanation":"TypeScript infers `string[]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\ndeclare const id: string | null;\nconst x = id ?? 64;\n```","options":["`string | 64`","`string`","`string | null | 64`","`string | null`"],"answer":0,"explanation":"TypeScript infers `string | 64`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = 50;\n```","options":["`any`","`number`","`50`","`50 | number`"],"answer":2,"explanation":"TypeScript infers `50`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = async () => 30;\n```","options":["`() => number`","`Promise<number>`","`() => Promise<number>`","`() => Promise<30>`"],"answer":2,"explanation":"TypeScript infers `() => Promise<number>`."}]
---
# Type Inference Drill #36

TypeScript infers types from values, so you rarely write annotations for local variables. Knowing *what* it infers is the key to reading error messages. Remember:

- `const` keeps **literal** types (`"draft"`), `let` **widens** them (`string`).
- `as const` makes everything `readonly` and literal.
- Array methods like `find` can return `undefined`.
- Narrowing (`typeof`, `??`, `!== null`) changes the type.

These answers come from the real TypeScript compiler in strict mode.
