---
slug: "js-predict-array-methods-24"
title: "Predict the Output: Array methods #24"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst xs = [6, 2, 2, 5, 8];\nconsole.log(xs.slice(1, 2));\n```","options":["`TypeError`","`[ 2 ]`","`[ 5 ]`","`[ 6, 2 ]`"],"answer":1,"explanation":"It logs `[ 2 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [11, 9, 6, 7, 8];\nconsole.log(xs.map((x, i) => x + i));\n```","options":["`SyntaxError`","`[ 11, 10, 8, 10, 12 ]`","`[ 8, 8, 8, 12, 15 ]`","`TypeError`"],"answer":1,"explanation":"It logs `[ 11, 10, 8, 10, 12 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [6, 3, 4, 12, 2];\nconsole.log(xs.filter((x, i) => i % 2 === 0));\n```","options":["`[ 2, 4, 6 ]`","`[ 6, 4, 2 ]`","`SyntaxError`","`[ true, false, true, false, true ]`"],"answer":1,"explanation":"It logs `[ 6, 4, 2 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [3, 3, 7, 1, 10];\nconsole.log(xs.filter((x, i) => i % 2 === 0));\n```","options":["`[ 3, 7, 10 ]`","`[ true, false, true, false, true ]`","`[ 10, 7, 3 ]`","`SyntaxError`"],"answer":0,"explanation":"It logs `[ 3, 7, 10 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [9, 1, 7, 7, 1];\nconsole.log(xs.filter((x, i) => i % 2 === 0));\n```","options":["`[ 1, 7, 9 ]`","`[ true, false, true, false, true ]`","`SyntaxError`","`[ 9, 7, 1 ]`"],"answer":3,"explanation":"It logs `[ 9, 7, 1 ]`."}]
---
# Predict the Output: Array methods #24

`map` transforms every item, `filter` keeps some, `reduce` folds them into one value, `find` returns the first match (or `undefined`).

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
