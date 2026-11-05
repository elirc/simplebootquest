---
slug: "async-predict-array-modern-20"
title: "Predict the Output: Modern array helpers #20"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log([[4, 2], [1, [7]]].flat());\n```","options":["`[ 4, 2, 1, 7 ]`","`undefined`","`[ 4, 2, 1, [ 7 ] ]`","`TypeError`"],"answer":2,"explanation":"It logs `[ 4, 2, 1, [ 7 ] ]`."},{"prompt":"What does this log?\n\n```js\nconsole.log([2, 3, 1, 7].flatMap((x) => [x, x * 2]).length);\n```","options":["`8`","`undefined`","`TypeError`","`4`"],"answer":0,"explanation":"It logs `8`."},{"prompt":"What does this log?\n\n```js\nconsole.log([1, 5, 2, 7].flatMap((x) => [x, x * 2]).length);\n```","options":["`undefined`","`8`","`TypeError`","`4`"],"answer":1,"explanation":"It logs `8`."},{"prompt":"What does this log?\n\n```js\nconsole.log([[7, 7], [7, [1]]].flat());\n```","options":["`[ 7, 7, 7, 1 ]`","`undefined`","`[ 7, 7, 7, [ 1 ] ]`","`TypeError`"],"answer":2,"explanation":"It logs `[ 7, 7, 7, [ 1 ] ]`."},{"prompt":"What does this log?\n\n```js\nconsole.log([3, 6, 5, 5].findLast((x) => x % 2 === 1));\n```","options":["`3`","`TypeError`","`undefined`","`5`"],"answer":3,"explanation":"It logs `5`."}]
---
# Predict the Output: Modern array helpers #20

`flat`, `flatMap`, `Array.from`, `at`, `findLast` and `Object.groupBy`-style helpers replace many hand-written loops.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
