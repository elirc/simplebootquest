---
slug: "ts-infer-54"
title: "Type Inference Drill #54"
type: "quiz"
xp: 10
optional: true
section: "Practice: Type Inference & Errors"
questions: [{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = async () => 99;\n```","options":["`() => Promise<number>`","`() => number`","`Promise<number>`","`() => Promise<99>`"],"answer":0,"explanation":"TypeScript infers `() => Promise<number>`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = Math.random() > 0.5 ? \"ok\" : 51;\n```","options":["`\"ok\"`","`\"ok\" | 51`","`string | number`","`any`"],"answer":1,"explanation":"TypeScript infers `\"ok\" | 51`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nfunction pick<T>(items: T[]): T | undefined {\n  return items[0];\n}\nconst x = pick([97, 98]);\n```","options":["`number`","`number | undefined`","`unknown`","`97 | undefined`"],"answer":1,"explanation":"TypeScript infers `number | undefined`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = async () => 9;\n```","options":["`Promise<number>`","`() => number`","`() => Promise<number>`","`() => Promise<9>`"],"answer":2,"explanation":"TypeScript infers `() => Promise<number>`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = new Map([[\"guest\", 45]]);\n```","options":["`Record<string, number>`","`Map<\"guest\", 45>`","`Map<any, any>`","`Map<string, number>`"],"answer":3,"explanation":"TypeScript infers `Map<string, number>`."}]
---
# Type Inference Drill #54

TypeScript infers types from values, so you rarely write annotations for local variables. Knowing *what* it infers is the key to reading error messages. Remember:

- `const` keeps **literal** types (`"draft"`), `let` **widens** them (`string`).
- `as const` makes everything `readonly` and literal.
- Array methods like `find` can return `undefined`.
- Narrowing (`typeof`, `??`, `!== null`) changes the type.

These answers come from the real TypeScript compiler in strict mode.
