---
slug: "async-predict-destructuring-1"
title: "Predict the Output: Destructuring and defaults #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst { x = 6, y = 4 } = { x: 0, y: undefined };\nconsole.log(x, y);\n```","options":["`0 4`","`TypeError`","`undefined undefined`","`6 4`"],"answer":0,"explanation":"It logs `0 4`."},{"prompt":"What does this log?\n\n```js\nconst [p, , q = 6] = [1, 7];\nconsole.log(p, q);\n```","options":["`undefined undefined`","`0 7`","`1 6`","`TypeError`"],"answer":2,"explanation":"It logs `1 6`."},{"prompt":"What does this log?\n\n```js\nconst [p, , q = 7] = [1, 2];\nconsole.log(p, q);\n```","options":["`0 2`","`1 7`","`undefined undefined`","`TypeError`"],"answer":1,"explanation":"It logs `1 7`."},{"prompt":"What does this log?\n\n```js\nconst [p, , q = 5] = [6, 8];\nconsole.log(p, q);\n```","options":["`TypeError`","`0 8`","`6 5`","`undefined undefined`"],"answer":2,"explanation":"It logs `6 5`."},{"prompt":"What does this log?\n\n```js\nconst [first, ...rest] = [2, 7, 4];\nconsole.log(first, rest);\n```","options":["`2 [ 7, 4 ]`","`undefined undefined`","`0 [ 2, 7, 4 ]`","`TypeError`"],"answer":0,"explanation":"It logs `2 [ 7, 4 ]`."}]
---
# Predict the Output: Destructuring and defaults #1

Defaults in destructuring apply only when the value is `undefined`, not when it's `null` or `0`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
