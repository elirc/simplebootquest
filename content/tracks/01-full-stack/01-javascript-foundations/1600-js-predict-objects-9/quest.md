---
slug: "js-predict-objects-9"
title: "Predict the Output: Objects and references #9"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst a = { x: 6, y: 3 };\nconst b = { ...a, y: 1, x: 3 };\nconsole.log(b.x, b.y);\n```","options":["`1`","`undefined`","`6 3`","`3 1`"],"answer":3,"explanation":"It logs `3 1`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 9, y: 2, z: 4 };\ndelete a.y;\nconsole.log(Object.keys(a).length, a.y);\n```","options":["`4`","`2 undefined`","`undefined`","`3 undefined`"],"answer":1,"explanation":"It logs `2 undefined`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 8, y: 2 };\nconst b = a;\nb.x = 6;\nconsole.log(a.x);\n```","options":["`TypeError`","`8`","`undefined`","`6`"],"answer":3,"explanation":"It logs `6`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 3, y: 1 };\nconst b = { ...a, y: 3, x: 1 };\nconsole.log(b.x, b.y);\n```","options":["`undefined`","`1 3`","`3`","`3 1`"],"answer":1,"explanation":"It logs `1 3`."},{"prompt":"What does this log?\n\n```js\nconst key = \"x\";\nconst a = { key: 3, [key]: 8 };\nconsole.log(a.key, a.x);\n```","options":["`3 undefined`","`undefined`","`6`","`3 8`"],"answer":3,"explanation":"It logs `3 8`."}]
---
# Predict the Output: Objects and references #9

Objects are passed by reference: `const b = a` doesn't copy. Spread (`{ ...a }`) makes a shallow copy, and later keys win.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
