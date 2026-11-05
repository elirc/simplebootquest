---
slug: "js-predict-objects-20"
title: "Predict the Output: Objects and references #20"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst a = { x: 3, y: 8 };\nconst b = { ...a, y: 4, x: 8 };\nconsole.log(b.x, b.y);\n```","options":["`3 8`","`4`","`undefined`","`8 4`"],"answer":3,"explanation":"It logs `8 4`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 3, y: 3 };\nconst b = { ...a, y: 6, x: 3 };\nconsole.log(b.x, b.y);\n```","options":["`6`","`3 6`","`3 3`","`undefined`"],"answer":1,"explanation":"It logs `3 6`."},{"prompt":"What does this log?\n\n```js\nconst key = \"x\";\nconst a = { key: 6, [key]: 3 };\nconsole.log(a.key, a.x);\n```","options":["`6 undefined`","`6 3`","`7`","`undefined`"],"answer":1,"explanation":"It logs `6 3`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 3, y: 7, z: 1 };\ndelete a.y;\nconsole.log(Object.keys(a).length, a.y);\n```","options":["`undefined`","`1`","`2 undefined`","`3 undefined`"],"answer":2,"explanation":"It logs `2 undefined`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 3, inner: { y: 2 } };\nconst b = { ...a };\nb.inner.y = 8;\nconsole.log(a.inner.y);\n```","options":["`ReferenceError`","`3`","`8`","`undefined`"],"answer":2,"explanation":"It logs `8`."}]
---
# Predict the Output: Objects and references #20

Objects are passed by reference: `const b = a` doesn't copy. Spread (`{ ...a }`) makes a shallow copy, and later keys win.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
