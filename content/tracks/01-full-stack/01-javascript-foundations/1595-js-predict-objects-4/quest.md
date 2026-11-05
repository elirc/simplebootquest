---
slug: "js-predict-objects-4"
title: "Predict the Output: Objects and references #4"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst a = { x: 2, y: 4 };\nconst b = a;\nb.x = 5;\nconsole.log(a.x);\n```","options":["`TypeError`","`undefined`","`2`","`5`"],"answer":3,"explanation":"It logs `5`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 9, inner: { y: 5 } };\nconst b = { ...a };\nb.inner.y = 4;\nconsole.log(a.inner.y);\n```","options":["`4`","`9`","`undefined`","`ReferenceError`"],"answer":0,"explanation":"It logs `4`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 5, y: 2 };\nconst b = { ...a, y: 6, x: 2 };\nconsole.log(b.x, b.y);\n```","options":["`5 2`","`6`","`undefined`","`2 6`"],"answer":3,"explanation":"It logs `2 6`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 1, y: 8 };\nconst b = { ...a, y: 9, x: 8 };\nconsole.log(b.x, b.y);\n```","options":["`1 8`","`9`","`undefined`","`8 9`"],"answer":3,"explanation":"It logs `8 9`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 6, inner: { y: 8 } };\nconst b = { ...a };\nb.inner.y = 9;\nconsole.log(a.inner.y);\n```","options":["`ReferenceError`","`undefined`","`6`","`9`"],"answer":3,"explanation":"It logs `9`."}]
---
# Predict the Output: Objects and references #4

Objects are passed by reference: `const b = a` doesn't copy. Spread (`{ ...a }`) makes a shallow copy, and later keys win.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
