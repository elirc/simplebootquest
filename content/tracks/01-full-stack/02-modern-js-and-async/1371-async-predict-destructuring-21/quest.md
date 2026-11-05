---
slug: "async-predict-destructuring-21"
title: "Predict the Output: Destructuring and defaults #21"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst { x = 2, y = 9 } = { x: null };\nconsole.log(x, y);\n```","options":["`undefined undefined`","`TypeError`","`2 9`","`null 9`"],"answer":3,"explanation":"It logs `null 9`."},{"prompt":"What does this log?\n\n```js\nconst { x = 1, y = 6 } = { x: null };\nconsole.log(x, y);\n```","options":["`null 6`","`1 6`","`TypeError`","`undefined undefined`"],"answer":0,"explanation":"It logs `null 6`."},{"prompt":"What does this log?\n\n```js\nconst [p, , q = 1] = [6, 6];\nconsole.log(p, q);\n```","options":["`6 1`","`undefined undefined`","`0 6`","`TypeError`"],"answer":0,"explanation":"It logs `6 1`."},{"prompt":"What does this log?\n\n```js\nconst [first, ...rest] = [3, 7, 7];\nconsole.log(first, rest);\n```","options":["`0 [ 3, 7, 7 ]`","`3 [ 7, 7 ]`","`undefined undefined`","`TypeError`"],"answer":1,"explanation":"It logs `3 [ 7, 7 ]`."},{"prompt":"What does this log?\n\n```js\nconst [first, ...rest] = [3, 4, 7];\nconsole.log(first, rest);\n```","options":["`3 [ 4, 7 ]`","`0 [ 3, 4, 7 ]`","`TypeError`","`undefined undefined`"],"answer":0,"explanation":"It logs `3 [ 4, 7 ]`."}]
---
# Predict the Output: Destructuring and defaults #21

Defaults in destructuring apply only when the value is `undefined`, not when it's `null` or `0`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
