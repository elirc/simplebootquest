---
slug: "ts-infer-28"
title: "Type Inference Drill #28"
type: "quiz"
xp: 10
optional: true
section: "Practice: Type Inference & Errors"
questions: [{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = JSON.parse(\"68\");\n```","options":["`any`","`number`","`string`","`unknown`"],"answer":0,"explanation":"TypeScript infers `any`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = Math.random() > 0.5 ? \"error\" : 52;\n```","options":["`any`","`string | number`","`\"error\" | 52`","`\"error\"`"],"answer":2,"explanation":"TypeScript infers `\"error\" | 52`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = async () => 78;\n```","options":["`() => number`","`Promise<number>`","`() => Promise<number>`","`() => Promise<78>`"],"answer":2,"explanation":"TypeScript infers `() => Promise<number>`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nfunction pick<T>(items: T[]): T | undefined {\n  return items[0];\n}\nconst x = pick([42, 43]);\n```","options":["`unknown`","`number`","`number | undefined`","`42 | undefined`"],"answer":2,"explanation":"TypeScript infers `number | undefined`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\ndeclare const id: string | null;\nconst x = id ?? 82;\n```","options":["`string | 82`","`string | null`","`string`","`string | null | 82`"],"answer":0,"explanation":"TypeScript infers `string | 82`."}]
---
# Type Inference Drill #28

TypeScript infers types from values, so you rarely write annotations for local variables. Knowing *what* it infers is the key to reading error messages. Remember:

- `const` keeps **literal** types (`"draft"`), `let` **widens** them (`string`).
- `as const` makes everything `readonly` and literal.
- Array methods like `find` can return `undefined`.
- Narrowing (`typeof`, `??`, `!== null`) changes the type.

These answers come from the real TypeScript compiler in strict mode.
