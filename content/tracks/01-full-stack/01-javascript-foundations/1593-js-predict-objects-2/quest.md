---
slug: "js-predict-objects-2"
title: "Predict the Output: Objects and references #2"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst a = { x: 5, y: 7 };\nconst b = { ...a, y: 5, x: 7 };\nconsole.log(b.x, b.y);\n```","options":["`5 7`","`7 5`","`undefined`","`5`"],"answer":1,"explanation":"It logs `7 5`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 6, inner: { y: 3 } };\nconst b = { ...a };\nb.inner.y = 8;\nconsole.log(a.inner.y);\n```","options":["`8`","`ReferenceError`","`undefined`","`6`"],"answer":0,"explanation":"It logs `8`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 3, inner: { y: 9 } };\nconst b = { ...a };\nb.inner.y = 3;\nconsole.log(a.inner.y);\n```","options":["`undefined`","`TypeError`","`3`","`ReferenceError`"],"answer":2,"explanation":"It logs `3`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 6, y: 8 };\nconst b = a;\nb.x = 8;\nconsole.log(a.x);\n```","options":["`TypeError`","`6`","`undefined`","`8`"],"answer":3,"explanation":"It logs `8`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 3, y: 7, z: 7 };\ndelete a.y;\nconsole.log(Object.keys(a).length, a.y);\n```","options":["`2 undefined`","`undefined`","`7`","`3 undefined`"],"answer":0,"explanation":"It logs `2 undefined`."}]
---
# Predict the Output: Objects and references #2

Objects are passed by reference: `const b = a` doesn't copy. Spread (`{ ...a }`) makes a shallow copy, and later keys win.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
