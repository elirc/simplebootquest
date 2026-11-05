---
slug: "async-predict-destructuring-9"
title: "Predict the Output: Destructuring and defaults #9"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst { x = 9, y = 2 } = { x: 0, y: undefined };\nconsole.log(x, y);\n```","options":["`9 2`","`undefined undefined`","`0 2`","`TypeError`"],"answer":2,"explanation":"It logs `0 2`."},{"prompt":"What does this log?\n\n```js\nconst [p, , q = 4] = [1, 9];\nconsole.log(p, q);\n```","options":["`0 9`","`1 4`","`undefined undefined`","`TypeError`"],"answer":1,"explanation":"It logs `1 4`."},{"prompt":"What does this log?\n\n```js\nconst [p, , q = 7] = [1, 6];\nconsole.log(p, q);\n```","options":["`1 7`","`TypeError`","`undefined undefined`","`0 6`"],"answer":0,"explanation":"It logs `1 7`."},{"prompt":"What does this log?\n\n```js\nconst { x = 6, y = 1 } = { x: 0, y: undefined };\nconsole.log(x, y);\n```","options":["`6 1`","`0 1`","`TypeError`","`undefined undefined`"],"answer":1,"explanation":"It logs `0 1`."},{"prompt":"What does this log?\n\n```js\nconst [first, ...rest] = [1, 1, 3];\nconsole.log(first, rest);\n```","options":["`TypeError`","`1 [ 1, 3 ]`","`0 [ 1, 1, 3 ]`","`undefined undefined`"],"answer":1,"explanation":"It logs `1 [ 1, 3 ]`."}]
---
# Predict the Output: Destructuring and defaults #9

Defaults in destructuring apply only when the value is `undefined`, not when it's `null` or `0`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
