---
slug: "ts-infer-9"
title: "Type Inference Drill #9"
type: "quiz"
xp: 10
optional: true
section: "Practice: Type Inference & Errors"
questions: [{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = ([\"draft\", \"ok\"] as const)[0];\n```","options":["`readonly [\"draft\", \"ok\"]`","`\"draft\" | \"ok\"`","`\"draft\"`","`string`"],"answer":2,"explanation":"TypeScript infers `\"draft\"`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = JSON.parse(\"33\");\n```","options":["`unknown`","`any`","`string`","`number`"],"answer":1,"explanation":"TypeScript infers `any`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [81, \"paid\"] as const;\n```","options":["`(string | number)[]`","`readonly (string | number)[]`","`readonly [81, \"paid\"]`","`[number, string]`"],"answer":2,"explanation":"TypeScript infers `readonly [81, \"paid\"]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = async () => 11;\n```","options":["`() => Promise<number>`","`() => number`","`Promise<number>`","`() => Promise<11>`"],"answer":0,"explanation":"TypeScript infers `() => Promise<number>`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = Object.keys({ todo: 65 });\n```","options":["`\"todo\"[]`","`string`","`(keyof { todo: number })[]`","`string[]`"],"answer":3,"explanation":"TypeScript infers `string[]`."}]
---
# Type Inference Drill #9

TypeScript infers types from values, so you rarely write annotations for local variables. Knowing *what* it infers is the key to reading error messages. Remember:

- `const` keeps **literal** types (`"draft"`), `let` **widens** them (`string`).
- `as const` makes everything `readonly` and literal.
- Array methods like `find` can return `undefined`.
- Narrowing (`typeof`, `??`, `!== null`) changes the type.

These answers come from the real TypeScript compiler in strict mode.
