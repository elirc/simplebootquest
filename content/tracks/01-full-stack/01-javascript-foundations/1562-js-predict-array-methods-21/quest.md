---
slug: "js-predict-array-methods-21"
title: "Predict the Output: Array methods #21"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst xs = [7, 12, 7, 5, 6];\nconsole.log(xs.map((x) => x * 2));\n```","options":["`[ 14, 24, 14, 10, 12 ]`","`[ 12, 10, 14, 24, 14 ]`","`TypeError`","`SyntaxError`"],"answer":0,"explanation":"It logs `[ 14, 24, 14, 10, 12 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [11, 8, 8, 5, 3];\nconsole.log(xs.find((x) => x > 4));\n```","options":["`5`","`SyntaxError`","`11`","`[ 11, 8, 8, 5 ]`"],"answer":2,"explanation":"It logs `11`."},{"prompt":"What does this log?\n\n```js\nconst xs = [5, 11, 11, 10, 7];\nconsole.log(xs.slice(1, 3));\n```","options":["`[ 11, 11 ]`","`TypeError`","`[ 5, 11, 11 ]`","`[ 10, 11 ]`"],"answer":0,"explanation":"It logs `[ 11, 11 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [5, 11, 3, 6, 2];\nconsole.log(xs.findIndex((x) => x > 4));\n```","options":["`TypeError`","`1`","`0`","`SyntaxError`"],"answer":2,"explanation":"It logs `0`."},{"prompt":"What does this log?\n\n```js\nconst xs = [8, 1, 6, 6, 5];\nconsole.log(xs.filter((x) => x % 4 === 0));\n```","options":["`[ 8 ]`","`TypeError`","`[ true, false, false, false, false ]`","`SyntaxError`"],"answer":0,"explanation":"It logs `[ 8 ]`."}]
---
# Predict the Output: Array methods #21

`map` transforms every item, `filter` keeps some, `reduce` folds them into one value, `find` returns the first match (or `undefined`).

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
