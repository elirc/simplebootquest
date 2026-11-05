---
slug: "async-predict-destructuring-3"
title: "Predict the Output: Destructuring and defaults #3"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst [p, , q = 5] = [7, 1];\nconsole.log(p, q);\n```","options":["`7 5`","`TypeError`","`undefined undefined`","`0 1`"],"answer":0,"explanation":"It logs `7 5`."},{"prompt":"What does this log?\n\n```js\nconst [p, , q = 7] = [2, 9];\nconsole.log(p, q);\n```","options":["`0 9`","`undefined undefined`","`2 7`","`TypeError`"],"answer":2,"explanation":"It logs `2 7`."},{"prompt":"What does this log?\n\n```js\nconst { x = 4, y = 1 } = { x: 0, y: undefined };\nconsole.log(x, y);\n```","options":["`4 1`","`0 1`","`undefined undefined`","`TypeError`"],"answer":1,"explanation":"It logs `0 1`."},{"prompt":"What does this log?\n\n```js\nconst { x = 5, y = 3 } = { x: 0, y: undefined };\nconsole.log(x, y);\n```","options":["`undefined undefined`","`TypeError`","`5 3`","`0 3`"],"answer":3,"explanation":"It logs `0 3`."},{"prompt":"What does this log?\n\n```js\nconst [p, , q = 1] = [3, 2];\nconsole.log(p, q);\n```","options":["`3 1`","`0 2`","`TypeError`","`undefined undefined`"],"answer":0,"explanation":"It logs `3 1`."}]
---
# Predict the Output: Destructuring and defaults #3

Defaults in destructuring apply only when the value is `undefined`, not when it's `null` or `0`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
