---
slug: "async-predict-destructuring-11"
title: "Predict the Output: Destructuring and defaults #11"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst [p, , q = 3] = [7, 2];\nconsole.log(p, q);\n```","options":["`0 2`","`undefined undefined`","`TypeError`","`7 3`"],"answer":3,"explanation":"It logs `7 3`."},{"prompt":"What does this log?\n\n```js\nconst [p, , q = 4] = [2, 3];\nconsole.log(p, q);\n```","options":["`undefined undefined`","`0 3`","`2 4`","`TypeError`"],"answer":2,"explanation":"It logs `2 4`."},{"prompt":"What does this log?\n\n```js\nconst { x = 5, y = 1 } = { x: 0, y: undefined };\nconsole.log(x, y);\n```","options":["`TypeError`","`undefined undefined`","`0 1`","`5 1`"],"answer":2,"explanation":"It logs `0 1`."},{"prompt":"What does this log?\n\n```js\nconst { x = 8, y = 8 } = { x: null };\nconsole.log(x, y);\n```","options":["`undefined undefined`","`TypeError`","`8 8`","`null 8`"],"answer":3,"explanation":"It logs `null 8`."},{"prompt":"What does this log?\n\n```js\nconst { x = 7, y = 2 } = { x: null };\nconsole.log(x, y);\n```","options":["`null 2`","`7 2`","`undefined undefined`","`TypeError`"],"answer":0,"explanation":"It logs `null 2`."}]
---
# Predict the Output: Destructuring and defaults #11

Defaults in destructuring apply only when the value is `undefined`, not when it's `null` or `0`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
