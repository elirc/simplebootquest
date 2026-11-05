---
slug: "async-predict-array-modern-12"
title: "Predict the Output: Modern array helpers #12"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log([7, 1, 8, 7].flatMap((x) => [x, x * 2]).length);\n```","options":["`undefined`","`4`","`TypeError`","`8`"],"answer":3,"explanation":"It logs `8`."},{"prompt":"What does this log?\n\n```js\nconsole.log([[5, 2], [9, [2]]].flat());\n```","options":["`[ 5, 2, 9, [ 2 ] ]`","`undefined`","`[ 5, 2, 9, 2 ]`","`TypeError`"],"answer":0,"explanation":"It logs `[ 5, 2, 9, [ 2 ] ]`."},{"prompt":"What does this log?\n\n```js\nconsole.log([9, 3, 5, 2].flatMap((x) => [x, x * 2]).length);\n```","options":["`undefined`","`TypeError`","`4`","`8`"],"answer":3,"explanation":"It logs `8`."},{"prompt":"What does this log?\n\n```js\nconsole.log([5, 2, 4, 9].findLast((x) => x % 2 === 1));\n```","options":["`undefined`","`5`","`9`","`TypeError`"],"answer":2,"explanation":"It logs `9`."},{"prompt":"What does this log?\n\n```js\nconsole.log([6, 8, 3, 8].flatMap((x) => [x, x * 2]).length);\n```","options":["`4`","`undefined`","`8`","`TypeError`"],"answer":2,"explanation":"It logs `8`."}]
---
# Predict the Output: Modern array helpers #12

`flat`, `flatMap`, `Array.from`, `at`, `findLast` and `Object.groupBy`-style helpers replace many hand-written loops.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
