---
slug: "async-q-destructuring"
title: "Quiz: Destructuring & Spread Edge Cases"
type: "quiz"
xp: 15
optional: true
section: "Practice"
questions: [{"prompt": "`const { theme = \"light\" } = { theme: null }`. What is theme?", "options": ["\"light\"", "null", "undefined"], "answer": 1, "explanation": "Default values only apply when the value is undefined."}, {"prompt": "`const [first, , third] = [\"a\", \"b\", \"c\"]`. What is third?", "options": ["\"b\"", "\"c\"", "undefined"], "answer": 1}, {"prompt": "`{ ...{ a: 1, b: 1 }, ...{ a: 2 } }` equals…", "options": ["{ a: 1, b: 1 }", "{ a: 2, b: 1 }", "{ a: 2 }"], "answer": 1}, {"prompt": "Destructuring `const { user: { name } } = {}` will…", "options": ["Give name = undefined", "Throw, because user is undefined", "Give name = null"], "answer": 1}, {"prompt": "`[...new Set(\"aab\")]` is…", "options": ["[\"a\", \"a\", \"b\"]", "[\"a\", \"b\"]", "\"ab\""], "answer": 1}]
---
# Quiz: Destructuring & Spread Edge Cases

```js
const { a = 1 } = { a: null };       // a is null (defaults only apply to undefined)
const [x, , z] = [1, 2, 3];          // skip elements
const { b: { c } } = { b: { c: 2 } };// nested
const merged = { ...{ a: 1 }, ...{ a: 2 } }; // later wins → { a: 2 }
const copy = [...'hi'];              // ['h', 'i']
```
