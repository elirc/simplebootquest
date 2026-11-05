---
slug: "js-predict-array-methods-2"
title: "Predict the Output: Array methods #2"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst xs = [8, 9, 10, 2, 4];\nconsole.log(xs.filter((x, i) => i % 2 === 0));\n```","options":["`[ 4, 10, 8 ]`","`[ 8, 10, 4 ]`","`[ true, false, true, false, true ]`","`SyntaxError`"],"answer":1,"explanation":"It logs `[ 8, 10, 4 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [5, 9, 8, 6, 9];\nconsole.log(xs.map((x, i) => x + i));\n```","options":["`SyntaxError`","`TypeError`","`[ 9, 7, 10, 12, 9 ]`","`[ 5, 10, 10, 9, 13 ]`"],"answer":3,"explanation":"It logs `[ 5, 10, 10, 9, 13 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [12, 2, 2, 7, 11];\nconsole.log(xs.slice(1, 2));\n```","options":["`[ 2 ]`","`[ 12, 2 ]`","`TypeError`","`[ 7 ]`"],"answer":0,"explanation":"It logs `[ 2 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [7, 3, 6, 3, 9];\nconsole.log(xs.map((x, i) => x + i));\n```","options":["`TypeError`","`[ 9, 4, 8, 6, 11 ]`","`SyntaxError`","`[ 7, 4, 8, 6, 13 ]`"],"answer":3,"explanation":"It logs `[ 7, 4, 8, 6, 13 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [3, 12, 5, 12, 11];\nconsole.log(xs.findIndex((x) => x > 4));\n```","options":["`0`","`TypeError`","`SyntaxError`","`1`"],"answer":3,"explanation":"It logs `1`."}]
---
# Predict the Output: Array methods #2

`map` transforms every item, `filter` keeps some, `reduce` folds them into one value, `find` returns the first match (or `undefined`).

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
