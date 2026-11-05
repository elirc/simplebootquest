---
slug: "ts-infer-43"
title: "Type Inference Drill #43"
type: "quiz"
xp: 10
optional: true
section: "Practice: Type Inference & Errors"
questions: [{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = new Set([\"paid\", \"guest\"]);\n```","options":["`Set<string>`","`Set<any>`","`Set<\"paid\" | \"guest\">`","`string[]`"],"answer":0,"explanation":"TypeScript infers `Set<string>`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [49, \"guest\"];\n```","options":["`(49 | \"guest\")[]`","`(string | number)[]`","`any[]`","`[number, string]`"],"answer":1,"explanation":"TypeScript infers `(string | number)[]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [59, \"error\"] as const;\n```","options":["`readonly [59, \"error\"]`","`readonly (string | number)[]`","`[number, string]`","`(string | number)[]`"],"answer":0,"explanation":"TypeScript infers `readonly [59, \"error\"]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [65, \"ok\"];\n```","options":["`(65 | \"ok\")[]`","`(string | number)[]`","`any[]`","`[number, string]`"],"answer":1,"explanation":"TypeScript infers `(string | number)[]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst statuses = [\"ok\", \"open\"] as const;\nconst x: (typeof statuses)[number] = \"ok\";\n```","options":["`readonly [\"ok\", \"open\"]`","`\"ok\" | \"open\"`","`never`","`string`"],"answer":1,"explanation":"TypeScript infers `\"ok\" | \"open\"`."}]
---
# Type Inference Drill #43

TypeScript infers types from values, so you rarely write annotations for local variables. Knowing *what* it infers is the key to reading error messages. Remember:

- `const` keeps **literal** types (`"draft"`), `let` **widens** them (`string`).
- `as const` makes everything `readonly` and literal.
- Array methods like `find` can return `undefined`.
- Narrowing (`typeof`, `??`, `!== null`) changes the type.

These answers come from the real TypeScript compiler in strict mode.
