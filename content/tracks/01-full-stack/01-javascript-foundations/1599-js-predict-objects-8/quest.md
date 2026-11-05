---
slug: "js-predict-objects-8"
title: "Predict the Output: Objects and references #8"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst key = \"x\";\nconst a = { key: 2, [key]: 3 };\nconsole.log(a.key, a.x);\n```","options":["`2 undefined`","`6`","`2 3`","`undefined`"],"answer":2,"explanation":"It logs `2 3`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 4, y: 4 };\nconst b = { ...a, y: 7, x: 4 };\nconsole.log(b.x, b.y);\n```","options":["`4 7`","`undefined`","`4 4`","`7`"],"answer":0,"explanation":"It logs `4 7`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 5, inner: { y: 7 } };\nconst b = { ...a };\nb.inner.y = 8;\nconsole.log(a.inner.y);\n```","options":["`ReferenceError`","`8`","`undefined`","`5`"],"answer":1,"explanation":"It logs `8`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 6, y: 7, z: 7 };\ndelete a.y;\nconsole.log(Object.keys(a).length, a.y);\n```","options":["`3 undefined`","`undefined`","`2 undefined`","`7`"],"answer":2,"explanation":"It logs `2 undefined`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 7, y: 9 };\nconst b = a;\nb.x = 3;\nconsole.log(a.x);\n```","options":["`7`","`3`","`undefined`","`TypeError`"],"answer":1,"explanation":"It logs `3`."}]
---
# Predict the Output: Objects and references #8

Objects are passed by reference: `const b = a` doesn't copy. Spread (`{ ...a }`) makes a shallow copy, and later keys win.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
