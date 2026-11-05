---
slug: "ts-infer-63"
title: "Type Inference Drill #63"
type: "quiz"
xp: 10
optional: true
section: "Practice: Type Inference & Errors"
questions: [{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = Math.random() > 0.5 ? \"ok\" : 96;\n```","options":["`any`","`\"ok\" | 96`","`\"ok\"`","`string | number`"],"answer":1,"explanation":"TypeScript infers `\"ok\" | 96`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = ([\"guest\", \"error\"] as const)[0];\n```","options":["`\"guest\"`","`readonly [\"guest\", \"error\"]`","`string`","`\"guest\" | \"error\"`"],"answer":0,"explanation":"TypeScript infers `\"guest\"`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nlet x = \"ok\";\n```","options":["`String`","`any`","`\"ok\"`","`string`"],"answer":3,"explanation":"TypeScript infers `string`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\ndeclare const s: \"todo\" | \"guest\";\nlet x = s;\n```","options":["`any`","`string`","`\"todo\" | \"guest\"`","`\"todo\"`"],"answer":2,"explanation":"TypeScript infers `\"todo\" | \"guest\"`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [88, 89].find((v) => v > 88);\n```","options":["`boolean`","`number[]`","`number`","`number | undefined`"],"answer":3,"explanation":"TypeScript infers `number | undefined`."}]
---
# Type Inference Drill #63

TypeScript infers types from values, so you rarely write annotations for local variables. Knowing *what* it infers is the key to reading error messages. Remember:

- `const` keeps **literal** types (`"draft"`), `let` **widens** them (`string`).
- `as const` makes everything `readonly` and literal.
- Array methods like `find` can return `undefined`.
- Narrowing (`typeof`, `??`, `!== null`) changes the type.

These answers come from the real TypeScript compiler in strict mode.
