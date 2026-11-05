---
slug: "js-predict-objects-25"
title: "Predict the Output: Objects and references #25"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst key = \"x\";\nconst a = { key: 8, [key]: 9 };\nconsole.log(a.key, a.x);\n```","options":["`8 undefined`","`1`","`undefined`","`8 9`"],"answer":3,"explanation":"It logs `8 9`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 8, inner: { y: 3 } };\nconst b = { ...a };\nb.inner.y = 8;\nconsole.log(a.inner.y);\n```","options":["`undefined`","`ReferenceError`","`8`","`TypeError`"],"answer":2,"explanation":"It logs `8`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 5, inner: { y: 5 } };\nconst b = { ...a };\nb.inner.y = 1;\nconsole.log(a.inner.y);\n```","options":["`undefined`","`1`","`5`","`ReferenceError`"],"answer":1,"explanation":"It logs `1`."},{"prompt":"What does this log?\n\n```js\nconst key = \"x\";\nconst a = { key: 3, [key]: 9 };\nconsole.log(a.key, a.x);\n```","options":["`3 9`","`undefined`","`2`","`3 undefined`"],"answer":0,"explanation":"It logs `3 9`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 4, inner: { y: 8 } };\nconst b = { ...a };\nb.inner.y = 6;\nconsole.log(a.inner.y);\n```","options":["`4`","`6`","`ReferenceError`","`undefined`"],"answer":1,"explanation":"It logs `6`."}]
---
# Predict the Output: Objects and references #25

Objects are passed by reference: `const b = a` doesn't copy. Spread (`{ ...a }`) makes a shallow copy, and later keys win.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
