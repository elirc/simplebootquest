---
slug: "js-predict-objects-22"
title: "Predict the Output: Objects and references #22"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst a = { x: 8, y: 9 };\nconst b = { ...a, y: 6, x: 9 };\nconsole.log(b.x, b.y);\n```","options":["`6`","`8 9`","`9 6`","`undefined`"],"answer":2,"explanation":"It logs `9 6`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 5, inner: { y: 2 } };\nconst b = { ...a };\nb.inner.y = 7;\nconsole.log(a.inner.y);\n```","options":["`undefined`","`ReferenceError`","`7`","`5`"],"answer":2,"explanation":"It logs `7`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 3, inner: { y: 8 } };\nconst b = { ...a };\nb.inner.y = 6;\nconsole.log(a.inner.y);\n```","options":["`ReferenceError`","`6`","`undefined`","`3`"],"answer":1,"explanation":"It logs `6`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 1, y: 1, z: 6 };\ndelete a.y;\nconsole.log(Object.keys(a).length, a.y);\n```","options":["`undefined`","`3 undefined`","`6`","`2 undefined`"],"answer":3,"explanation":"It logs `2 undefined`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 6, y: 2, z: 6 };\ndelete a.y;\nconsole.log(Object.keys(a).length, a.y);\n```","options":["`3 undefined`","`2 undefined`","`6`","`undefined`"],"answer":1,"explanation":"It logs `2 undefined`."}]
---
# Predict the Output: Objects and references #22

Objects are passed by reference: `const b = a` doesn't copy. Spread (`{ ...a }`) makes a shallow copy, and later keys win.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
