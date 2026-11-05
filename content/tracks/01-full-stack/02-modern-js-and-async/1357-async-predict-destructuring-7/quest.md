---
slug: "async-predict-destructuring-7"
title: "Predict the Output: Destructuring and defaults #7"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst { x = 2, y = 7 } = { x: 0, y: undefined };\nconsole.log(x, y);\n```","options":["`undefined undefined`","`2 7`","`0 7`","`TypeError`"],"answer":2,"explanation":"It logs `0 7`."},{"prompt":"What does this log?\n\n```js\nconst { x = 1, y = 7 } = { x: 0, y: undefined };\nconsole.log(x, y);\n```","options":["`1 7`","`0 7`","`TypeError`","`undefined undefined`"],"answer":1,"explanation":"It logs `0 7`."},{"prompt":"What does this log?\n\n```js\nconst [first, ...rest] = [9, 2, 3];\nconsole.log(first, rest);\n```","options":["`0 [ 9, 2, 3 ]`","`undefined undefined`","`9 [ 2, 3 ]`","`TypeError`"],"answer":2,"explanation":"It logs `9 [ 2, 3 ]`."},{"prompt":"What does this log?\n\n```js\nconst { x = 3, y = 4 } = { x: null };\nconsole.log(x, y);\n```","options":["`3 4`","`TypeError`","`null 4`","`undefined undefined`"],"answer":2,"explanation":"It logs `null 4`."},{"prompt":"What does this log?\n\n```js\nconst { x = 1, y = 8 } = { x: null };\nconsole.log(x, y);\n```","options":["`null 8`","`TypeError`","`1 8`","`undefined undefined`"],"answer":0,"explanation":"It logs `null 8`."}]
---
# Predict the Output: Destructuring and defaults #7

Defaults in destructuring apply only when the value is `undefined`, not when it's `null` or `0`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
