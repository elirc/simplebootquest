---
slug: "js-predict-array-methods-6"
title: "Predict the Output: Array methods #6"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst xs = [10, 3, 2, 6, 3];\nconsole.log(xs.filter((x, i) => i % 2 === 0));\n```","options":["`[ 10, 2, 3 ]`","`SyntaxError`","`[ 3, 2, 10 ]`","`[ true, false, true, false, true ]`"],"answer":0,"explanation":"It logs `[ 10, 2, 3 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [5, 2, 9, 9, 1];\nconsole.log(xs.map((x) => x * 3));\n```","options":["`TypeError`","`[ 15, 6, 27, 27, 3 ]`","`[ 3, 27, 27, 6, 15 ]`","`SyntaxError`"],"answer":1,"explanation":"It logs `[ 15, 6, 27, 27, 3 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [10, 5, 10, 2, 12];\nconsole.log(xs.map((x, i) => x + i));\n```","options":["`[ 10, 6, 12, 5, 16 ]`","`SyntaxError`","`[ 12, 3, 12, 8, 14 ]`","`TypeError`"],"answer":0,"explanation":"It logs `[ 10, 6, 12, 5, 16 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [9, 1, 1, 9, 1];\nconsole.log(xs.findIndex((x) => x > 6));\n```","options":["`1`","`SyntaxError`","`TypeError`","`0`"],"answer":3,"explanation":"It logs `0`."},{"prompt":"What does this log?\n\n```js\nconst xs = [3, 7, 4, 1, 8];\nconsole.log(xs.slice(1, 2));\n```","options":["`TypeError`","`[ 3, 7 ]`","`[ 1 ]`","`[ 7 ]`"],"answer":3,"explanation":"It logs `[ 7 ]`."}]
---
# Predict the Output: Array methods #6

`map` transforms every item, `filter` keeps some, `reduce` folds them into one value, `find` returns the first match (or `undefined`).

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
