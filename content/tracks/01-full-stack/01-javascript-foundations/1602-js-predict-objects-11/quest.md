---
slug: "js-predict-objects-11"
title: "Predict the Output: Objects and references #11"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst a = { x: 2, y: 2, z: 8 };\ndelete a.y;\nconsole.log(Object.keys(a).length, a.y);\n```","options":["`2 undefined`","`8`","`undefined`","`3 undefined`"],"answer":0,"explanation":"It logs `2 undefined`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 2, y: 7, z: 1 };\ndelete a.y;\nconsole.log(Object.keys(a).length, a.y);\n```","options":["`2 undefined`","`3 undefined`","`undefined`","`1`"],"answer":0,"explanation":"It logs `2 undefined`."},{"prompt":"What does this log?\n\n```js\nconst key = \"x\";\nconst a = { key: 6, [key]: 4 };\nconsole.log(a.key, a.x);\n```","options":["`6 4`","`undefined`","`6 undefined`","`2`"],"answer":0,"explanation":"It logs `6 4`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 8, y: 4, z: 6 };\ndelete a.y;\nconsole.log(Object.keys(a).length, a.y);\n```","options":["`undefined`","`2 undefined`","`3 undefined`","`6`"],"answer":1,"explanation":"It logs `2 undefined`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 4, y: 2 };\nconst b = a;\nb.x = 7;\nconsole.log(a.x);\n```","options":["`7`","`undefined`","`4`","`TypeError`"],"answer":0,"explanation":"It logs `7`."}]
---
# Predict the Output: Objects and references #11

Objects are passed by reference: `const b = a` doesn't copy. Spread (`{ ...a }`) makes a shallow copy, and later keys win.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
