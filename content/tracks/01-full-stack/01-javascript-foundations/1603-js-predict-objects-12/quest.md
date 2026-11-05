---
slug: "js-predict-objects-12"
title: "Predict the Output: Objects and references #12"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst key = \"x\";\nconst a = { key: 5, [key]: 4 };\nconsole.log(a.key, a.x);\n```","options":["`5 undefined`","`3`","`undefined`","`5 4`"],"answer":3,"explanation":"It logs `5 4`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 5, y: 1, z: 5 };\ndelete a.y;\nconsole.log(Object.keys(a).length, a.y);\n```","options":["`3 undefined`","`2 undefined`","`5`","`undefined`"],"answer":1,"explanation":"It logs `2 undefined`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 9, y: 9 };\nconst b = a;\nb.x = 6;\nconsole.log(a.x);\n```","options":["`9`","`undefined`","`TypeError`","`6`"],"answer":3,"explanation":"It logs `6`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 4, y: 6 };\nconst b = a;\nb.x = 2;\nconsole.log(a.x);\n```","options":["`undefined`","`4`","`TypeError`","`2`"],"answer":3,"explanation":"It logs `2`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 8, inner: { y: 3 } };\nconst b = { ...a };\nb.inner.y = 5;\nconsole.log(a.inner.y);\n```","options":["`ReferenceError`","`5`","`undefined`","`8`"],"answer":1,"explanation":"It logs `5`."}]
---
# Predict the Output: Objects and references #12

Objects are passed by reference: `const b = a` doesn't copy. Spread (`{ ...a }`) makes a shallow copy, and later keys win.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
