---
slug: "js-predict-array-methods-16"
title: "Predict the Output: Array methods #16"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst xs = [12, 5, 4, 2, 9];\nconsole.log(xs.map((x, i) => x + i));\n```","options":["`[ 12, 6, 6, 5, 13 ]`","`[ 9, 3, 6, 8, 16 ]`","`SyntaxError`","`TypeError`"],"answer":0,"explanation":"It logs `[ 12, 6, 6, 5, 13 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [12, 11, 2, 1, 6];\nconsole.log(xs.filter((x) => x % 4 === 0));\n```","options":["`[ 12 ]`","`[ true, false, false, false, false ]`","`TypeError`","`SyntaxError`"],"answer":0,"explanation":"It logs `[ 12 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [3, 8, 2, 3, 7];\nconsole.log(xs.map((x, i) => x + i));\n```","options":["`[ 3, 9, 4, 6, 11 ]`","`SyntaxError`","`[ 7, 4, 4, 11, 7 ]`","`TypeError`"],"answer":0,"explanation":"It logs `[ 3, 9, 4, 6, 11 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [9, 8, 8, 10, 1];\nconsole.log(xs.slice(1, 3));\n```","options":["`TypeError`","`[ 10, 8 ]`","`[ 8, 8 ]`","`[ 9, 8, 8 ]`"],"answer":2,"explanation":"It logs `[ 8, 8 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [9, 4, 8, 12, 4];\nconsole.log(xs.map((x, i) => x + i));\n```","options":["`TypeError`","`[ 9, 5, 10, 15, 8 ]`","`[ 4, 13, 10, 7, 13 ]`","`SyntaxError`"],"answer":1,"explanation":"It logs `[ 9, 5, 10, 15, 8 ]`."}]
---
# Predict the Output: Array methods #16

`map` transforms every item, `filter` keeps some, `reduce` folds them into one value, `find` returns the first match (or `undefined`).

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
