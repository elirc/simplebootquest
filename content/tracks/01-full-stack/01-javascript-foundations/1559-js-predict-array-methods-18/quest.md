---
slug: "js-predict-array-methods-18"
title: "Predict the Output: Array methods #18"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst xs = [4, 2, 3, 3, 9];\nconsole.log(xs.map((x, i) => x + i));\n```","options":["`SyntaxError`","`TypeError`","`[ 4, 3, 5, 6, 13 ]`","`[ 9, 4, 5, 5, 8 ]`"],"answer":2,"explanation":"It logs `[ 4, 3, 5, 6, 13 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [1, 10, 4, 7, 8];\nconsole.log(xs.find((x) => x > 4));\n```","options":["`[ 10, 7, 8 ]`","`SyntaxError`","`10`","`8`"],"answer":2,"explanation":"It logs `10`."},{"prompt":"What does this log?\n\n```js\nconst xs = [1, 7, 12, 3, 10];\nconsole.log(xs.filter((x) => x % 4 === 0));\n```","options":["`[ 12 ]`","`[ false, false, true, false, false ]`","`TypeError`","`SyntaxError`"],"answer":0,"explanation":"It logs `[ 12 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [4, 8, 2, 3, 12];\nconsole.log(xs.map((x) => x * 4));\n```","options":["`[ 48, 12, 8, 32, 16 ]`","`TypeError`","`[ 16, 32, 8, 12, 48 ]`","`SyntaxError`"],"answer":2,"explanation":"It logs `[ 16, 32, 8, 12, 48 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [2, 12, 7, 2, 12];\nconsole.log(xs.slice(1, 2));\n```","options":["`[ 2 ]`","`[ 2, 12 ]`","`[ 12 ]`","`TypeError`"],"answer":2,"explanation":"It logs `[ 12 ]`."}]
---
# Predict the Output: Array methods #18

`map` transforms every item, `filter` keeps some, `reduce` folds them into one value, `find` returns the first match (or `undefined`).

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
