---
slug: "js-predict-array-methods-5"
title: "Predict the Output: Array methods #5"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst xs = [2, 3, 3, 11, 6];\nconsole.log(xs.map((x, i) => x + i));\n```","options":["`SyntaxError`","`[ 6, 12, 5, 6, 6 ]`","`TypeError`","`[ 2, 4, 5, 14, 10 ]`"],"answer":3,"explanation":"It logs `[ 2, 4, 5, 14, 10 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [3, 7, 6, 8, 12];\nconsole.log(xs.slice(1, 3));\n```","options":["`[ 3, 7, 6 ]`","`[ 7, 6 ]`","`[ 8, 6 ]`","`TypeError`"],"answer":1,"explanation":"It logs `[ 7, 6 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [6, 6, 7, 5, 11];\nconsole.log(xs.map((x, i) => x + i));\n```","options":["`[ 6, 7, 9, 8, 15 ]`","`TypeError`","`[ 11, 6, 9, 9, 10 ]`","`SyntaxError`"],"answer":0,"explanation":"It logs `[ 6, 7, 9, 8, 15 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [6, 5, 11, 3, 3];\nconsole.log(xs.map((x) => x * 3));\n```","options":["`TypeError`","`SyntaxError`","`[ 9, 9, 33, 15, 18 ]`","`[ 18, 15, 33, 9, 9 ]`"],"answer":3,"explanation":"It logs `[ 18, 15, 33, 9, 9 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [10, 2, 7, 10, 8];\nconsole.log(xs.map((x) => x * 2));\n```","options":["`[ 16, 20, 14, 4, 20 ]`","`TypeError`","`SyntaxError`","`[ 20, 4, 14, 20, 16 ]`"],"answer":3,"explanation":"It logs `[ 20, 4, 14, 20, 16 ]`."}]
---
# Predict the Output: Array methods #5

`map` transforms every item, `filter` keeps some, `reduce` folds them into one value, `find` returns the first match (or `undefined`).

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
