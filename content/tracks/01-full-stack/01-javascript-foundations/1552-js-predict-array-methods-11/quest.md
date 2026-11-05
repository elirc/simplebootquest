---
slug: "js-predict-array-methods-11"
title: "Predict the Output: Array methods #11"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst xs = [3, 2, 2, 4, 8];\nconsole.log(xs.map((x, i) => x + i));\n```","options":["`[ 3, 3, 4, 7, 12 ]`","`TypeError`","`[ 8, 5, 4, 5, 7 ]`","`SyntaxError`"],"answer":0,"explanation":"It logs `[ 3, 3, 4, 7, 12 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [10, 3, 11, 2, 4];\nconsole.log(xs.slice(1, 4));\n```","options":["`[ 3, 11, 2 ]`","`[ 2, 11, 3 ]`","`[ 10, 3, 11, 2 ]`","`TypeError`"],"answer":0,"explanation":"It logs `[ 3, 11, 2 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [1, 11, 8, 1, 12];\nconsole.log(xs.map((x) => x * 3));\n```","options":["`[ 36, 3, 24, 33, 3 ]`","`SyntaxError`","`TypeError`","`[ 3, 33, 24, 3, 36 ]`"],"answer":3,"explanation":"It logs `[ 3, 33, 24, 3, 36 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [10, 10, 11, 8, 1];\nconsole.log(xs.map((x, i) => x + i));\n```","options":["`SyntaxError`","`TypeError`","`[ 1, 9, 13, 13, 14 ]`","`[ 10, 11, 13, 11, 5 ]`"],"answer":3,"explanation":"It logs `[ 10, 11, 13, 11, 5 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [8, 3, 2, 7, 12];\nconsole.log(xs.map((x) => x * 4));\n```","options":["`[ 32, 12, 8, 28, 48 ]`","`TypeError`","`SyntaxError`","`[ 48, 28, 8, 12, 32 ]`"],"answer":0,"explanation":"It logs `[ 32, 12, 8, 28, 48 ]`."}]
---
# Predict the Output: Array methods #11

`map` transforms every item, `filter` keeps some, `reduce` folds them into one value, `find` returns the first match (or `undefined`).

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
