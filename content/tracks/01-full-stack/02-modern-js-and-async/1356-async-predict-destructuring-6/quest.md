---
slug: "async-predict-destructuring-6"
title: "Predict the Output: Destructuring and defaults #6"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst { x = 3, y = 6 } = { x: null };\nconsole.log(x, y);\n```","options":["`TypeError`","`undefined undefined`","`3 6`","`null 6`"],"answer":3,"explanation":"It logs `null 6`."},{"prompt":"What does this log?\n\n```js\nconst [first, ...rest] = [9, 7, 4];\nconsole.log(first, rest);\n```","options":["`undefined undefined`","`9 [ 7, 4 ]`","`0 [ 9, 7, 4 ]`","`TypeError`"],"answer":1,"explanation":"It logs `9 [ 7, 4 ]`."},{"prompt":"What does this log?\n\n```js\nconst [first, ...rest] = [7, 6, 3];\nconsole.log(first, rest);\n```","options":["`7 [ 6, 3 ]`","`0 [ 7, 6, 3 ]`","`undefined undefined`","`TypeError`"],"answer":0,"explanation":"It logs `7 [ 6, 3 ]`."},{"prompt":"What does this log?\n\n```js\nconst { x = 4, y = 4 } = { x: 0, y: undefined };\nconsole.log(x, y);\n```","options":["`4 4`","`undefined undefined`","`TypeError`","`0 4`"],"answer":3,"explanation":"It logs `0 4`."},{"prompt":"What does this log?\n\n```js\nconst { x = 9, y = 6 } = { x: null };\nconsole.log(x, y);\n```","options":["`9 6`","`undefined undefined`","`TypeError`","`null 6`"],"answer":3,"explanation":"It logs `null 6`."}]
---
# Predict the Output: Destructuring and defaults #6

Defaults in destructuring apply only when the value is `undefined`, not when it's `null` or `0`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
