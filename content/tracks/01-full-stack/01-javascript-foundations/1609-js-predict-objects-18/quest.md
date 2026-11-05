---
slug: "js-predict-objects-18"
title: "Predict the Output: Objects and references #18"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst key = \"x\";\nconst a = { key: 7, [key]: 1 };\nconsole.log(a.key, a.x);\n```","options":["`7`","`undefined`","`7 1`","`7 undefined`"],"answer":2,"explanation":"It logs `7 1`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 8, inner: { y: 9 } };\nconst b = { ...a };\nb.inner.y = 1;\nconsole.log(a.inner.y);\n```","options":["`1`","`ReferenceError`","`8`","`undefined`"],"answer":0,"explanation":"It logs `1`."},{"prompt":"What does this log?\n\n```js\nconst key = \"x\";\nconst a = { key: 8, [key]: 2 };\nconsole.log(a.key, a.x);\n```","options":["`undefined`","`8 undefined`","`8`","`8 2`"],"answer":3,"explanation":"It logs `8 2`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 9, y: 3, z: 3 };\ndelete a.y;\nconsole.log(Object.keys(a).length, a.y);\n```","options":["`undefined`","`2 undefined`","`3 undefined`","`3`"],"answer":1,"explanation":"It logs `2 undefined`."},{"prompt":"What does this log?\n\n```js\nconst key = \"x\";\nconst a = { key: 2, [key]: 4 };\nconsole.log(a.key, a.x);\n```","options":["`8`","`2 undefined`","`2 4`","`undefined`"],"answer":2,"explanation":"It logs `2 4`."}]
---
# Predict the Output: Objects and references #18

Objects are passed by reference: `const b = a` doesn't copy. Spread (`{ ...a }`) makes a shallow copy, and later keys win.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
