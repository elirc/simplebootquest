---
slug: "async-predict-destructuring-19"
title: "Predict the Output: Destructuring and defaults #19"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst [p, , q = 3] = [8, 4];\nconsole.log(p, q);\n```","options":["`0 4`","`undefined undefined`","`8 3`","`TypeError`"],"answer":2,"explanation":"It logs `8 3`."},{"prompt":"What does this log?\n\n```js\nconst { x = 2, y = 2 } = { x: null };\nconsole.log(x, y);\n```","options":["`TypeError`","`null 2`","`2 2`","`undefined undefined`"],"answer":1,"explanation":"It logs `null 2`."},{"prompt":"What does this log?\n\n```js\nconst { x = 4, y = 8 } = { x: 0, y: undefined };\nconsole.log(x, y);\n```","options":["`4 8`","`undefined undefined`","`0 8`","`TypeError`"],"answer":2,"explanation":"It logs `0 8`."},{"prompt":"What does this log?\n\n```js\nconst [first, ...rest] = [5, 2, 2];\nconsole.log(first, rest);\n```","options":["`0 [ 5, 2, 2 ]`","`TypeError`","`5 [ 2, 2 ]`","`undefined undefined`"],"answer":2,"explanation":"It logs `5 [ 2, 2 ]`."},{"prompt":"What does this log?\n\n```js\nconst { x = 5, y = 3 } = { x: null };\nconsole.log(x, y);\n```","options":["`TypeError`","`undefined undefined`","`null 3`","`5 3`"],"answer":2,"explanation":"It logs `null 3`."}]
---
# Predict the Output: Destructuring and defaults #19

Defaults in destructuring apply only when the value is `undefined`, not when it's `null` or `0`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
