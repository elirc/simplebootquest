---
slug: "js-predict-array-methods-8"
title: "Predict the Output: Array methods #8"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst xs = [12, 4, 2, 6, 12];\nconsole.log(xs.map((x) => x * 2));\n```","options":["`[ 24, 12, 4, 8, 24 ]`","`[ 24, 8, 4, 12, 24 ]`","`SyntaxError`","`TypeError`"],"answer":1,"explanation":"It logs `[ 24, 8, 4, 12, 24 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [10, 10, 1, 12, 7];\nconsole.log(xs.map((x) => x * 4));\n```","options":["`[ 40, 40, 4, 48, 28 ]`","`[ 28, 48, 4, 40, 40 ]`","`SyntaxError`","`TypeError`"],"answer":0,"explanation":"It logs `[ 40, 40, 4, 48, 28 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [1, 8, 12, 12, 7];\nconsole.log(xs.filter((x, i) => i % 2 === 0));\n```","options":["`[ 7, 12, 1 ]`","`[ 1, 12, 7 ]`","`SyntaxError`","`[ true, false, true, false, true ]`"],"answer":1,"explanation":"It logs `[ 1, 12, 7 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [7, 9, 4, 2, 9];\nconsole.log(xs.map((x) => x * 2));\n```","options":["`[ 14, 18, 8, 4, 18 ]`","`SyntaxError`","`[ 18, 4, 8, 18, 14 ]`","`TypeError`"],"answer":0,"explanation":"It logs `[ 14, 18, 8, 4, 18 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [8, 2, 5, 7, 12];\nconsole.log(xs.find((x) => x > 4));\n```","options":["`8`","`SyntaxError`","`[ 8, 5, 7, 12 ]`","`12`"],"answer":0,"explanation":"It logs `8`."}]
---
# Predict the Output: Array methods #8

`map` transforms every item, `filter` keeps some, `reduce` folds them into one value, `find` returns the first match (or `undefined`).

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
