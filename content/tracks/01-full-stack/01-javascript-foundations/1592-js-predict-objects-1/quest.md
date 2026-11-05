---
slug: "js-predict-objects-1"
title: "Predict the Output: Objects and references #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst a = { x: 2, inner: { y: 2 } };\nconst b = { ...a };\nb.inner.y = 7;\nconsole.log(a.inner.y);\n```","options":["`2`","`ReferenceError`","`undefined`","`7`"],"answer":3,"explanation":"It logs `7`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 8, y: 6 };\nconst b = { ...a, y: 3, x: 6 };\nconsole.log(b.x, b.y);\n```","options":["`undefined`","`8 6`","`3`","`6 3`"],"answer":3,"explanation":"It logs `6 3`."},{"prompt":"What does this log?\n\n```js\nconst key = \"x\";\nconst a = { key: 1, [key]: 6 };\nconsole.log(a.key, a.x);\n```","options":["`4`","`undefined`","`1 undefined`","`1 6`"],"answer":3,"explanation":"It logs `1 6`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 3, inner: { y: 3 } };\nconst b = { ...a };\nb.inner.y = 8;\nconsole.log(a.inner.y);\n```","options":["`8`","`undefined`","`3`","`ReferenceError`"],"answer":0,"explanation":"It logs `8`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 7, inner: { y: 5 } };\nconst b = { ...a };\nb.inner.y = 4;\nconsole.log(a.inner.y);\n```","options":["`4`","`ReferenceError`","`undefined`","`7`"],"answer":0,"explanation":"It logs `4`."}]
---
# Predict the Output: Objects and references #1

Objects are passed by reference: `const b = a` doesn't copy. Spread (`{ ...a }`) makes a shallow copy, and later keys win.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
