---
slug: "ts-infer-45"
title: "Type Inference Drill #45"
type: "quiz"
xp: 10
optional: true
section: "Practice: Type Inference & Errors"
questions: [{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = ([\"draft\", \"open\"] as const)[0];\n```","options":["`\"draft\"`","`string`","`\"draft\" | \"open\"`","`readonly [\"draft\", \"open\"]`"],"answer":0,"explanation":"TypeScript infers `\"draft\"`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = new Map([[\"paid\", 37]]);\n```","options":["`Map<string, number>`","`Record<string, number>`","`Map<\"paid\", 37>`","`Map<any, any>`"],"answer":0,"explanation":"TypeScript infers `Map<string, number>`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [{ id: 38 }, { id: 39, label: \"open\" }];\n```","options":["`object[]`","`({ id: number; } & { label: string; })[]`","`{ id: number; label: string; }[]`","`({ id: number; label?: undefined; } | { id: number; label: string; })[]`"],"answer":3,"explanation":"TypeScript infers `({ id: number; label?: undefined; } | { id: number; label: string; })[]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = \"ok\".split(\"\");\n```","options":["`string[]`","`string`","`char[]`","`\"ok\"[]`"],"answer":0,"explanation":"TypeScript infers `string[]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst statuses = [\"paid\", \"guest\"] as const;\nconst x: (typeof statuses)[number] = \"paid\";\n```","options":["`\"paid\" | \"guest\"`","`string`","`readonly [\"paid\", \"guest\"]`","`never`"],"answer":0,"explanation":"TypeScript infers `\"paid\" | \"guest\"`."}]
---
# Type Inference Drill #45

TypeScript infers types from values, so you rarely write annotations for local variables. Knowing *what* it infers is the key to reading error messages. Remember:

- `const` keeps **literal** types (`"draft"`), `let` **widens** them (`string`).
- `as const` makes everything `readonly` and literal.
- Array methods like `find` can return `undefined`.
- Narrowing (`typeof`, `??`, `!== null`) changes the type.

These answers come from the real TypeScript compiler in strict mode.
