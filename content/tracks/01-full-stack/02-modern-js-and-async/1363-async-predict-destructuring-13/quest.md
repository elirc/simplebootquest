---
slug: "async-predict-destructuring-13"
title: "Predict the Output: Destructuring and defaults #13"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst [p, , q = 5] = [6, 3];\nconsole.log(p, q);\n```","options":["`TypeError`","`6 5`","`undefined undefined`","`0 3`"],"answer":1,"explanation":"It logs `6 5`."},{"prompt":"What does this log?\n\n```js\nconst { x = 2, y = 1 } = { x: null };\nconsole.log(x, y);\n```","options":["`undefined undefined`","`2 1`","`TypeError`","`null 1`"],"answer":3,"explanation":"It logs `null 1`."},{"prompt":"What does this log?\n\n```js\nconst { x = 6, y = 2 } = { x: null };\nconsole.log(x, y);\n```","options":["`TypeError`","`null 2`","`6 2`","`undefined undefined`"],"answer":1,"explanation":"It logs `null 2`."},{"prompt":"What does this log?\n\n```js\nconst { x = 4, y = 8 } = { x: null };\nconsole.log(x, y);\n```","options":["`4 8`","`undefined undefined`","`null 8`","`TypeError`"],"answer":2,"explanation":"It logs `null 8`."},{"prompt":"What does this log?\n\n```js\nconst [first, ...rest] = [5, 4, 4];\nconsole.log(first, rest);\n```","options":["`TypeError`","`undefined undefined`","`0 [ 5, 4, 4 ]`","`5 [ 4, 4 ]`"],"answer":3,"explanation":"It logs `5 [ 4, 4 ]`."}]
---
# Predict the Output: Destructuring and defaults #13

Defaults in destructuring apply only when the value is `undefined`, not when it's `null` or `0`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
