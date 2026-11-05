---
slug: "js-predict-objects-6"
title: "Predict the Output: Objects and references #6"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst a = { x: 9, inner: { y: 2 } };\nconst b = { ...a };\nb.inner.y = 2;\nconsole.log(a.inner.y);\n```","options":["`ReferenceError`","`undefined`","`9`","`2`"],"answer":3,"explanation":"It logs `2`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 3, inner: { y: 7 } };\nconst b = { ...a };\nb.inner.y = 5;\nconsole.log(a.inner.y);\n```","options":["`5`","`undefined`","`3`","`ReferenceError`"],"answer":0,"explanation":"It logs `5`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 6, y: 3 };\nconst b = a;\nb.x = 9;\nconsole.log(a.x);\n```","options":["`undefined`","`9`","`6`","`TypeError`"],"answer":1,"explanation":"It logs `9`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 1, inner: { y: 1 } };\nconst b = { ...a };\nb.inner.y = 3;\nconsole.log(a.inner.y);\n```","options":["`3`","`undefined`","`1`","`ReferenceError`"],"answer":0,"explanation":"It logs `3`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 5, y: 8 };\nconst b = a;\nb.x = 1;\nconsole.log(a.x);\n```","options":["`undefined`","`1`","`TypeError`","`5`"],"answer":1,"explanation":"It logs `1`."}]
---
# Predict the Output: Objects and references #6

Objects are passed by reference: `const b = a` doesn't copy. Spread (`{ ...a }`) makes a shallow copy, and later keys win.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
