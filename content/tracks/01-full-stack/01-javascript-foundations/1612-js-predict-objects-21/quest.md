---
slug: "js-predict-objects-21"
title: "Predict the Output: Objects and references #21"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst a = { x: 2, y: 4 };\nconst b = { ...a, y: 2, x: 4 };\nconsole.log(b.x, b.y);\n```","options":["`2`","`2 4`","`undefined`","`4 2`"],"answer":3,"explanation":"It logs `4 2`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 3, y: 1, z: 6 };\ndelete a.y;\nconsole.log(Object.keys(a).length, a.y);\n```","options":["`6`","`undefined`","`3 undefined`","`2 undefined`"],"answer":3,"explanation":"It logs `2 undefined`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 4, y: 2 };\nconst b = { ...a, y: 2, x: 2 };\nconsole.log(b.x, b.y);\n```","options":["`2`","`4 2`","`undefined`","`2 2`"],"answer":3,"explanation":"It logs `2 2`."},{"prompt":"What does this log?\n\n```js\nconst a = { x: 5, y: 4 };\nconst b = a;\nb.x = 9;\nconsole.log(a.x);\n```","options":["`undefined`","`5`","`9`","`TypeError`"],"answer":2,"explanation":"It logs `9`."},{"prompt":"What does this log?\n\n```js\nconst key = \"x\";\nconst a = { key: 5, [key]: 8 };\nconsole.log(a.key, a.x);\n```","options":["`8`","`5 undefined`","`5 8`","`undefined`"],"answer":2,"explanation":"It logs `5 8`."}]
---
# Predict the Output: Objects and references #21

Objects are passed by reference: `const b = a` doesn't copy. Spread (`{ ...a }`) makes a shallow copy, and later keys win.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
