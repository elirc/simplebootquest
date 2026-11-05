---
slug: "js-predict-array-methods-13"
title: "Predict the Output: Array methods #13"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst xs = [4, 4, 10, 3, 11];\nconsole.log(xs.findIndex((x) => x > 8));\n```","options":["`SyntaxError`","`2`","`TypeError`","`0`"],"answer":1,"explanation":"It logs `2`."},{"prompt":"What does this log?\n\n```js\nconst xs = [4, 9, 4, 7, 11];\nconsole.log(xs.slice(1, 4));\n```","options":["`TypeError`","`[ 9, 4, 7 ]`","`[ 4, 9, 4, 7 ]`","`[ 7, 4, 9 ]`"],"answer":1,"explanation":"It logs `[ 9, 4, 7 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [5, 3, 2, 9, 11];\nconsole.log(xs.find((x) => x > 4));\n```","options":["`SyntaxError`","`5`","`[ 5, 9, 11 ]`","`11`"],"answer":1,"explanation":"It logs `5`."},{"prompt":"What does this log?\n\n```js\nconst xs = [5, 1, 7, 4, 11];\nconsole.log(xs.map((x) => x * 3));\n```","options":["`[ 33, 12, 21, 3, 15 ]`","`TypeError`","`[ 15, 3, 21, 12, 33 ]`","`SyntaxError`"],"answer":2,"explanation":"It logs `[ 15, 3, 21, 12, 33 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [2, 8, 7, 11, 4];\nconsole.log(xs.map((x, i) => x + i));\n```","options":["`[ 4, 12, 9, 11, 6 ]`","`TypeError`","`[ 2, 9, 9, 14, 8 ]`","`SyntaxError`"],"answer":2,"explanation":"It logs `[ 2, 9, 9, 14, 8 ]`."}]
---
# Predict the Output: Array methods #13

`map` transforms every item, `filter` keeps some, `reduce` folds them into one value, `find` returns the first match (or `undefined`).

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
