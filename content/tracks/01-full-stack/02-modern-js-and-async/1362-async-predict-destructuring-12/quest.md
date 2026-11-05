---
slug: "async-predict-destructuring-12"
title: "Predict the Output: Destructuring and defaults #12"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst [p, , q = 9] = [1, 3];\nconsole.log(p, q);\n```","options":["`1 9`","`0 3`","`undefined undefined`","`TypeError`"],"answer":0,"explanation":"It logs `1 9`."},{"prompt":"What does this log?\n\n```js\nconst [first, ...rest] = [5, 1, 1];\nconsole.log(first, rest);\n```","options":["`5 [ 1, 1 ]`","`undefined undefined`","`0 [ 5, 1, 1 ]`","`TypeError`"],"answer":0,"explanation":"It logs `5 [ 1, 1 ]`."},{"prompt":"What does this log?\n\n```js\nconst [p, , q = 9] = [5, 3];\nconsole.log(p, q);\n```","options":["`TypeError`","`undefined undefined`","`0 3`","`5 9`"],"answer":3,"explanation":"It logs `5 9`."},{"prompt":"What does this log?\n\n```js\nconst [first, ...rest] = [1, 3, 9];\nconsole.log(first, rest);\n```","options":["`1 [ 3, 9 ]`","`TypeError`","`undefined undefined`","`0 [ 1, 3, 9 ]`"],"answer":0,"explanation":"It logs `1 [ 3, 9 ]`."},{"prompt":"What does this log?\n\n```js\nconst [first, ...rest] = [4, 4, 8];\nconsole.log(first, rest);\n```","options":["`4 [ 4, 8 ]`","`0 [ 4, 4, 8 ]`","`TypeError`","`undefined undefined`"],"answer":0,"explanation":"It logs `4 [ 4, 8 ]`."}]
---
# Predict the Output: Destructuring and defaults #12

Defaults in destructuring apply only when the value is `undefined`, not when it's `null` or `0`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
