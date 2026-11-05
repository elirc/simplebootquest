---
slug: "js-predict-objects-14"
title: "Predict the Output: Objects and references #14"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst a = { x: 3, y: 1, z: 1 };\ndelete a.y;\nconsole.log(Object.keys(a).length, a.y);\n```","options":["`3 undefined`","`2 undefined`","`undefined`","`1`"],"answer":1,"explanation":"It logs `2 undefined`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 5, y: 2 };\nconst b = { ...a, y: 8, x: 2 };\nconsole.log(b.x, b.y);\n```","options":["`8`","`5 2`","`undefined`","`2 8`"],"answer":3,"explanation":"It logs `2 8`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 7, y: 6 };\nconst b = { ...a, y: 9, x: 6 };\nconsole.log(b.x, b.y);\n```","options":["`7 6`","`9`","`6 9`","`undefined`"],"answer":2,"explanation":"It logs `6 9`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 9, inner: { y: 9 } };\nconst b = { ...a };\nb.inner.y = 8;\nconsole.log(a.inner.y);\n```","options":["`8`","`undefined`","`ReferenceError`","`9`"],"answer":0,"explanation":"It logs `8`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 7, y: 5 };\nconst b = { ...a, y: 4, x: 5 };\nconsole.log(b.x, b.y);\n```","options":["`5 4`","`undefined`","`4`","`7 5`"],"answer":0,"explanation":"It logs `5 4`."}]
---
# Predict the Output: Objects and references #14

Objects are passed by reference: `const b = a` doesn't copy. Spread (`{ ...a }`) makes a shallow copy, and later keys win.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
