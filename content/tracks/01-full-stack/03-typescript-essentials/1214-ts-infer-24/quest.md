---
slug: "ts-infer-24"
title: "Type Inference Drill #24"
type: "quiz"
xp: 10
optional: true
section: "Practice: Type Inference & Errors"
questions: [{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = ([\"open\", \"admin\"] as const)[0];\n```","options":["`readonly [\"open\", \"admin\"]`","`string`","`\"open\" | \"admin\"`","`\"open\"`"],"answer":3,"explanation":"TypeScript infers `\"open\"`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = Math.random() > 0.5 ? \"draft\" : 76;\n```","options":["`\"draft\" | 76`","`\"draft\"`","`string | number`","`any`"],"answer":0,"explanation":"TypeScript infers `\"draft\" | 76`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = \"guest\".split(\"\");\n```","options":["`char[]`","`string[]`","`\"guest\"[]`","`string`"],"answer":1,"explanation":"TypeScript infers `string[]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst statuses = [\"error\", \"ok\"] as const;\nconst x: (typeof statuses)[number] = \"error\";\n```","options":["`never`","`string`","`\"error\" | \"ok\"`","`readonly [\"error\", \"ok\"]`"],"answer":2,"explanation":"TypeScript infers `\"error\" | \"ok\"`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = Promise.resolve(34);\n```","options":["`number`","`Promise<number>`","`Promise<34>`","`Promise<any>`"],"answer":1,"explanation":"TypeScript infers `Promise<number>`."}]
---
# Type Inference Drill #24

TypeScript infers types from values, so you rarely write annotations for local variables. Knowing *what* it infers is the key to reading error messages. Remember:

- `const` keeps **literal** types (`"draft"`), `let` **widens** them (`string`).
- `as const` makes everything `readonly` and literal.
- Array methods like `find` can return `undefined`.
- Narrowing (`typeof`, `??`, `!== null`) changes the type.

These answers come from the real TypeScript compiler in strict mode.
