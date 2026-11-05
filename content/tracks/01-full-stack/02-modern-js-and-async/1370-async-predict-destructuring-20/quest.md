---
slug: "async-predict-destructuring-20"
title: "Predict the Output: Destructuring and defaults #20"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst [p, , q = 6] = [9, 9];\nconsole.log(p, q);\n```","options":["`0 9`","`undefined undefined`","`9 6`","`TypeError`"],"answer":2,"explanation":"It logs `9 6`."},{"prompt":"What does this log?\n\n```js\nconst [first, ...rest] = [3, 2, 5];\nconsole.log(first, rest);\n```","options":["`0 [ 3, 2, 5 ]`","`undefined undefined`","`3 [ 2, 5 ]`","`TypeError`"],"answer":2,"explanation":"It logs `3 [ 2, 5 ]`."},{"prompt":"What does this log?\n\n```js\nconst { x = 5, y = 9 } = { x: 0, y: undefined };\nconsole.log(x, y);\n```","options":["`5 9`","`undefined undefined`","`TypeError`","`0 9`"],"answer":3,"explanation":"It logs `0 9`."},{"prompt":"What does this log?\n\n```js\nconst { x = 6, y = 7 } = { x: null };\nconsole.log(x, y);\n```","options":["`6 7`","`undefined undefined`","`TypeError`","`null 7`"],"answer":3,"explanation":"It logs `null 7`."},{"prompt":"What does this log?\n\n```js\nconst [first, ...rest] = [2, 3, 2];\nconsole.log(first, rest);\n```","options":["`0 [ 2, 3, 2 ]`","`2 [ 3, 2 ]`","`TypeError`","`undefined undefined`"],"answer":1,"explanation":"It logs `2 [ 3, 2 ]`."}]
---
# Predict the Output: Destructuring and defaults #20

Defaults in destructuring apply only when the value is `undefined`, not when it's `null` or `0`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
