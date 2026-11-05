---
slug: "js-predict-objects-16"
title: "Predict the Output: Objects and references #16"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst a = { x: 5, y: 8, z: 2 };\ndelete a.y;\nconsole.log(Object.keys(a).length, a.y);\n```","options":["`undefined`","`3 undefined`","`2`","`2 undefined`"],"answer":3,"explanation":"It logs `2 undefined`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 4, y: 8 };\nconst b = a;\nb.x = 8;\nconsole.log(a.x);\n```","options":["`undefined`","`TypeError`","`8`","`4`"],"answer":2,"explanation":"It logs `8`."},{"prompt":"What does this log?\n\n```js\nconst key = \"x\";\nconst a = { key: 5, [key]: 9 };\nconsole.log(a.key, a.x);\n```","options":["`undefined`","`5 undefined`","`6`","`5 9`"],"answer":3,"explanation":"It logs `5 9`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 6, y: 7, z: 3 };\ndelete a.y;\nconsole.log(Object.keys(a).length, a.y);\n```","options":["`undefined`","`3 undefined`","`3`","`2 undefined`"],"answer":3,"explanation":"It logs `2 undefined`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 8, y: 3 };\nconst b = { ...a, y: 6, x: 3 };\nconsole.log(b.x, b.y);\n```","options":["`6`","`3 6`","`undefined`","`8 3`"],"answer":1,"explanation":"It logs `3 6`."}]
---
# Predict the Output: Objects and references #16

Objects are passed by reference: `const b = a` doesn't copy. Spread (`{ ...a }`) makes a shallow copy, and later keys win.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
