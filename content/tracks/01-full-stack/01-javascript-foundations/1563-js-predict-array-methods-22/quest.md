---
slug: "js-predict-array-methods-22"
title: "Predict the Output: Array methods #22"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst xs = [7, 4, 8, 4, 2];\nconsole.log(xs.map((x) => x * 2));\n```","options":["`TypeError`","`[ 14, 8, 16, 8, 4 ]`","`[ 4, 8, 16, 8, 14 ]`","`SyntaxError`"],"answer":1,"explanation":"It logs `[ 14, 8, 16, 8, 4 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [5, 10, 3, 9, 9];\nconsole.log(xs.filter((x, i) => i % 2 === 0));\n```","options":["`[ 5, 3, 9 ]`","`[ true, false, true, false, true ]`","`[ 9, 3, 5 ]`","`SyntaxError`"],"answer":0,"explanation":"It logs `[ 5, 3, 9 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [3, 11, 8, 5, 2];\nconsole.log(xs.find((x) => x > 6));\n```","options":["`11`","`SyntaxError`","`8`","`[ 11, 8 ]`"],"answer":0,"explanation":"It logs `11`."},{"prompt":"What does this log?\n\n```js\nconst xs = [10, 2, 10, 5, 6];\nconsole.log(xs.slice(1, 4));\n```","options":["`[ 10, 2, 10, 5 ]`","`[ 5, 10, 2 ]`","`TypeError`","`[ 2, 10, 5 ]`"],"answer":3,"explanation":"It logs `[ 2, 10, 5 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [3, 10, 9, 1, 11];\nconsole.log(xs.slice(1, 4));\n```","options":["`[ 10, 9, 1 ]`","`[ 1, 9, 10 ]`","`[ 3, 10, 9, 1 ]`","`TypeError`"],"answer":0,"explanation":"It logs `[ 10, 9, 1 ]`."}]
---
# Predict the Output: Array methods #22

`map` transforms every item, `filter` keeps some, `reduce` folds them into one value, `find` returns the first match (or `undefined`).

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
