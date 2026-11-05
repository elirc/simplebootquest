---
slug: "async-predict-destructuring-5"
title: "Predict the Output: Destructuring and defaults #5"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst { x = 5, y = 8 } = { x: 0, y: undefined };\nconsole.log(x, y);\n```","options":["`5 8`","`TypeError`","`0 8`","`undefined undefined`"],"answer":2,"explanation":"It logs `0 8`."},{"prompt":"What does this log?\n\n```js\nconst { x = 8, y = 2 } = { x: 0, y: undefined };\nconsole.log(x, y);\n```","options":["`8 2`","`0 2`","`TypeError`","`undefined undefined`"],"answer":1,"explanation":"It logs `0 2`."},{"prompt":"What does this log?\n\n```js\nconst { x = 3, y = 3 } = { x: null };\nconsole.log(x, y);\n```","options":["`TypeError`","`null 3`","`undefined undefined`","`3 3`"],"answer":1,"explanation":"It logs `null 3`."},{"prompt":"What does this log?\n\n```js\nconst [first, ...rest] = [5, 7, 3];\nconsole.log(first, rest);\n```","options":["`undefined undefined`","`TypeError`","`5 [ 7, 3 ]`","`0 [ 5, 7, 3 ]`"],"answer":2,"explanation":"It logs `5 [ 7, 3 ]`."},{"prompt":"What does this log?\n\n```js\nconst [p, , q = 3] = [4, 8];\nconsole.log(p, q);\n```","options":["`undefined undefined`","`0 8`","`TypeError`","`4 3`"],"answer":3,"explanation":"It logs `4 3`."}]
---
# Predict the Output: Destructuring and defaults #5

Defaults in destructuring apply only when the value is `undefined`, not when it's `null` or `0`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
