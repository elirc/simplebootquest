---
slug: "async-predict-destructuring-14"
title: "Predict the Output: Destructuring and defaults #14"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst { x = 8, y = 7 } = { x: 0, y: undefined };\nconsole.log(x, y);\n```","options":["`undefined undefined`","`TypeError`","`8 7`","`0 7`"],"answer":3,"explanation":"It logs `0 7`."},{"prompt":"What does this log?\n\n```js\nconst [first, ...rest] = [8, 3, 3];\nconsole.log(first, rest);\n```","options":["`TypeError`","`0 [ 8, 3, 3 ]`","`8 [ 3, 3 ]`","`undefined undefined`"],"answer":2,"explanation":"It logs `8 [ 3, 3 ]`."},{"prompt":"What does this log?\n\n```js\nconst { x = 9, y = 7 } = { x: null };\nconsole.log(x, y);\n```","options":["`TypeError`","`9 7`","`undefined undefined`","`null 7`"],"answer":3,"explanation":"It logs `null 7`."},{"prompt":"What does this log?\n\n```js\nconst [first, ...rest] = [3, 1, 9];\nconsole.log(first, rest);\n```","options":["`undefined undefined`","`0 [ 3, 1, 9 ]`","`3 [ 1, 9 ]`","`TypeError`"],"answer":2,"explanation":"It logs `3 [ 1, 9 ]`."},{"prompt":"What does this log?\n\n```js\nconst { x = 6, y = 2 } = { x: 0, y: undefined };\nconsole.log(x, y);\n```","options":["`0 2`","`TypeError`","`undefined undefined`","`6 2`"],"answer":0,"explanation":"It logs `0 2`."}]
---
# Predict the Output: Destructuring and defaults #14

Defaults in destructuring apply only when the value is `undefined`, not when it's `null` or `0`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
