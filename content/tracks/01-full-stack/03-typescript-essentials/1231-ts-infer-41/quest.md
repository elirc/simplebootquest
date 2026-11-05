---
slug: "ts-infer-41"
title: "Type Inference Drill #41"
type: "quiz"
xp: 10
optional: true
section: "Practice: Type Inference & Errors"
questions: [{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nlet x = \"admin\";\n```","options":["`String`","`string`","`\"admin\"`","`any`"],"answer":1,"explanation":"TypeScript infers `string`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = Math.random() > 0.5 ? \"todo\" : 51;\n```","options":["`\"todo\"`","`any`","`string | number`","`\"todo\" | 51`"],"answer":3,"explanation":"TypeScript infers `\"todo\" | 51`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = ([\"admin\", \"ok\"] as const)[0];\n```","options":["`readonly [\"admin\", \"ok\"]`","`string`","`\"admin\"`","`\"admin\" | \"ok\"`"],"answer":2,"explanation":"TypeScript infers `\"admin\"`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [85, \"admin\"] as const;\n```","options":["`readonly (string | number)[]`","`[number, string]`","`(string | number)[]`","`readonly [85, \"admin\"]`"],"answer":3,"explanation":"TypeScript infers `readonly [85, \"admin\"]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = 94;\n```","options":["`94 | number`","`any`","`number`","`94`"],"answer":3,"explanation":"TypeScript infers `94`."}]
---
# Type Inference Drill #41

TypeScript infers types from values, so you rarely write annotations for local variables. Knowing *what* it infers is the key to reading error messages. Remember:

- `const` keeps **literal** types (`"draft"`), `let` **widens** them (`string`).
- `as const` makes everything `readonly` and literal.
- Array methods like `find` can return `undefined`.
- Narrowing (`typeof`, `??`, `!== null`) changes the type.

These answers come from the real TypeScript compiler in strict mode.
