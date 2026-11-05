---
slug: "js-predict-objects-23"
title: "Predict the Output: Objects and references #23"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst a = { x: 3, y: 1 };\nconst b = a;\nb.x = 1;\nconsole.log(a.x);\n```","options":["`3`","`TypeError`","`undefined`","`1`"],"answer":3,"explanation":"It logs `1`."},{"prompt":"What does this log?\n\n```js\nconst key = \"x\";\nconst a = { key: 7, [key]: 5 };\nconsole.log(a.key, a.x);\n```","options":["`7 undefined`","`4`","`7 5`","`undefined`"],"answer":2,"explanation":"It logs `7 5`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 7, y: 3 };\nconst b = a;\nb.x = 2;\nconsole.log(a.x);\n```","options":["`undefined`","`7`","`TypeError`","`2`"],"answer":3,"explanation":"It logs `2`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 8, y: 2 };\nconst b = { ...a, y: 7, x: 2 };\nconsole.log(b.x, b.y);\n```","options":["`7`","`8 2`","`undefined`","`2 7`"],"answer":3,"explanation":"It logs `2 7`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 2, inner: { y: 9 } };\nconst b = { ...a };\nb.inner.y = 8;\nconsole.log(a.inner.y);\n```","options":["`2`","`8`","`undefined`","`ReferenceError`"],"answer":1,"explanation":"It logs `8`."}]
---
# Predict the Output: Objects and references #23

Objects are passed by reference: `const b = a` doesn't copy. Spread (`{ ...a }`) makes a shallow copy, and later keys win.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
