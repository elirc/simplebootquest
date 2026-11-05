---
slug: "js-predict-array-methods-3"
title: "Predict the Output: Array methods #3"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst xs = [7, 2, 6, 7, 11];\nconsole.log(xs.map((x) => x * 3));\n```","options":["`[ 33, 21, 18, 6, 21 ]`","`[ 21, 6, 18, 21, 33 ]`","`TypeError`","`SyntaxError`"],"answer":1,"explanation":"It logs `[ 21, 6, 18, 21, 33 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [3, 12, 8, 12, 3];\nconsole.log(xs.find((x) => x > 8));\n```","options":["`12`","`SyntaxError`","`[ 12, 12 ]`","`TypeError`"],"answer":0,"explanation":"It logs `12`."},{"prompt":"What does this log?\n\n```js\nconst xs = [9, 10, 9, 7, 3];\nconsole.log(xs.filter((x) => x % 4 === 0));\n```","options":["`[ false, false, false, false, false ]`","`TypeError`","`[  ]`","`SyntaxError`"],"answer":2,"explanation":"It logs `[  ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [3, 8, 10, 6, 8];\nconsole.log(xs.findIndex((x) => x > 4));\n```","options":["`TypeError`","`0`","`SyntaxError`","`1`"],"answer":3,"explanation":"It logs `1`."},{"prompt":"What does this log?\n\n```js\nconst xs = [7, 8, 10, 5, 9];\nconsole.log(xs.map((x, i) => x + i));\n```","options":["`SyntaxError`","`[ 7, 9, 12, 8, 13 ]`","`TypeError`","`[ 9, 6, 12, 11, 11 ]`"],"answer":1,"explanation":"It logs `[ 7, 9, 12, 8, 13 ]`."}]
---
# Predict the Output: Array methods #3

`map` transforms every item, `filter` keeps some, `reduce` folds them into one value, `find` returns the first match (or `undefined`).

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
