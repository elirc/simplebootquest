---
slug: "async-predict-destructuring-8"
title: "Predict the Output: Destructuring and defaults #8"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst [first, ...rest] = [6, 5, 1];\nconsole.log(first, rest);\n```","options":["`6 [ 5, 1 ]`","`TypeError`","`undefined undefined`","`0 [ 6, 5, 1 ]`"],"answer":0,"explanation":"It logs `6 [ 5, 1 ]`."},{"prompt":"What does this log?\n\n```js\nconst [p, , q = 7] = [5, 9];\nconsole.log(p, q);\n```","options":["`0 9`","`TypeError`","`5 7`","`undefined undefined`"],"answer":2,"explanation":"It logs `5 7`."},{"prompt":"What does this log?\n\n```js\nconst { x = 1, y = 9 } = { x: null };\nconsole.log(x, y);\n```","options":["`TypeError`","`1 9`","`null 9`","`undefined undefined`"],"answer":2,"explanation":"It logs `null 9`."},{"prompt":"What does this log?\n\n```js\nconst [first, ...rest] = [9, 7, 8];\nconsole.log(first, rest);\n```","options":["`TypeError`","`undefined undefined`","`9 [ 7, 8 ]`","`0 [ 9, 7, 8 ]`"],"answer":2,"explanation":"It logs `9 [ 7, 8 ]`."},{"prompt":"What does this log?\n\n```js\nconst { x = 5, y = 4 } = { x: null };\nconsole.log(x, y);\n```","options":["`5 4`","`TypeError`","`undefined undefined`","`null 4`"],"answer":3,"explanation":"It logs `null 4`."}]
---
# Predict the Output: Destructuring and defaults #8

Defaults in destructuring apply only when the value is `undefined`, not when it's `null` or `0`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
