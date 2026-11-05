---
slug: "ts-infer-30"
title: "Type Inference Drill #30"
type: "quiz"
xp: 10
optional: true
section: "Practice: Type Inference & Errors"
questions: [{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = new Set([\"todo\", \"error\"]);\n```","options":["`Set<\"todo\" | \"error\">`","`string[]`","`Set<any>`","`Set<string>`"],"answer":3,"explanation":"TypeScript infers `Set<string>`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = new Set([\"error\", \"open\"]);\n```","options":["`Set<\"error\" | \"open\">`","`string[]`","`Set<any>`","`Set<string>`"],"answer":3,"explanation":"TypeScript infers `Set<string>`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [45, \"draft\"] as const;\n```","options":["`[number, string]`","`(string | number)[]`","`readonly (string | number)[]`","`readonly [45, \"draft\"]`"],"answer":3,"explanation":"TypeScript infers `readonly [45, \"draft\"]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = \"todo\";\n```","options":["`string`","`\"todo\"`","`\"todo\" | string`","`String`"],"answer":1,"explanation":"TypeScript infers `\"todo\"`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = async () => 50;\n```","options":["`() => Promise<50>`","`() => number`","`Promise<number>`","`() => Promise<number>`"],"answer":3,"explanation":"TypeScript infers `() => Promise<number>`."}]
---
# Type Inference Drill #30

TypeScript infers types from values, so you rarely write annotations for local variables. Knowing *what* it infers is the key to reading error messages. Remember:

- `const` keeps **literal** types (`"draft"`), `let` **widens** them (`string`).
- `as const` makes everything `readonly` and literal.
- Array methods like `find` can return `undefined`.
- Narrowing (`typeof`, `??`, `!== null`) changes the type.

These answers come from the real TypeScript compiler in strict mode.
