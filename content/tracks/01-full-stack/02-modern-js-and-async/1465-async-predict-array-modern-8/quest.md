---
slug: "async-predict-array-modern-8"
title: "Predict the Output: Modern array helpers #8"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log([9, 9, 3, 1].findLast((x) => x % 2 === 1));\n```","options":["`1`","`TypeError`","`9`","`undefined`"],"answer":0,"explanation":"It logs `1`."},{"prompt":"What does this log?\n\n```js\nconsole.log([[1, 1], [1, [6]]].flat());\n```","options":["`[ 1, 1, 1, 6 ]`","`undefined`","`[ 1, 1, 1, [ 6 ] ]`","`TypeError`"],"answer":2,"explanation":"It logs `[ 1, 1, 1, [ 6 ] ]`."},{"prompt":"What does this log?\n\n```js\nconsole.log([[7, 3], [1, [9]]].flat());\n```","options":["`[ 7, 3, 1, 9 ]`","`TypeError`","`undefined`","`[ 7, 3, 1, [ 9 ] ]`"],"answer":3,"explanation":"It logs `[ 7, 3, 1, [ 9 ] ]`."},{"prompt":"What does this log?\n\n```js\nconsole.log([2, 5, 7, 9].findLast((x) => x % 2 === 1));\n```","options":["`9`","`5`","`undefined`","`TypeError`"],"answer":0,"explanation":"It logs `9`."},{"prompt":"What does this log?\n\n```js\nconsole.log([2, 1, 7, 5].flatMap((x) => [x, x * 2]).length);\n```","options":["`undefined`","`8`","`TypeError`","`4`"],"answer":1,"explanation":"It logs `8`."}]
---
# Predict the Output: Modern array helpers #8

`flat`, `flatMap`, `Array.from`, `at`, `findLast` and `Object.groupBy`-style helpers replace many hand-written loops.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
