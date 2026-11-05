---
slug: "js-predict-array-methods-4"
title: "Predict the Output: Array methods #4"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst xs = [9, 9, 4, 5, 11];\nconsole.log(xs.map((x, i) => x + i));\n```","options":["`[ 11, 6, 6, 12, 13 ]`","`TypeError`","`SyntaxError`","`[ 9, 10, 6, 8, 15 ]`"],"answer":3,"explanation":"It logs `[ 9, 10, 6, 8, 15 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [6, 9, 1, 11, 11];\nconsole.log(xs.slice(1, 3));\n```","options":["`TypeError`","`[ 9, 1 ]`","`[ 11, 1 ]`","`[ 6, 9, 1 ]`"],"answer":1,"explanation":"It logs `[ 9, 1 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [5, 12, 12, 6, 3];\nconsole.log(xs.find((x) => x > 8));\n```","options":["`[ 12, 12 ]`","`SyntaxError`","`TypeError`","`12`"],"answer":3,"explanation":"It logs `12`."},{"prompt":"What does this log?\n\n```js\nconst xs = [1, 3, 2, 3, 10];\nconsole.log(xs.map((x, i) => x + i));\n```","options":["`TypeError`","`[ 1, 4, 4, 6, 14 ]`","`SyntaxError`","`[ 10, 4, 4, 6, 5 ]`"],"answer":1,"explanation":"It logs `[ 1, 4, 4, 6, 14 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [2, 6, 3, 8, 7];\nconsole.log(xs.slice(1, 4));\n```","options":["`[ 2, 6, 3, 8 ]`","`TypeError`","`[ 6, 3, 8 ]`","`[ 8, 3, 6 ]`"],"answer":2,"explanation":"It logs `[ 6, 3, 8 ]`."}]
---
# Predict the Output: Array methods #4

`map` transforms every item, `filter` keeps some, `reduce` folds them into one value, `find` returns the first match (or `undefined`).

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
