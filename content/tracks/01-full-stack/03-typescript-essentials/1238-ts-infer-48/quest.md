---
slug: "ts-infer-48"
title: "Type Inference Drill #48"
type: "quiz"
xp: 10
optional: true
section: "Practice: Type Inference & Errors"
questions: [{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = new Map([[\"guest\", 49]]);\n```","options":["`Map<string, number>`","`Map<any, any>`","`Map<\"guest\", 49>`","`Record<string, number>`"],"answer":0,"explanation":"TypeScript infers `Map<string, number>`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = { id: 39, status: \"guest\" } as const;\n```","options":["`{ id: 39; status: \"guest\"; }`","`{ readonly id: 39; readonly status: \"guest\"; }`","`Readonly<object>`","`{ id: number; status: string; }`"],"answer":1,"explanation":"TypeScript infers `{ readonly id: 39; readonly status: \"guest\"; }`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = { id: 74, status: \"todo\" };\n```","options":["`{ id: 74; status: \"todo\"; }`","`{ id: number; status: string; }`","`{ readonly id: number; readonly status: string; }`","`object`"],"answer":1,"explanation":"TypeScript infers `{ id: number; status: string; }`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = async () => 66;\n```","options":["`() => number`","`() => Promise<number>`","`Promise<number>`","`() => Promise<66>`"],"answer":1,"explanation":"TypeScript infers `() => Promise<number>`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = { id: 45, status: \"admin\" };\n```","options":["`{ readonly id: number; readonly status: string; }`","`object`","`{ id: number; status: string; }`","`{ id: 45; status: \"admin\"; }`"],"answer":2,"explanation":"TypeScript infers `{ id: number; status: string; }`."}]
---
# Type Inference Drill #48

TypeScript infers types from values, so you rarely write annotations for local variables. Knowing *what* it infers is the key to reading error messages. Remember:

- `const` keeps **literal** types (`"draft"`), `let` **widens** them (`string`).
- `as const` makes everything `readonly` and literal.
- Array methods like `find` can return `undefined`.
- Narrowing (`typeof`, `??`, `!== null`) changes the type.

These answers come from the real TypeScript compiler in strict mode.
