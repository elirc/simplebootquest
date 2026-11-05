---
slug: "js-predict-objects-15"
title: "Predict the Output: Objects and references #15"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst a = { x: 3, inner: { y: 1 } };\nconst b = { ...a };\nb.inner.y = 1;\nconsole.log(a.inner.y);\n```","options":["`ReferenceError`","`undefined`","`3`","`1`"],"answer":3,"explanation":"It logs `1`."},{"prompt":"What does this log?\n\n```js\nconst key = \"x\";\nconst a = { key: 4, [key]: 8 };\nconsole.log(a.key, a.x);\n```","options":["`undefined`","`4 8`","`3`","`4 undefined`"],"answer":1,"explanation":"It logs `4 8`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 5, inner: { y: 9 } };\nconst b = { ...a };\nb.inner.y = 7;\nconsole.log(a.inner.y);\n```","options":["`undefined`","`7`","`ReferenceError`","`5`"],"answer":1,"explanation":"It logs `7`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 6, inner: { y: 2 } };\nconst b = { ...a };\nb.inner.y = 7;\nconsole.log(a.inner.y);\n```","options":["`ReferenceError`","`6`","`7`","`undefined`"],"answer":2,"explanation":"It logs `7`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 7, y: 4, z: 4 };\ndelete a.y;\nconsole.log(Object.keys(a).length, a.y);\n```","options":["`4`","`undefined`","`3 undefined`","`2 undefined`"],"answer":3,"explanation":"It logs `2 undefined`."}]
---
# Predict the Output: Objects and references #15

Objects are passed by reference: `const b = a` doesn't copy. Spread (`{ ...a }`) makes a shallow copy, and later keys win.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
