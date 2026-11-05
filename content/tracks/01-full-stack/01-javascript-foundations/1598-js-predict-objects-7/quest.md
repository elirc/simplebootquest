---
slug: "js-predict-objects-7"
title: "Predict the Output: Objects and references #7"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst a = { x: 5, y: 6 };\nconst b = a;\nb.x = 2;\nconsole.log(a.x);\n```","options":["`2`","`TypeError`","`undefined`","`5`"],"answer":0,"explanation":"It logs `2`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 8, inner: { y: 4 } };\nconst b = { ...a };\nb.inner.y = 9;\nconsole.log(a.inner.y);\n```","options":["`undefined`","`9`","`8`","`ReferenceError`"],"answer":1,"explanation":"It logs `9`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 3, y: 8, z: 5 };\ndelete a.y;\nconsole.log(Object.keys(a).length, a.y);\n```","options":["`5`","`2 undefined`","`3 undefined`","`undefined`"],"answer":1,"explanation":"It logs `2 undefined`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 2, inner: { y: 3 } };\nconst b = { ...a };\nb.inner.y = 6;\nconsole.log(a.inner.y);\n```","options":["`undefined`","`ReferenceError`","`2`","`6`"],"answer":3,"explanation":"It logs `6`."},{"prompt":"What does this log?\n\n```js\nconst key = \"x\";\nconst a = { key: 9, [key]: 5 };\nconsole.log(a.key, a.x);\n```","options":["`undefined`","`9 5`","`6`","`9 undefined`"],"answer":1,"explanation":"It logs `9 5`."}]
---
# Predict the Output: Objects and references #7

Objects are passed by reference: `const b = a` doesn't copy. Spread (`{ ...a }`) makes a shallow copy, and later keys win.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
