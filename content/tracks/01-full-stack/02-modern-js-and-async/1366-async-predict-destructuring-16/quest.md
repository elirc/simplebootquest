---
slug: "async-predict-destructuring-16"
title: "Predict the Output: Destructuring and defaults #16"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst [first, ...rest] = [3, 7, 1];\nconsole.log(first, rest);\n```","options":["`3 [ 7, 1 ]`","`undefined undefined`","`TypeError`","`0 [ 3, 7, 1 ]`"],"answer":0,"explanation":"It logs `3 [ 7, 1 ]`."},{"prompt":"What does this log?\n\n```js\nconst [first, ...rest] = [6, 1, 6];\nconsole.log(first, rest);\n```","options":["`0 [ 6, 1, 6 ]`","`6 [ 1, 6 ]`","`TypeError`","`undefined undefined`"],"answer":1,"explanation":"It logs `6 [ 1, 6 ]`."},{"prompt":"What does this log?\n\n```js\nconst [first, ...rest] = [3, 6, 4];\nconsole.log(first, rest);\n```","options":["`undefined undefined`","`0 [ 3, 6, 4 ]`","`3 [ 6, 4 ]`","`TypeError`"],"answer":2,"explanation":"It logs `3 [ 6, 4 ]`."},{"prompt":"What does this log?\n\n```js\nconst [first, ...rest] = [2, 1, 3];\nconsole.log(first, rest);\n```","options":["`0 [ 2, 1, 3 ]`","`undefined undefined`","`TypeError`","`2 [ 1, 3 ]`"],"answer":3,"explanation":"It logs `2 [ 1, 3 ]`."},{"prompt":"What does this log?\n\n```js\nconst { x = 3, y = 7 } = { x: 0, y: undefined };\nconsole.log(x, y);\n```","options":["`undefined undefined`","`TypeError`","`0 7`","`3 7`"],"answer":2,"explanation":"It logs `0 7`."}]
---
# Predict the Output: Destructuring and defaults #16

Defaults in destructuring apply only when the value is `undefined`, not when it's `null` or `0`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
