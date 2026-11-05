---
slug: "async-predict-destructuring-22"
title: "Predict the Output: Destructuring and defaults #22"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst [p, , q = 6] = [5, 5];\nconsole.log(p, q);\n```","options":["`undefined undefined`","`5 6`","`TypeError`","`0 5`"],"answer":1,"explanation":"It logs `5 6`."},{"prompt":"What does this log?\n\n```js\nconst { x = 1, y = 9 } = { x: 0, y: undefined };\nconsole.log(x, y);\n```","options":["`1 9`","`undefined undefined`","`0 9`","`TypeError`"],"answer":2,"explanation":"It logs `0 9`."},{"prompt":"What does this log?\n\n```js\nconst [first, ...rest] = [3, 4, 1];\nconsole.log(first, rest);\n```","options":["`0 [ 3, 4, 1 ]`","`TypeError`","`undefined undefined`","`3 [ 4, 1 ]`"],"answer":3,"explanation":"It logs `3 [ 4, 1 ]`."},{"prompt":"What does this log?\n\n```js\nconst { x = 1, y = 2 } = { x: null };\nconsole.log(x, y);\n```","options":["`TypeError`","`null 2`","`undefined undefined`","`1 2`"],"answer":1,"explanation":"It logs `null 2`."},{"prompt":"What does this log?\n\n```js\nconst [first, ...rest] = [5, 4, 7];\nconsole.log(first, rest);\n```","options":["`0 [ 5, 4, 7 ]`","`5 [ 4, 7 ]`","`TypeError`","`undefined undefined`"],"answer":1,"explanation":"It logs `5 [ 4, 7 ]`."}]
---
# Predict the Output: Destructuring and defaults #22

Defaults in destructuring apply only when the value is `undefined`, not when it's `null` or `0`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
