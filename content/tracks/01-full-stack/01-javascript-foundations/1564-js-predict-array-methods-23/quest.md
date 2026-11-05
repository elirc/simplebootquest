---
slug: "js-predict-array-methods-23"
title: "Predict the Output: Array methods #23"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst xs = [2, 9, 12, 4, 11];\nconsole.log(xs.filter((x, i) => i % 2 === 0));\n```","options":["`[ true, false, true, false, true ]`","`[ 2, 12, 11 ]`","`SyntaxError`","`[ 11, 12, 2 ]`"],"answer":1,"explanation":"It logs `[ 2, 12, 11 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [4, 9, 11, 1, 2];\nconsole.log(xs.findIndex((x) => x > 4));\n```","options":["`1`","`2`","`SyntaxError`","`TypeError`"],"answer":0,"explanation":"It logs `1`."},{"prompt":"What does this log?\n\n```js\nconst xs = [3, 2, 10, 1, 6];\nconsole.log(xs.filter((x) => x % 2 === 0));\n```","options":["`SyntaxError`","`[ 6, 10, 2 ]`","`[ 2, 10, 6 ]`","`[ false, true, true, false, true ]`"],"answer":2,"explanation":"It logs `[ 2, 10, 6 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [1, 12, 6, 11, 2];\nconsole.log(xs.map((x, i) => x + i));\n```","options":["`SyntaxError`","`[ 2, 12, 8, 15, 5 ]`","`TypeError`","`[ 1, 13, 8, 14, 6 ]`"],"answer":3,"explanation":"It logs `[ 1, 13, 8, 14, 6 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [1, 10, 10, 9, 3];\nconsole.log(xs.filter((x, i) => i % 2 === 0));\n```","options":["`SyntaxError`","`[ 3, 10, 1 ]`","`[ 1, 10, 3 ]`","`[ true, false, true, false, true ]`"],"answer":2,"explanation":"It logs `[ 1, 10, 3 ]`."}]
---
# Predict the Output: Array methods #23

`map` transforms every item, `filter` keeps some, `reduce` folds them into one value, `find` returns the first match (or `undefined`).

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
