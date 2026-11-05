---
slug: "ts-infer-59"
title: "Type Inference Drill #59"
type: "quiz"
xp: 10
optional: true
section: "Practice: Type Inference & Errors"
questions: [{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\ndeclare const s: \"open\" | \"guest\";\nlet x = s;\n```","options":["`any`","`\"open\" | \"guest\"`","`\"open\"`","`string`"],"answer":1,"explanation":"TypeScript infers `\"open\" | \"guest\"`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = ([\"paid\", \"guest\"] as const)[0];\n```","options":["`string`","`\"paid\"`","`\"paid\" | \"guest\"`","`readonly [\"paid\", \"guest\"]`"],"answer":1,"explanation":"TypeScript infers `\"paid\"`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [80, 81].map(String);\n```","options":["`String[]`","`number[]`","`string[]`","`any[]`"],"answer":2,"explanation":"TypeScript infers `string[]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [{ id: 30 }, { id: 31, label: \"guest\" }];\n```","options":["`{ id: number; label: string; }[]`","`({ id: number; label?: undefined; } | { id: number; label: string; })[]`","`({ id: number; } & { label: string; })[]`","`object[]`"],"answer":1,"explanation":"TypeScript infers `({ id: number; label?: undefined; } | { id: number; label: string; })[]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [68, \"paid\"] as const;\n```","options":["`readonly [68, \"paid\"]`","`readonly (string | number)[]`","`[number, string]`","`(string | number)[]`"],"answer":0,"explanation":"TypeScript infers `readonly [68, \"paid\"]`."}]
---
# Type Inference Drill #59

TypeScript infers types from values, so you rarely write annotations for local variables. Knowing *what* it infers is the key to reading error messages. Remember:

- `const` keeps **literal** types (`"draft"`), `let` **widens** them (`string`).
- `as const` makes everything `readonly` and literal.
- Array methods like `find` can return `undefined`.
- Narrowing (`typeof`, `??`, `!== null`) changes the type.

These answers come from the real TypeScript compiler in strict mode.
