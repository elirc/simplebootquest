---
slug: "js-predict-objects-24"
title: "Predict the Output: Objects and references #24"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst a = { x: 2, y: 5 };\nconst b = a;\nb.x = 4;\nconsole.log(a.x);\n```","options":["`TypeError`","`4`","`2`","`undefined`"],"answer":1,"explanation":"It logs `4`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 2, inner: { y: 4 } };\nconst b = { ...a };\nb.inner.y = 4;\nconsole.log(a.inner.y);\n```","options":["`2`","`ReferenceError`","`undefined`","`4`"],"answer":3,"explanation":"It logs `4`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 1, y: 6 };\nconst b = { ...a, y: 4, x: 6 };\nconsole.log(b.x, b.y);\n```","options":["`1 6`","`4`","`6 4`","`undefined`"],"answer":2,"explanation":"It logs `6 4`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 8, inner: { y: 1 } };\nconst b = { ...a };\nb.inner.y = 7;\nconsole.log(a.inner.y);\n```","options":["`ReferenceError`","`undefined`","`8`","`7`"],"answer":3,"explanation":"It logs `7`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 6, y: 5 };\nconst b = a;\nb.x = 7;\nconsole.log(a.x);\n```","options":["`TypeError`","`6`","`7`","`undefined`"],"answer":2,"explanation":"It logs `7`."}]
---
# Predict the Output: Objects and references #24

Objects are passed by reference: `const b = a` doesn't copy. Spread (`{ ...a }`) makes a shallow copy, and later keys win.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
