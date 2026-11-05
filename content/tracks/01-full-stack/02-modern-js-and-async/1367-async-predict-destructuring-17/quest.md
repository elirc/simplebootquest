---
slug: "async-predict-destructuring-17"
title: "Predict the Output: Destructuring and defaults #17"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst [p, , q = 6] = [5, 1];\nconsole.log(p, q);\n```","options":["`TypeError`","`0 1`","`5 6`","`undefined undefined`"],"answer":2,"explanation":"It logs `5 6`."},{"prompt":"What does this log?\n\n```js\nconst [first, ...rest] = [4, 1, 2];\nconsole.log(first, rest);\n```","options":["`4 [ 1, 2 ]`","`undefined undefined`","`TypeError`","`0 [ 4, 1, 2 ]`"],"answer":0,"explanation":"It logs `4 [ 1, 2 ]`."},{"prompt":"What does this log?\n\n```js\nconst { x = 8, y = 5 } = { x: 0, y: undefined };\nconsole.log(x, y);\n```","options":["`undefined undefined`","`8 5`","`TypeError`","`0 5`"],"answer":3,"explanation":"It logs `0 5`."},{"prompt":"What does this log?\n\n```js\nconst [p, , q = 7] = [7, 9];\nconsole.log(p, q);\n```","options":["`7 7`","`7 0`","`undefined undefined`","`0 9`"],"answer":0,"explanation":"It logs `7 7`."},{"prompt":"What does this log?\n\n```js\nconst [p, , q = 6] = [4, 2];\nconsole.log(p, q);\n```","options":["`TypeError`","`undefined undefined`","`4 6`","`0 2`"],"answer":2,"explanation":"It logs `4 6`."}]
---
# Predict the Output: Destructuring and defaults #17

Defaults in destructuring apply only when the value is `undefined`, not when it's `null` or `0`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
