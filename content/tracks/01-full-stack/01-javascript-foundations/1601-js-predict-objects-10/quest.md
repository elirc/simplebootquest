---
slug: "js-predict-objects-10"
title: "Predict the Output: Objects and references #10"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst a = { x: 8, y: 5 };\nconst b = { ...a, y: 3, x: 5 };\nconsole.log(b.x, b.y);\n```","options":["`5 3`","`8 5`","`3`","`undefined`"],"answer":0,"explanation":"It logs `5 3`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 8, inner: { y: 1 } };\nconst b = { ...a };\nb.inner.y = 3;\nconsole.log(a.inner.y);\n```","options":["`undefined`","`8`","`3`","`ReferenceError`"],"answer":2,"explanation":"It logs `3`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 9, y: 7 };\nconst b = a;\nb.x = 4;\nconsole.log(a.x);\n```","options":["`undefined`","`4`","`9`","`TypeError`"],"answer":1,"explanation":"It logs `4`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 4, inner: { y: 6 } };\nconst b = { ...a };\nb.inner.y = 4;\nconsole.log(a.inner.y);\n```","options":["`undefined`","`TypeError`","`4`","`ReferenceError`"],"answer":2,"explanation":"It logs `4`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 9, y: 6 };\nconst b = a;\nb.x = 5;\nconsole.log(a.x);\n```","options":["`9`","`TypeError`","`5`","`undefined`"],"answer":2,"explanation":"It logs `5`."}]
---
# Predict the Output: Objects and references #10

Objects are passed by reference: `const b = a` doesn't copy. Spread (`{ ...a }`) makes a shallow copy, and later keys win.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
