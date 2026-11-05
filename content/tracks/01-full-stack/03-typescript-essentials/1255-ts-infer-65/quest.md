---
slug: "ts-infer-65"
title: "Type Inference Drill #65"
type: "quiz"
xp: 10
optional: true
section: "Practice: Type Inference & Errors"
questions: [{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = Math.random() > 0.5 ? \"guest\" : 15;\n```","options":["`\"guest\"`","`string | number`","`any`","`\"guest\" | 15`"],"answer":3,"explanation":"TypeScript infers `\"guest\" | 15`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\ndeclare const s: \"admin\" | \"open\";\nlet x = s;\n```","options":["`\"admin\"`","`\"admin\" | \"open\"`","`string`","`any`"],"answer":1,"explanation":"TypeScript infers `\"admin\" | \"open\"`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst statuses = [\"todo\", \"draft\"] as const;\nconst x: (typeof statuses)[number] = \"todo\";\n```","options":["`string`","`\"todo\" | \"draft\"`","`readonly [\"todo\", \"draft\"]`","`never`"],"answer":1,"explanation":"TypeScript infers `\"todo\" | \"draft\"`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nlet x = 44;\n```","options":["`44`","`unknown`","`any`","`number`"],"answer":3,"explanation":"TypeScript infers `number`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = Object.keys({ error: 3 });\n```","options":["`string[]`","`\"error\"[]`","`string`","`(keyof { error: number })[]`"],"answer":0,"explanation":"TypeScript infers `string[]`."}]
---
# Type Inference Drill #65

TypeScript infers types from values, so you rarely write annotations for local variables. Knowing *what* it infers is the key to reading error messages. Remember:

- `const` keeps **literal** types (`"draft"`), `let` **widens** them (`string`).
- `as const` makes everything `readonly` and literal.
- Array methods like `find` can return `undefined`.
- Narrowing (`typeof`, `??`, `!== null`) changes the type.

These answers come from the real TypeScript compiler in strict mode.
