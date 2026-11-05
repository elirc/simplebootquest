---
slug: "js-predict-array-methods-15"
title: "Predict the Output: Array methods #15"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst xs = [3, 4, 9, 11, 12];\nconsole.log(xs.findIndex((x) => x > 8));\n```","options":["`2`","`TypeError`","`0`","`SyntaxError`"],"answer":0,"explanation":"It logs `2`."},{"prompt":"What does this log?\n\n```js\nconst xs = [2, 9, 9, 10, 10];\nconsole.log(xs.filter((x, i) => i % 2 === 0));\n```","options":["`[ 2, 9, 10 ]`","`SyntaxError`","`[ true, false, true, false, true ]`","`[ 10, 9, 2 ]`"],"answer":0,"explanation":"It logs `[ 2, 9, 10 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [11, 2, 3, 12, 3];\nconsole.log(xs.map((x) => x * 3));\n```","options":["`[ 33, 6, 9, 36, 9 ]`","`TypeError`","`[ 9, 36, 9, 6, 33 ]`","`SyntaxError`"],"answer":0,"explanation":"It logs `[ 33, 6, 9, 36, 9 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [3, 9, 8, 9, 5];\nconsole.log(xs.filter((x) => x % 4 === 0));\n```","options":["`[ 8 ]`","`TypeError`","`[ false, false, true, false, false ]`","`SyntaxError`"],"answer":0,"explanation":"It logs `[ 8 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [3, 8, 2, 9, 9];\nconsole.log(xs.filter((x, i) => i % 2 === 0));\n```","options":["`[ true, false, true, false, true ]`","`[ 3, 2, 9 ]`","`[ 9, 2, 3 ]`","`SyntaxError`"],"answer":1,"explanation":"It logs `[ 3, 2, 9 ]`."}]
---
# Predict the Output: Array methods #15

`map` transforms every item, `filter` keeps some, `reduce` folds them into one value, `find` returns the first match (or `undefined`).

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
