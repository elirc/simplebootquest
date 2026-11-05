---
slug: "async-predict-destructuring-18"
title: "Predict the Output: Destructuring and defaults #18"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst [p, , q = 8] = [2, 2];\nconsole.log(p, q);\n```","options":["`2 8`","`TypeError`","`undefined undefined`","`0 2`"],"answer":0,"explanation":"It logs `2 8`."},{"prompt":"What does this log?\n\n```js\nconst { x = 6, y = 6 } = { x: 0, y: undefined };\nconsole.log(x, y);\n```","options":["`TypeError`","`undefined undefined`","`6 6`","`0 6`"],"answer":3,"explanation":"It logs `0 6`."},{"prompt":"What does this log?\n\n```js\nconst { x = 7, y = 7 } = { x: null };\nconsole.log(x, y);\n```","options":["`null 7`","`7 7`","`undefined undefined`","`TypeError`"],"answer":0,"explanation":"It logs `null 7`."},{"prompt":"What does this log?\n\n```js\nconst [p, , q = 5] = [3, 7];\nconsole.log(p, q);\n```","options":["`3 5`","`undefined undefined`","`0 7`","`TypeError`"],"answer":0,"explanation":"It logs `3 5`."},{"prompt":"What does this log?\n\n```js\nconst [p, , q = 7] = [5, 1];\nconsole.log(p, q);\n```","options":["`5 7`","`0 1`","`TypeError`","`undefined undefined`"],"answer":0,"explanation":"It logs `5 7`."}]
---
# Predict the Output: Destructuring and defaults #18

Defaults in destructuring apply only when the value is `undefined`, not when it's `null` or `0`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
