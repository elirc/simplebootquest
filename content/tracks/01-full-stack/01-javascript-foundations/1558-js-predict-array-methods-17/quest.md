---
slug: "js-predict-array-methods-17"
title: "Predict the Output: Array methods #17"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst xs = [10, 7, 6, 4, 12];\nconsole.log(xs.filter((x, i) => i % 2 === 0));\n```","options":["`[ 12, 6, 10 ]`","`SyntaxError`","`[ 10, 6, 12 ]`","`[ true, false, true, false, true ]`"],"answer":2,"explanation":"It logs `[ 10, 6, 12 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [10, 6, 4, 9, 6];\nconsole.log(xs.filter((x) => x % 2 === 0));\n```","options":["`[ true, true, true, false, true ]`","`[ 6, 4, 6, 10 ]`","`[ 10, 6, 4, 6 ]`","`SyntaxError`"],"answer":2,"explanation":"It logs `[ 10, 6, 4, 6 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [8, 6, 7, 9, 3];\nconsole.log(xs.map((x, i) => x + i));\n```","options":["`[ 3, 10, 9, 9, 12 ]`","`TypeError`","`SyntaxError`","`[ 8, 7, 9, 12, 7 ]`"],"answer":3,"explanation":"It logs `[ 8, 7, 9, 12, 7 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [11, 12, 12, 2, 4];\nconsole.log(xs.findIndex((x) => x > 8));\n```","options":["`TypeError`","`0`","`2`","`SyntaxError`"],"answer":1,"explanation":"It logs `0`."},{"prompt":"What does this log?\n\n```js\nconst xs = [1, 11, 1, 7, 3];\nconsole.log(xs.map((x) => x * 2));\n```","options":["`[ 2, 22, 2, 14, 6 ]`","`[ 6, 14, 2, 22, 2 ]`","`TypeError`","`SyntaxError`"],"answer":0,"explanation":"It logs `[ 2, 22, 2, 14, 6 ]`."}]
---
# Predict the Output: Array methods #17

`map` transforms every item, `filter` keeps some, `reduce` folds them into one value, `find` returns the first match (or `undefined`).

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
