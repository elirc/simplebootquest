---
slug: "ts-infer-11"
title: "Type Inference Drill #11"
type: "quiz"
xp: 10
optional: true
section: "Practice: Type Inference & Errors"
questions: [{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = Math.random() > 0.5 ? \"guest\" : 98;\n```","options":["`\"guest\"`","`any`","`\"guest\" | 98`","`string | number`"],"answer":2,"explanation":"TypeScript infers `\"guest\" | 98`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = async () => 83;\n```","options":["`() => Promise<number>`","`() => number`","`() => Promise<83>`","`Promise<number>`"],"answer":0,"explanation":"TypeScript infers `() => Promise<number>`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = ([\"draft\", \"guest\"] as const)[0];\n```","options":["`\"draft\" | \"guest\"`","`readonly [\"draft\", \"guest\"]`","`string`","`\"draft\"`"],"answer":3,"explanation":"TypeScript infers `\"draft\"`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [27, \"draft\"] as const;\n```","options":["`[number, string]`","`(string | number)[]`","`readonly [27, \"draft\"]`","`readonly (string | number)[]`"],"answer":2,"explanation":"TypeScript infers `readonly [27, \"draft\"]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [33, 34].map(String);\n```","options":["`string[]`","`number[]`","`any[]`","`String[]`"],"answer":0,"explanation":"TypeScript infers `string[]`."}]
---
# Type Inference Drill #11

TypeScript infers types from values, so you rarely write annotations for local variables. Knowing *what* it infers is the key to reading error messages. Remember:

- `const` keeps **literal** types (`"draft"`), `let` **widens** them (`string`).
- `as const` makes everything `readonly` and literal.
- Array methods like `find` can return `undefined`.
- Narrowing (`typeof`, `??`, `!== null`) changes the type.

These answers come from the real TypeScript compiler in strict mode.
