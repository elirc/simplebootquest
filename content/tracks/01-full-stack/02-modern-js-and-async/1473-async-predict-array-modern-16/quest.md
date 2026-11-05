---
slug: "async-predict-array-modern-16"
title: "Predict the Output: Modern array helpers #16"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log([[3, 4], [7, [1]]].flat());\n```","options":["`[ 3, 4, 7, 1 ]`","`undefined`","`TypeError`","`[ 3, 4, 7, [ 1 ] ]`"],"answer":3,"explanation":"It logs `[ 3, 4, 7, [ 1 ] ]`."},{"prompt":"What does this log?\n\n```js\nconsole.log([[1, 3], [8, [2]]].flat());\n```","options":["`TypeError`","`undefined`","`[ 1, 3, 8, [ 2 ] ]`","`[ 1, 3, 8, 2 ]`"],"answer":2,"explanation":"It logs `[ 1, 3, 8, [ 2 ] ]`."},{"prompt":"What does this log?\n\n```js\nconsole.log([3, 7, 4, 6].flatMap((x) => [x, x * 2]).length);\n```","options":["`TypeError`","`undefined`","`4`","`8`"],"answer":3,"explanation":"It logs `8`."},{"prompt":"What does this log?\n\n```js\nconsole.log([[7, 2], [2, [9]]].flat());\n```","options":["`[ 7, 2, 2, [ 9 ] ]`","`[ 7, 2, 2, 9 ]`","`undefined`","`TypeError`"],"answer":0,"explanation":"It logs `[ 7, 2, 2, [ 9 ] ]`."},{"prompt":"What does this log?\n\n```js\nconsole.log([5, 9, 8, 2].findLast((x) => x % 2 === 1));\n```","options":["`TypeError`","`undefined`","`5`","`9`"],"answer":3,"explanation":"It logs `9`."}]
---
# Predict the Output: Modern array helpers #16

`flat`, `flatMap`, `Array.from`, `at`, `findLast` and `Object.groupBy`-style helpers replace many hand-written loops.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
