---
slug: "js-predict-array-methods-7"
title: "Predict the Output: Array methods #7"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst xs = [1, 4, 12, 1, 3];\nconsole.log(xs.map((x, i) => x + i));\n```","options":["`[ 3, 2, 14, 7, 5 ]`","`TypeError`","`[ 1, 5, 14, 4, 7 ]`","`SyntaxError`"],"answer":2,"explanation":"It logs `[ 1, 5, 14, 4, 7 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [8, 9, 11, 9, 12];\nconsole.log(xs.map((x, i) => x + i));\n```","options":["`[ 12, 10, 13, 12, 12 ]`","`SyntaxError`","`[ 8, 10, 13, 12, 16 ]`","`TypeError`"],"answer":2,"explanation":"It logs `[ 8, 10, 13, 12, 16 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [12, 12, 4, 5, 4];\nconsole.log(xs.map((x, i) => x + i));\n```","options":["`[ 4, 6, 6, 15, 16 ]`","`TypeError`","`SyntaxError`","`[ 12, 13, 6, 8, 8 ]`"],"answer":3,"explanation":"It logs `[ 12, 13, 6, 8, 8 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [12, 2, 7, 5, 8];\nconsole.log(xs.findIndex((x) => x > 8));\n```","options":["`4`","`SyntaxError`","`TypeError`","`0`"],"answer":3,"explanation":"It logs `0`."},{"prompt":"What does this log?\n\n```js\nconst xs = [10, 8, 8, 9, 12];\nconsole.log(xs.slice(1, 4));\n```","options":["`[ 10, 8, 8, 9 ]`","`TypeError`","`[ 8, 8, 9 ]`","`[ 9, 8, 8 ]`"],"answer":2,"explanation":"It logs `[ 8, 8, 9 ]`."}]
---
# Predict the Output: Array methods #7

`map` transforms every item, `filter` keeps some, `reduce` folds them into one value, `find` returns the first match (or `undefined`).

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
