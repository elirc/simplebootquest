---
slug: "ts-infer-70"
title: "Type Inference Drill #70"
type: "quiz"
xp: 10
optional: true
section: "Practice: Type Inference & Errors"
questions: [{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\ndeclare const s: \"error\" | \"admin\";\nlet x = s;\n```","options":["`\"error\" | \"admin\"`","`\"error\"`","`any`","`string`"],"answer":0,"explanation":"TypeScript infers `\"error\" | \"admin\"`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [24, \"draft\"] as const;\n```","options":["`[number, string]`","`(string | number)[]`","`readonly [24, \"draft\"]`","`readonly (string | number)[]`"],"answer":2,"explanation":"TypeScript infers `readonly [24, \"draft\"]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = 53;\n```","options":["`number`","`any`","`53`","`53 | number`"],"answer":2,"explanation":"TypeScript infers `53`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\ndeclare const s: \"draft\" | \"guest\";\nlet x = s;\n```","options":["`string`","`\"draft\" | \"guest\"`","`any`","`\"draft\"`"],"answer":1,"explanation":"TypeScript infers `\"draft\" | \"guest\"`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\ndeclare const s: \"guest\" | \"ok\";\nlet x = s;\n```","options":["`string`","`\"guest\" | \"ok\"`","`any`","`\"guest\"`"],"answer":1,"explanation":"TypeScript infers `\"guest\" | \"ok\"`."}]
---
# Type Inference Drill #70

TypeScript infers types from values, so you rarely write annotations for local variables. Knowing *what* it infers is the key to reading error messages. Remember:

- `const` keeps **literal** types (`"draft"`), `let` **widens** them (`string`).
- `as const` makes everything `readonly` and literal.
- Array methods like `find` can return `undefined`.
- Narrowing (`typeof`, `??`, `!== null`) changes the type.

These answers come from the real TypeScript compiler in strict mode.
