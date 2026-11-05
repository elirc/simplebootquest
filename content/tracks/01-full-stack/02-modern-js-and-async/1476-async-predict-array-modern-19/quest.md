---
slug: "async-predict-array-modern-19"
title: "Predict the Output: Modern array helpers #19"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log([8, 9, 6, 7].findLast((x) => x % 2 === 1));\n```","options":["`7`","`9`","`undefined`","`TypeError`"],"answer":0,"explanation":"It logs `7`."},{"prompt":"What does this log?\n\n```js\nconsole.log([2, 1, 9, 4].findLast((x) => x % 2 === 1));\n```","options":["`1`","`undefined`","`9`","`TypeError`"],"answer":2,"explanation":"It logs `9`."},{"prompt":"What does this log?\n\n```js\nconsole.log([3, 7, 9, 9].findLast((x) => x % 2 === 1));\n```","options":["`9`","`undefined`","`3`","`TypeError`"],"answer":0,"explanation":"It logs `9`."},{"prompt":"What does this log?\n\n```js\nconsole.log([9, 1, 8, 8].flatMap((x) => [x, x * 2]).length);\n```","options":["`8`","`4`","`TypeError`","`undefined`"],"answer":0,"explanation":"It logs `8`."},{"prompt":"What does this log?\n\n```js\nconsole.log([9, 8, 3, 2].findLast((x) => x % 2 === 1));\n```","options":["`3`","`TypeError`","`9`","`undefined`"],"answer":0,"explanation":"It logs `3`."}]
---
# Predict the Output: Modern array helpers #19

`flat`, `flatMap`, `Array.from`, `at`, `findLast` and `Object.groupBy`-style helpers replace many hand-written loops.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
