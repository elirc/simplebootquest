---
slug: "js-predict-array-methods-19"
title: "Predict the Output: Array methods #19"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst xs = [11, 10, 12, 7, 5];\nconsole.log(xs.map((x) => x * 2));\n```","options":["`TypeError`","`[ 22, 20, 24, 14, 10 ]`","`SyntaxError`","`[ 10, 14, 24, 20, 22 ]`"],"answer":1,"explanation":"It logs `[ 22, 20, 24, 14, 10 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [9, 1, 1, 10, 3];\nconsole.log(xs.findIndex((x) => x > 8));\n```","options":["`TypeError`","`1`","`0`","`SyntaxError`"],"answer":2,"explanation":"It logs `0`."},{"prompt":"What does this log?\n\n```js\nconst xs = [6, 3, 7, 1, 6];\nconsole.log(xs.map((x) => x * 3));\n```","options":["`TypeError`","`SyntaxError`","`[ 18, 9, 21, 3, 18 ]`","`[ 18, 3, 21, 9, 18 ]`"],"answer":2,"explanation":"It logs `[ 18, 9, 21, 3, 18 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [11, 10, 5, 11, 7];\nconsole.log(xs.map((x) => x * 3));\n```","options":["`[ 33, 30, 15, 33, 21 ]`","`SyntaxError`","`TypeError`","`[ 21, 33, 15, 30, 33 ]`"],"answer":0,"explanation":"It logs `[ 33, 30, 15, 33, 21 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [5, 5, 3, 8, 11];\nconsole.log(xs.filter((x) => x % 4 === 0));\n```","options":["`[ false, false, false, true, false ]`","`SyntaxError`","`[ 8 ]`","`TypeError`"],"answer":2,"explanation":"It logs `[ 8 ]`."}]
---
# Predict the Output: Array methods #19

`map` transforms every item, `filter` keeps some, `reduce` folds them into one value, `find` returns the first match (or `undefined`).

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
