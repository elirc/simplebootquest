---
slug: "async-predict-destructuring-15"
title: "Predict the Output: Destructuring and defaults #15"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst { x = 7, y = 6 } = { x: 0, y: undefined };\nconsole.log(x, y);\n```","options":["`0 6`","`TypeError`","`undefined undefined`","`7 6`"],"answer":0,"explanation":"It logs `0 6`."},{"prompt":"What does this log?\n\n```js\nconst { x = 5, y = 7 } = { x: null };\nconsole.log(x, y);\n```","options":["`5 7`","`null 7`","`undefined undefined`","`TypeError`"],"answer":1,"explanation":"It logs `null 7`."},{"prompt":"What does this log?\n\n```js\nconst [p, , q = 8] = [6, 3];\nconsole.log(p, q);\n```","options":["`0 3`","`TypeError`","`6 8`","`undefined undefined`"],"answer":2,"explanation":"It logs `6 8`."},{"prompt":"What does this log?\n\n```js\nconst [p, , q = 6] = [6, 3];\nconsole.log(p, q);\n```","options":["`undefined undefined`","`0 3`","`6 0`","`6 6`"],"answer":3,"explanation":"It logs `6 6`."},{"prompt":"What does this log?\n\n```js\nconst { x = 3, y = 4 } = { x: 0, y: undefined };\nconsole.log(x, y);\n```","options":["`0 4`","`undefined undefined`","`TypeError`","`3 4`"],"answer":0,"explanation":"It logs `0 4`."}]
---
# Predict the Output: Destructuring and defaults #15

Defaults in destructuring apply only when the value is `undefined`, not when it's `null` or `0`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
