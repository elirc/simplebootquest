---
slug: "js-predict-objects-17"
title: "Predict the Output: Objects and references #17"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst key = \"x\";\nconst a = { key: 3, [key]: 6 };\nconsole.log(a.key, a.x);\n```","options":["`3 undefined`","`undefined`","`3 6`","`9`"],"answer":2,"explanation":"It logs `3 6`."},{"prompt":"What does this log?\n\n```js\nconst key = \"x\";\nconst a = { key: 9, [key]: 2 };\nconsole.log(a.key, a.x);\n```","options":["`undefined`","`1`","`9 undefined`","`9 2`"],"answer":3,"explanation":"It logs `9 2`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 3, y: 8, z: 2 };\ndelete a.y;\nconsole.log(Object.keys(a).length, a.y);\n```","options":["`2 undefined`","`undefined`","`2`","`3 undefined`"],"answer":0,"explanation":"It logs `2 undefined`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 2, inner: { y: 2 } };\nconst b = { ...a };\nb.inner.y = 1;\nconsole.log(a.inner.y);\n```","options":["`ReferenceError`","`2`","`undefined`","`1`"],"answer":3,"explanation":"It logs `1`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 4, inner: { y: 9 } };\nconst b = { ...a };\nb.inner.y = 7;\nconsole.log(a.inner.y);\n```","options":["`undefined`","`ReferenceError`","`7`","`4`"],"answer":2,"explanation":"It logs `7`."}]
---
# Predict the Output: Objects and references #17

Objects are passed by reference: `const b = a` doesn't copy. Spread (`{ ...a }`) makes a shallow copy, and later keys win.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
