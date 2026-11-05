---
slug: "js-predict-array-methods-9"
title: "Predict the Output: Array methods #9"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst xs = [8, 1, 12, 5, 9];\nconsole.log(xs.findIndex((x) => x > 8));\n```","options":["`SyntaxError`","`TypeError`","`0`","`2`"],"answer":3,"explanation":"It logs `2`."},{"prompt":"What does this log?\n\n```js\nconst xs = [3, 12, 5, 5, 8];\nconsole.log(xs.find((x) => x > 8));\n```","options":["`[ 12 ]`","`TypeError`","`12`","`SyntaxError`"],"answer":2,"explanation":"It logs `12`."},{"prompt":"What does this log?\n\n```js\nconst xs = [11, 12, 12, 5, 11];\nconsole.log(xs.filter((x) => x % 4 === 0));\n```","options":["`[ false, true, true, false, false ]`","`SyntaxError`","`TypeError`","`[ 12, 12 ]`"],"answer":3,"explanation":"It logs `[ 12, 12 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [12, 2, 6, 12, 8];\nconsole.log(xs.filter((x) => x % 2 === 0));\n```","options":["`SyntaxError`","`[ 12, 2, 6, 12, 8 ]`","`[ true, true, true, true, true ]`","`[ 8, 12, 6, 2, 12 ]`"],"answer":1,"explanation":"It logs `[ 12, 2, 6, 12, 8 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [12, 9, 5, 3, 7];\nconsole.log(xs.slice(1, 3));\n```","options":["`[ 9, 5 ]`","`[ 12, 9, 5 ]`","`TypeError`","`[ 3, 5 ]`"],"answer":0,"explanation":"It logs `[ 9, 5 ]`."}]
---
# Predict the Output: Array methods #9

`map` transforms every item, `filter` keeps some, `reduce` folds them into one value, `find` returns the first match (or `undefined`).

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
