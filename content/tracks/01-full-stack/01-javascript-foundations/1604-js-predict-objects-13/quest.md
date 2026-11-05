---
slug: "js-predict-objects-13"
title: "Predict the Output: Objects and references #13"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst key = \"x\";\nconst a = { key: 8, [key]: 8 };\nconsole.log(a.key, a.x);\n```","options":["`8 undefined`","`8 8`","`8`","`undefined`"],"answer":1,"explanation":"It logs `8 8`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 5, y: 9, z: 5 };\ndelete a.y;\nconsole.log(Object.keys(a).length, a.y);\n```","options":["`3 undefined`","`5`","`2 undefined`","`undefined`"],"answer":2,"explanation":"It logs `2 undefined`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 4, y: 8 };\nconst b = { ...a, y: 7, x: 8 };\nconsole.log(b.x, b.y);\n```","options":["`8 7`","`undefined`","`4 8`","`7`"],"answer":0,"explanation":"It logs `8 7`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 8, y: 2, z: 4 };\ndelete a.y;\nconsole.log(Object.keys(a).length, a.y);\n```","options":["`2 undefined`","`undefined`","`3 undefined`","`4`"],"answer":0,"explanation":"It logs `2 undefined`."},{"prompt":"What does this log?\n\n```js\nconst key = \"x\";\nconst a = { key: 1, [key]: 8 };\nconsole.log(a.key, a.x);\n```","options":["`undefined`","`1 undefined`","`1 8`","`9`"],"answer":2,"explanation":"It logs `1 8`."}]
---
# Predict the Output: Objects and references #13

Objects are passed by reference: `const b = a` doesn't copy. Spread (`{ ...a }`) makes a shallow copy, and later keys win.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
