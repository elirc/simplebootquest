---
slug: "js-predict-array-methods-20"
title: "Predict the Output: Array methods #20"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst xs = [10, 3, 10, 4, 10];\nconsole.log(xs.map((x, i) => x + i));\n```","options":["`SyntaxError`","`[ 10, 4, 12, 7, 14 ]`","`[ 10, 5, 12, 6, 14 ]`","`TypeError`"],"answer":1,"explanation":"It logs `[ 10, 4, 12, 7, 14 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [6, 11, 6, 6, 11];\nconsole.log(xs.slice(1, 4));\n```","options":["`[ 6, 6, 11 ]`","`TypeError`","`[ 11, 6, 6 ]`","`[ 6, 11, 6, 6 ]`"],"answer":2,"explanation":"It logs `[ 11, 6, 6 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [10, 12, 12, 4, 5];\nconsole.log(xs.find((x) => x > 6));\n```","options":["`[ 10, 12, 12 ]`","`10`","`12`","`SyntaxError`"],"answer":1,"explanation":"It logs `10`."},{"prompt":"What does this log?\n\n```js\nconst xs = [10, 12, 8, 2, 7];\nconsole.log(xs.map((x) => x * 4));\n```","options":["`TypeError`","`[ 40, 48, 32, 8, 28 ]`","`[ 28, 8, 32, 48, 40 ]`","`SyntaxError`"],"answer":1,"explanation":"It logs `[ 40, 48, 32, 8, 28 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [7, 6, 8, 8, 2];\nconsole.log(xs.map((x, i) => x + i));\n```","options":["`SyntaxError`","`[ 2, 9, 10, 9, 11 ]`","`TypeError`","`[ 7, 7, 10, 11, 6 ]`"],"answer":3,"explanation":"It logs `[ 7, 7, 10, 11, 6 ]`."}]
---
# Predict the Output: Array methods #20

`map` transforms every item, `filter` keeps some, `reduce` folds them into one value, `find` returns the first match (or `undefined`).

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
