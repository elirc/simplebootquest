---
slug: "ts-infer-56"
title: "Type Inference Drill #56"
type: "quiz"
xp: 10
optional: true
section: "Practice: Type Inference & Errors"
questions: [{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = { id: 68, status: \"todo\" };\n```","options":["`{ id: 68; status: \"todo\"; }`","`object`","`{ id: number; status: string; }`","`{ readonly id: number; readonly status: string; }`"],"answer":2,"explanation":"TypeScript infers `{ id: number; status: string; }`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = Object.keys({ admin: 85 });\n```","options":["`(keyof { admin: number })[]`","`string`","`string[]`","`\"admin\"[]`"],"answer":2,"explanation":"TypeScript infers `string[]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = new Map([[\"admin\", 4]]);\n```","options":["`Map<\"admin\", 4>`","`Map<string, number>`","`Record<string, number>`","`Map<any, any>`"],"answer":1,"explanation":"TypeScript infers `Map<string, number>`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = async () => 31;\n```","options":["`() => Promise<number>`","`Promise<number>`","`() => number`","`() => Promise<31>`"],"answer":0,"explanation":"TypeScript infers `() => Promise<number>`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = { id: 44, status: \"open\" } as const;\n```","options":["`{ readonly id: 44; readonly status: \"open\"; }`","`Readonly<object>`","`{ id: 44; status: \"open\"; }`","`{ id: number; status: string; }`"],"answer":0,"explanation":"TypeScript infers `{ readonly id: 44; readonly status: \"open\"; }`."}]
---
# Type Inference Drill #56

TypeScript infers types from values, so you rarely write annotations for local variables. Knowing *what* it infers is the key to reading error messages. Remember:

- `const` keeps **literal** types (`"draft"`), `let` **widens** them (`string`).
- `as const` makes everything `readonly` and literal.
- Array methods like `find` can return `undefined`.
- Narrowing (`typeof`, `??`, `!== null`) changes the type.

These answers come from the real TypeScript compiler in strict mode.
