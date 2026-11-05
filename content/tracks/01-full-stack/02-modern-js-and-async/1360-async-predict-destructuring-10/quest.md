---
slug: "async-predict-destructuring-10"
title: "Predict the Output: Destructuring and defaults #10"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst [p, , q = 8] = [2, 5];\nconsole.log(p, q);\n```","options":["`undefined undefined`","`2 8`","`TypeError`","`0 5`"],"answer":1,"explanation":"It logs `2 8`."},{"prompt":"What does this log?\n\n```js\nconst [p, , q = 5] = [9, 6];\nconsole.log(p, q);\n```","options":["`TypeError`","`undefined undefined`","`0 6`","`9 5`"],"answer":3,"explanation":"It logs `9 5`."},{"prompt":"What does this log?\n\n```js\nconst [p, , q = 2] = [8, 7];\nconsole.log(p, q);\n```","options":["`8 2`","`TypeError`","`0 7`","`undefined undefined`"],"answer":0,"explanation":"It logs `8 2`."},{"prompt":"What does this log?\n\n```js\nconst { x = 3, y = 2 } = { x: 0, y: undefined };\nconsole.log(x, y);\n```","options":["`undefined undefined`","`3 2`","`TypeError`","`0 2`"],"answer":3,"explanation":"It logs `0 2`."},{"prompt":"What does this log?\n\n```js\nconst [first, ...rest] = [7, 5, 7];\nconsole.log(first, rest);\n```","options":["`7 [ 5, 7 ]`","`TypeError`","`undefined undefined`","`0 [ 7, 5, 7 ]`"],"answer":0,"explanation":"It logs `7 [ 5, 7 ]`."}]
---
# Predict the Output: Destructuring and defaults #10

Defaults in destructuring apply only when the value is `undefined`, not when it's `null` or `0`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
