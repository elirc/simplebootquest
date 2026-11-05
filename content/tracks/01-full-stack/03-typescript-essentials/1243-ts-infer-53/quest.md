---
slug: "ts-infer-53"
title: "Type Inference Drill #53"
type: "quiz"
xp: 10
optional: true
section: "Practice: Type Inference & Errors"
questions: [{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = JSON.parse(\"78\");\n```","options":["`any`","`number`","`unknown`","`string`"],"answer":0,"explanation":"TypeScript infers `any`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = Object.keys({ guest: 37 });\n```","options":["`string`","`\"guest\"[]`","`string[]`","`(keyof { guest: number })[]`"],"answer":2,"explanation":"TypeScript infers `string[]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = { id: 42, status: \"draft\" } as const;\n```","options":["`{ id: 42; status: \"draft\"; }`","`{ id: number; status: string; }`","`{ readonly id: 42; readonly status: \"draft\"; }`","`Readonly<object>`"],"answer":2,"explanation":"TypeScript infers `{ readonly id: 42; readonly status: \"draft\"; }`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = new Map([[\"paid\", 65]]);\n```","options":["`Map<any, any>`","`Record<string, number>`","`Map<string, number>`","`Map<\"paid\", 65>`"],"answer":2,"explanation":"TypeScript infers `Map<string, number>`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = Object.keys({ paid: 33 });\n```","options":["`string[]`","`string`","`(keyof { paid: number })[]`","`\"paid\"[]`"],"answer":0,"explanation":"TypeScript infers `string[]`."}]
---
# Type Inference Drill #53

TypeScript infers types from values, so you rarely write annotations for local variables. Knowing *what* it infers is the key to reading error messages. Remember:

- `const` keeps **literal** types (`"draft"`), `let` **widens** them (`string`).
- `as const` makes everything `readonly` and literal.
- Array methods like `find` can return `undefined`.
- Narrowing (`typeof`, `??`, `!== null`) changes the type.

These answers come from the real TypeScript compiler in strict mode.
