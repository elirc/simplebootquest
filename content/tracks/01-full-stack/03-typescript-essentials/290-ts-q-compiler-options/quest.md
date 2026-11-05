---
slug: "ts-q-compiler-options"
title: "Quiz: tsconfig & Strictness"
type: "quiz"
xp: 15
questions: [{"prompt": "Which option makes `null` and `undefined` errors visible?", "options": ["skipLibCheck", "strict (strictNullChecks)", "noEmit"], "answer": 1}, {"prompt": "With noUncheckedIndexedAccess, what is the type of `names[0]` for `names: string[]`?", "options": ["string", "string | undefined", "any"], "answer": 1}, {"prompt": "Why might a Vite project set noEmit: true?", "options": ["To disable TypeScript", "tsc only type-checks, while Vite/esbuild does the transpiling", "It speeds up runtime"], "answer": 1}, {"prompt": "What does noImplicitAny prevent?", "options": ["Using any explicitly", "Parameters and variables silently becoming `any` when their type cannot be inferred", "Using unknown"], "answer": 1}, {"prompt": "Does TypeScript type-checking happen at runtime?", "options": ["Yes", "No: types are erased, so runtime validation is still needed for external data"], "answer": 1}]
---
# Quiz: tsconfig & Strictness

The most important `tsconfig.json` options:

| Option | Effect |
|--------|--------|
| `"strict": true` | Enables `strictNullChecks`, `noImplicitAny` and more. **Always on for new projects** |
| `"noUncheckedIndexedAccess"` | `arr[i]` and `obj[key]` include `undefined` in their type |
| `"noEmit"` | Type-check only (a bundler such as Vite or tsx does the compiling) |
| `"module"` / `"moduleResolution"` | How imports are resolved (`"Bundler"` for Vite projects, `"NodeNext"` for Node) |
| `"skipLibCheck"` | Skip type-checking `.d.ts` files in node_modules (faster) |

This project uses `strict` + `noUncheckedIndexedAccess` (see `tsconfig.base.json`).
