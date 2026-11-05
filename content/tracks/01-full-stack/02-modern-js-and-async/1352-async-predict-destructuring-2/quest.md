---
slug: "async-predict-destructuring-2"
title: "Predict the Output: Destructuring and defaults #2"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst { x = 9, y = 3 } = { x: null };\nconsole.log(x, y);\n```","options":["`TypeError`","`undefined undefined`","`9 3`","`null 3`"],"answer":3,"explanation":"It logs `null 3`."},{"prompt":"What does this log?\n\n```js\nconst { x = 7, y = 8 } = { x: 0, y: undefined };\nconsole.log(x, y);\n```","options":["`0 8`","`7 8`","`undefined undefined`","`TypeError`"],"answer":0,"explanation":"It logs `0 8`."},{"prompt":"What does this log?\n\n```js\nconst [first, ...rest] = [4, 7, 3];\nconsole.log(first, rest);\n```","options":["`TypeError`","`4 [ 7, 3 ]`","`0 [ 4, 7, 3 ]`","`undefined undefined`"],"answer":1,"explanation":"It logs `4 [ 7, 3 ]`."},{"prompt":"What does this log?\n\n```js\nconst { x = 7, y = 8 } = { x: null };\nconsole.log(x, y);\n```","options":["`undefined undefined`","`null 8`","`TypeError`","`7 8`"],"answer":1,"explanation":"It logs `null 8`."},{"prompt":"What does this log?\n\n```js\nconst { x = 6, y = 5 } = { x: 0, y: undefined };\nconsole.log(x, y);\n```","options":["`0 5`","`6 5`","`undefined undefined`","`TypeError`"],"answer":0,"explanation":"It logs `0 5`."}]
---
# Predict the Output: Destructuring and defaults #2

Defaults in destructuring apply only when the value is `undefined`, not when it's `null` or `0`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
