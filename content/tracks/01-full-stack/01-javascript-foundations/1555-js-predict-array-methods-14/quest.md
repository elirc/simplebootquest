---
slug: "js-predict-array-methods-14"
title: "Predict the Output: Array methods #14"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst xs = [3, 12, 12, 9, 7];\nconsole.log(xs.findIndex((x) => x > 4));\n```","options":["`SyntaxError`","`0`","`TypeError`","`1`"],"answer":3,"explanation":"It logs `1`."},{"prompt":"What does this log?\n\n```js\nconst xs = [2, 10, 8, 4, 6];\nconsole.log(xs.filter((x, i) => i % 2 === 0));\n```","options":["`[ true, false, true, false, true ]`","`[ 2, 8, 6 ]`","`[ 6, 8, 2 ]`","`SyntaxError`"],"answer":1,"explanation":"It logs `[ 2, 8, 6 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [10, 7, 11, 6, 1];\nconsole.log(xs.findIndex((x) => x > 8));\n```","options":["`TypeError`","`SyntaxError`","`2`","`0`"],"answer":3,"explanation":"It logs `0`."},{"prompt":"What does this log?\n\n```js\nconst xs = [1, 11, 9, 10, 1];\nconsole.log(xs.map((x, i) => x + i));\n```","options":["`[ 1, 12, 11, 13, 5 ]`","`[ 1, 11, 11, 14, 5 ]`","`SyntaxError`","`TypeError`"],"answer":0,"explanation":"It logs `[ 1, 12, 11, 13, 5 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [10, 8, 5, 5, 9];\nconsole.log(xs.find((x) => x > 4));\n```","options":["`9`","`[ 10, 8, 5, 5, 9 ]`","`10`","`SyntaxError`"],"answer":2,"explanation":"It logs `10`."}]
---
# Predict the Output: Array methods #14

`map` transforms every item, `filter` keeps some, `reduce` folds them into one value, `find` returns the first match (or `undefined`).

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
