---
slug: "async-predict-destructuring-4"
title: "Predict the Output: Destructuring and defaults #4"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst { x = 9, y = 9 } = { x: 0, y: undefined };\nconsole.log(x, y);\n```","options":["`9 9`","`undefined undefined`","`TypeError`","`0 9`"],"answer":3,"explanation":"It logs `0 9`."},{"prompt":"What does this log?\n\n```js\nconst [p, , q = 3] = [7, 4];\nconsole.log(p, q);\n```","options":["`TypeError`","`7 3`","`0 4`","`undefined undefined`"],"answer":1,"explanation":"It logs `7 3`."},{"prompt":"What does this log?\n\n```js\nconst [p, , q = 8] = [3, 3];\nconsole.log(p, q);\n```","options":["`3 8`","`TypeError`","`undefined undefined`","`0 3`"],"answer":0,"explanation":"It logs `3 8`."},{"prompt":"What does this log?\n\n```js\nconst [first, ...rest] = [6, 8, 4];\nconsole.log(first, rest);\n```","options":["`TypeError`","`6 [ 8, 4 ]`","`0 [ 6, 8, 4 ]`","`undefined undefined`"],"answer":1,"explanation":"It logs `6 [ 8, 4 ]`."},{"prompt":"What does this log?\n\n```js\nconst [p, , q = 3] = [1, 5];\nconsole.log(p, q);\n```","options":["`undefined undefined`","`1 3`","`0 5`","`TypeError`"],"answer":1,"explanation":"It logs `1 3`."}]
---
# Predict the Output: Destructuring and defaults #4

Defaults in destructuring apply only when the value is `undefined`, not when it's `null` or `0`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
