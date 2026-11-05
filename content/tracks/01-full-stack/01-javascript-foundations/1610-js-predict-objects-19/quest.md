---
slug: "js-predict-objects-19"
title: "Predict the Output: Objects and references #19"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst a = { x: 7, y: 9, z: 1 };\ndelete a.y;\nconsole.log(Object.keys(a).length, a.y);\n```","options":["`undefined`","`3 undefined`","`1`","`2 undefined`"],"answer":3,"explanation":"It logs `2 undefined`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 4, inner: { y: 2 } };\nconst b = { ...a };\nb.inner.y = 7;\nconsole.log(a.inner.y);\n```","options":["`4`","`undefined`","`7`","`ReferenceError`"],"answer":2,"explanation":"It logs `7`."},{"prompt":"What does this log?\n\n```js\nconst key = \"x\";\nconst a = { key: 7, [key]: 2 };\nconsole.log(a.key, a.x);\n```","options":["`7 2`","`undefined`","`9`","`7 undefined`"],"answer":0,"explanation":"It logs `7 2`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 2, inner: { y: 2 } };\nconst b = { ...a };\nb.inner.y = 4;\nconsole.log(a.inner.y);\n```","options":["`undefined`","`4`","`ReferenceError`","`2`"],"answer":1,"explanation":"It logs `4`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 5, y: 7 };\nconst b = a;\nb.x = 7;\nconsole.log(a.x);\n```","options":["`TypeError`","`7`","`undefined`","`5`"],"answer":1,"explanation":"It logs `7`."}]
---
# Predict the Output: Objects and references #19

Objects are passed by reference: `const b = a` doesn't copy. Spread (`{ ...a }`) makes a shallow copy, and later keys win.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
