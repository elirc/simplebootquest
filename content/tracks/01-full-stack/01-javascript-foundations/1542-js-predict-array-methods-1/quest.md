---
slug: "js-predict-array-methods-1"
title: "Predict the Output: Array methods #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst xs = [9, 10, 9, 1, 9];\nconsole.log(xs.map((x) => x * 4));\n```","options":["`TypeError`","`[ 36, 40, 36, 4, 36 ]`","`[ 36, 4, 36, 40, 36 ]`","`SyntaxError`"],"answer":1,"explanation":"It logs `[ 36, 40, 36, 4, 36 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [6, 1, 5, 9, 12];\nconsole.log(xs.map((x, i) => x + i));\n```","options":["`[ 12, 10, 7, 4, 10 ]`","`[ 6, 2, 7, 12, 16 ]`","`SyntaxError`","`TypeError`"],"answer":1,"explanation":"It logs `[ 6, 2, 7, 12, 16 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [1, 12, 1, 3, 8];\nconsole.log(xs.map((x, i) => x + i));\n```","options":["`TypeError`","`SyntaxError`","`[ 8, 4, 3, 15, 5 ]`","`[ 1, 13, 3, 6, 12 ]`"],"answer":3,"explanation":"It logs `[ 1, 13, 3, 6, 12 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [2, 10, 12, 5, 7];\nconsole.log(xs.filter((x, i) => i % 2 === 0));\n```","options":["`[ 7, 12, 2 ]`","`SyntaxError`","`[ 2, 12, 7 ]`","`[ true, false, true, false, true ]`"],"answer":2,"explanation":"It logs `[ 2, 12, 7 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [5, 6, 7, 3, 7];\nconsole.log(xs.map((x) => x * 4));\n```","options":["`[ 20, 24, 28, 12, 28 ]`","`[ 28, 12, 28, 24, 20 ]`","`SyntaxError`","`TypeError`"],"answer":0,"explanation":"It logs `[ 20, 24, 28, 12, 28 ]`."}]
---
# Predict the Output: Array methods #1

`map` transforms every item, `filter` keeps some, `reduce` folds them into one value, `find` returns the first match (or `undefined`).

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
