---
slug: "js-predict-array-methods-10"
title: "Predict the Output: Array methods #10"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst xs = [5, 7, 11, 12, 4];\nconsole.log(xs.filter((x, i) => i % 2 === 0));\n```","options":["`[ 5, 11, 4 ]`","`[ 4, 11, 5 ]`","`SyntaxError`","`[ true, false, true, false, true ]`"],"answer":0,"explanation":"It logs `[ 5, 11, 4 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [6, 9, 1, 4, 11];\nconsole.log(xs.find((x) => x > 6));\n```","options":["`9`","`SyntaxError`","`11`","`[ 9, 11 ]`"],"answer":0,"explanation":"It logs `9`."},{"prompt":"What does this log?\n\n```js\nconst xs = [4, 6, 6, 6, 12];\nconsole.log(xs.filter((x, i) => i % 2 === 0));\n```","options":["`[ 12, 6, 4 ]`","`SyntaxError`","`[ 4, 6, 12 ]`","`[ true, false, true, false, true ]`"],"answer":2,"explanation":"It logs `[ 4, 6, 12 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [10, 8, 9, 5, 10];\nconsole.log(xs.filter((x, i) => i % 2 === 0));\n```","options":["`[ 10, 9, 10 ]`","`TypeError`","`[ true, false, true, false, true ]`","`SyntaxError`"],"answer":0,"explanation":"It logs `[ 10, 9, 10 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [9, 2, 7, 12, 6];\nconsole.log(xs.filter((x) => x % 2 === 0));\n```","options":["`SyntaxError`","`[ 2, 12, 6 ]`","`[ 6, 12, 2 ]`","`[ false, true, false, true, true ]`"],"answer":1,"explanation":"It logs `[ 2, 12, 6 ]`."}]
---
# Predict the Output: Array methods #10

`map` transforms every item, `filter` keeps some, `reduce` folds them into one value, `find` returns the first match (or `undefined`).

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
