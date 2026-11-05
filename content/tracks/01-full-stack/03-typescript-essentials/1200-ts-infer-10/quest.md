---
slug: "ts-infer-10"
title: "Type Inference Drill #10"
type: "quiz"
xp: 10
optional: true
section: "Practice: Type Inference & Errors"
questions: [{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = Promise.resolve(58);\n```","options":["`Promise<any>`","`Promise<58>`","`number`","`Promise<number>`"],"answer":3,"explanation":"TypeScript infers `Promise<number>`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = new Set([\"draft\", \"ok\"]);\n```","options":["`Set<string>`","`Set<any>`","`string[]`","`Set<\"draft\" | \"ok\">`"],"answer":0,"explanation":"TypeScript infers `Set<string>`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = ([\"todo\", \"guest\"] as const)[0];\n```","options":["`readonly [\"todo\", \"guest\"]`","`string`","`\"todo\" | \"guest\"`","`\"todo\"`"],"answer":3,"explanation":"TypeScript infers `\"todo\"`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [84, \"guest\"] as const;\n```","options":["`(string | number)[]`","`readonly (string | number)[]`","`readonly [84, \"guest\"]`","`[number, string]`"],"answer":2,"explanation":"TypeScript infers `readonly [84, \"guest\"]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst statuses = [\"open\", \"paid\"] as const;\nconst x: (typeof statuses)[number] = \"open\";\n```","options":["`string`","`never`","`\"open\" | \"paid\"`","`readonly [\"open\", \"paid\"]`"],"answer":2,"explanation":"TypeScript infers `\"open\" | \"paid\"`."}]
---
# Type Inference Drill #10

TypeScript infers types from values, so you rarely write annotations for local variables. Knowing *what* it infers is the key to reading error messages. Remember:

- `const` keeps **literal** types (`"draft"`), `let` **widens** them (`string`).
- `as const` makes everything `readonly` and literal.
- Array methods like `find` can return `undefined`.
- Narrowing (`typeof`, `??`, `!== null`) changes the type.

These answers come from the real TypeScript compiler in strict mode.
