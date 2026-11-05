---
slug: "async-predict-array-modern-15"
title: "Predict the Output: Modern array helpers #15"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log([3, 9, 1, 7].findLast((x) => x % 2 === 1));\n```","options":["`3`","`7`","`TypeError`","`undefined`"],"answer":1,"explanation":"It logs `7`."},{"prompt":"What does this log?\n\n```js\nconsole.log([3, 7, 6, 8].findLast((x) => x % 2 === 1));\n```","options":["`3`","`TypeError`","`7`","`undefined`"],"answer":2,"explanation":"It logs `7`."},{"prompt":"What does this log?\n\n```js\nconsole.log([2, 3, 9, 4].findLast((x) => x % 2 === 1));\n```","options":["`9`","`3`","`TypeError`","`undefined`"],"answer":0,"explanation":"It logs `9`."},{"prompt":"What does this log?\n\n```js\nconsole.log([6, 5, 6, 9].findLast((x) => x % 2 === 1));\n```","options":["`5`","`9`","`TypeError`","`undefined`"],"answer":1,"explanation":"It logs `9`."},{"prompt":"What does this log?\n\n```js\nconsole.log([3, 4, 7, 6].findLast((x) => x % 2 === 1));\n```","options":["`TypeError`","`7`","`3`","`undefined`"],"answer":1,"explanation":"It logs `7`."}]
---
# Predict the Output: Modern array helpers #15

`flat`, `flatMap`, `Array.from`, `at`, `findLast` and `Object.groupBy`-style helpers replace many hand-written loops.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
