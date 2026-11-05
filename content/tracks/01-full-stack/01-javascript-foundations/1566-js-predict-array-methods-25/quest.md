---
slug: "js-predict-array-methods-25"
title: "Predict the Output: Array methods #25"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst xs = [2, 6, 8, 2, 10];\nconsole.log(xs.find((x) => x > 6));\n```","options":["`8`","`SyntaxError`","`10`","`[ 8, 10 ]`"],"answer":0,"explanation":"It logs `8`."},{"prompt":"What does this log?\n\n```js\nconst xs = [3, 4, 4, 7, 8];\nconsole.log(xs.findIndex((x) => x > 6));\n```","options":["`SyntaxError`","`3`","`TypeError`","`0`"],"answer":1,"explanation":"It logs `3`."},{"prompt":"What does this log?\n\n```js\nconst xs = [7, 10, 12, 12, 7];\nconsole.log(xs.filter((x) => x % 2 === 0));\n```","options":["`[ false, true, true, true, false ]`","`SyntaxError`","`[ 12, 12, 10 ]`","`[ 10, 12, 12 ]`"],"answer":3,"explanation":"It logs `[ 10, 12, 12 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [2, 2, 12, 11, 4];\nconsole.log(xs.find((x) => x > 8));\n```","options":["`12`","`11`","`[ 12, 11 ]`","`SyntaxError`"],"answer":0,"explanation":"It logs `12`."},{"prompt":"What does this log?\n\n```js\nconst xs = [3, 12, 4, 6, 10];\nconsole.log(xs.find((x) => x > 8));\n```","options":["`10`","`12`","`SyntaxError`","`[ 12, 10 ]`"],"answer":1,"explanation":"It logs `12`."}]
---
# Predict the Output: Array methods #25

`map` transforms every item, `filter` keeps some, `reduce` folds them into one value, `find` returns the first match (or `undefined`).

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
