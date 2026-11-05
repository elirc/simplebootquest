---
slug: "ts-infer-68"
title: "Type Inference Drill #68"
type: "quiz"
xp: 10
optional: true
section: "Practice: Type Inference & Errors"
questions: [{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst statuses = [\"ok\", \"admin\"] as const;\nconst x: (typeof statuses)[number] = \"ok\";\n```","options":["`\"ok\" | \"admin\"`","`string`","`readonly [\"ok\", \"admin\"]`","`never`"],"answer":0,"explanation":"TypeScript infers `\"ok\" | \"admin\"`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = \"error\".split(\"\");\n```","options":["`char[]`","`\"error\"[]`","`string`","`string[]`"],"answer":3,"explanation":"TypeScript infers `string[]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = 63;\n```","options":["`any`","`63`","`number`","`63 | number`"],"answer":1,"explanation":"TypeScript infers `63`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [55, 56].find((v) => v > 55);\n```","options":["`number[]`","`number | undefined`","`number`","`boolean`"],"answer":1,"explanation":"TypeScript infers `number | undefined`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\ndeclare const s: \"open\" | \"admin\";\nlet x = s;\n```","options":["`\"open\" | \"admin\"`","`\"open\"`","`string`","`any`"],"answer":0,"explanation":"TypeScript infers `\"open\" | \"admin\"`."}]
---
# Type Inference Drill #68

TypeScript infers types from values, so you rarely write annotations for local variables. Knowing *what* it infers is the key to reading error messages. Remember:

- `const` keeps **literal** types (`"draft"`), `let` **widens** them (`string`).
- `as const` makes everything `readonly` and literal.
- Array methods like `find` can return `undefined`.
- Narrowing (`typeof`, `??`, `!== null`) changes the type.

These answers come from the real TypeScript compiler in strict mode.
