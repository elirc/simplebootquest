---
slug: "js-predict-objects-3"
title: "Predict the Output: Objects and references #3"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst a = { x: 8, y: 3, z: 3 };\ndelete a.y;\nconsole.log(Object.keys(a).length, a.y);\n```","options":["`3 undefined`","`undefined`","`3`","`2 undefined`"],"answer":3,"explanation":"It logs `2 undefined`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 2, y: 6 };\nconst b = a;\nb.x = 9;\nconsole.log(a.x);\n```","options":["`9`","`undefined`","`2`","`TypeError`"],"answer":0,"explanation":"It logs `9`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 4, y: 7, z: 4 };\ndelete a.y;\nconsole.log(Object.keys(a).length, a.y);\n```","options":["`2 undefined`","`undefined`","`3 undefined`","`4`"],"answer":0,"explanation":"It logs `2 undefined`."},{"prompt":"What does this log?\n\n```js\nconst key = \"x\";\nconst a = { key: 1, [key]: 1 };\nconsole.log(a.key, a.x);\n```","options":["`undefined`","`1 1`","`1 undefined`","`9`"],"answer":1,"explanation":"It logs `1 1`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 1, y: 1 };\nconst b = { ...a, y: 2, x: 1 };\nconsole.log(b.x, b.y);\n```","options":["`1 2`","`undefined`","`2`","`1 1`"],"answer":0,"explanation":"It logs `1 2`."}]
---
# Predict the Output: Objects and references #3

Objects are passed by reference: `const b = a` doesn't copy. Spread (`{ ...a }`) makes a shallow copy, and later keys win.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
