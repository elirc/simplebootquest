---
slug: "ts-infer-50"
title: "Type Inference Drill #50"
type: "quiz"
xp: 10
optional: true
section: "Practice: Type Inference & Errors"
questions: [{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [{ id: 58 }, { id: 59, label: \"admin\" }];\n```","options":["`({ id: number; } & { label: string; })[]`","`{ id: number; label: string; }[]`","`({ id: number; label?: undefined; } | { id: number; label: string; })[]`","`object[]`"],"answer":2,"explanation":"TypeScript infers `({ id: number; label?: undefined; } | { id: number; label: string; })[]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = Math.random() > 0.5 ? \"open\" : 74;\n```","options":["`\"open\"`","`string | number`","`\"open\" | 74`","`any`"],"answer":2,"explanation":"TypeScript infers `\"open\" | 74`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nconst x = [{ id: 18 }, { id: 19, label: \"draft\" }];\n```","options":["`({ id: number; } & { label: string; })[]`","`object[]`","`({ id: number; label?: undefined; } | { id: number; label: string; })[]`","`{ id: number; label: string; }[]`"],"answer":2,"explanation":"TypeScript infers `({ id: number; label?: undefined; } | { id: number; label: string; })[]`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\ndeclare const s: \"todo\" | \"open\";\nlet x = s;\n```","options":["`string`","`any`","`\"todo\" | \"open\"`","`\"todo\"`"],"answer":2,"explanation":"TypeScript infers `\"todo\" | \"open\"`."},{"prompt":"What type does TypeScript infer for `x`?\n\n```ts\nlet x = 48;\n```","options":["`any`","`48`","`unknown`","`number`"],"answer":3,"explanation":"TypeScript infers `number`."}]
---
# Type Inference Drill #50

TypeScript infers types from values, so you rarely write annotations for local variables. Knowing *what* it infers is the key to reading error messages. Remember:

- `const` keeps **literal** types (`"draft"`), `let` **widens** them (`string`).
- `as const` makes everything `readonly` and literal.
- Array methods like `find` can return `undefined`.
- Narrowing (`typeof`, `??`, `!== null`) changes the type.

These answers come from the real TypeScript compiler in strict mode.
