---
slug: "ts-infer-26"
title: "Type Inference Drill #26"
type: "quiz"
xp: 10
optional: true
section: "Practice: Type Inference & Errors"
questions: [{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\ndeclare const n: number;\nconst x = n > 73 && \"error\";\n```","options":["`boolean`","`\"error\"`","`false | \"error\"`","`string | boolean`"],"answer":2,"explanation":"TypeScript infers `false | \"error\"`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = JSON.parse(\"97\");\n```","options":["`string`","`any`","`unknown`","`number`"],"answer":1,"explanation":"TypeScript infers `any`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = ([\"open\", \"ok\"] as const)[0];\n```","options":["`string`","`\"open\"`","`\"open\" | \"ok\"`","`readonly [\"open\", \"ok\"]`"],"answer":1,"explanation":"TypeScript infers `\"open\"`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [{ id: 12 }, { id: 13, label: \"admin\" }];\n```","options":["`{ id: number; label: string; }[]`","`({ id: number; label?: undefined; } | { id: number; label: string; })[]`","`({ id: number; } & { label: string; })[]`","`object[]`"],"answer":1,"explanation":"TypeScript infers `({ id: number; label?: undefined; } | { id: number; label: string; })[]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = { id: 18, status: \"draft\" };\n```","options":["`{ readonly id: number; readonly status: string; }`","`{ id: number; status: string; }`","`{ id: 18; status: \"draft\"; }`","`object`"],"answer":1,"explanation":"TypeScript infers `{ id: number; status: string; }`."}]
---
# Type Inference Drill #26

TypeScript infers types from values, so you rarely write annotations for local variables. Knowing *what* it infers is the key to reading error messages. Remember:

- `const` keeps **literal** types (`"draft"`), `let` **widens** them (`string`).
- `as const` makes everything `readonly` and literal.
- Array methods like `find` can return `undefined`.
- Narrowing (`typeof`, `??`, `!== null`) changes the type.

These answers come from the real TypeScript compiler in strict mode.
