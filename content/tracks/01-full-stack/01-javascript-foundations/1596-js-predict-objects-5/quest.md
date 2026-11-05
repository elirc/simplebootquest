---
slug: "js-predict-objects-5"
title: "Predict the Output: Objects and references #5"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst a = { x: 4, inner: { y: 9 } };\nconst b = { ...a };\nb.inner.y = 5;\nconsole.log(a.inner.y);\n```","options":["`undefined`","`5`","`ReferenceError`","`4`"],"answer":1,"explanation":"It logs `5`."},{"prompt":"What does this log?\n\n```js\nconst key = \"x\";\nconst a = { key: 6, [key]: 1 };\nconsole.log(a.key, a.x);\n```","options":["`7`","`6 undefined`","`undefined`","`6 1`"],"answer":3,"explanation":"It logs `6 1`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 4, y: 1 };\nconst b = a;\nb.x = 8;\nconsole.log(a.x);\n```","options":["`TypeError`","`undefined`","`8`","`4`"],"answer":2,"explanation":"It logs `8`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 7, y: 7 };\nconst b = { ...a, y: 9, x: 7 };\nconsole.log(b.x, b.y);\n```","options":["`9`","`undefined`","`7 9`","`7 7`"],"answer":2,"explanation":"It logs `7 9`."},{"prompt":"What does this log?\n\n```js\nconst key = \"x\";\nconst a = { key: 4, [key]: 4 };\nconsole.log(a.key, a.x);\n```","options":["`undefined`","`4 4`","`6`","`4 undefined`"],"answer":1,"explanation":"It logs `4 4`."}]
---
# Predict the Output: Objects and references #5

Objects are passed by reference: `const b = a` doesn't copy. Spread (`{ ...a }`) makes a shallow copy, and later keys win.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
