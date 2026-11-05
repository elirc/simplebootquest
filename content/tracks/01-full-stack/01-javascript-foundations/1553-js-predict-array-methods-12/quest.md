---
slug: "js-predict-array-methods-12"
title: "Predict the Output: Array methods #12"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst xs = [4, 3, 4, 7, 11];\nconsole.log(xs.findIndex((x) => x > 6));\n```","options":["`TypeError`","`3`","`SyntaxError`","`0`"],"answer":1,"explanation":"It logs `3`."},{"prompt":"What does this log?\n\n```js\nconst xs = [5, 5, 3, 12, 11];\nconsole.log(xs.map((x) => x * 2));\n```","options":["`SyntaxError`","`[ 22, 24, 6, 10, 10 ]`","`TypeError`","`[ 10, 10, 6, 24, 22 ]`"],"answer":3,"explanation":"It logs `[ 10, 10, 6, 24, 22 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [3, 12, 3, 5, 4];\nconsole.log(xs.find((x) => x > 6));\n```","options":["`TypeError`","`[ 12 ]`","`SyntaxError`","`12`"],"answer":3,"explanation":"It logs `12`."},{"prompt":"What does this log?\n\n```js\nconst xs = [6, 6, 6, 10, 12];\nconsole.log(xs.filter((x) => x % 2 === 0));\n```","options":["`[ 6, 6, 6, 10, 12 ]`","`[ true, true, true, true, true ]`","`SyntaxError`","`[ 12, 10, 6, 6, 6 ]`"],"answer":0,"explanation":"It logs `[ 6, 6, 6, 10, 12 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [1, 7, 5, 9, 8];\nconsole.log(xs.slice(1, 4));\n```","options":["`[ 1, 7, 5, 9 ]`","`TypeError`","`[ 9, 5, 7 ]`","`[ 7, 5, 9 ]`"],"answer":3,"explanation":"It logs `[ 7, 5, 9 ]`."}]
---
# Predict the Output: Array methods #12

`map` transforms every item, `filter` keeps some, `reduce` folds them into one value, `find` returns the first match (or `undefined`).

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
