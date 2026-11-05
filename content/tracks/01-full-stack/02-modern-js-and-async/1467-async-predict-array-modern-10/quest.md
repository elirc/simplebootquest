---
slug: "async-predict-array-modern-10"
title: "Predict the Output: Modern array helpers #10"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log([4, 8, 1, 2].flatMap((x) => [x, x * 2]).length);\n```","options":["`4`","`undefined`","`8`","`TypeError`"],"answer":2,"explanation":"It logs `8`."},{"prompt":"What does this log?\n\n```js\nconsole.log([8, 8, 6, 7].flatMap((x) => [x, x * 2]).length);\n```","options":["`TypeError`","`4`","`undefined`","`8`"],"answer":3,"explanation":"It logs `8`."},{"prompt":"What does this log?\n\n```js\nconsole.log([5, 5, 4, 9].findLast((x) => x % 2 === 1));\n```","options":["`TypeError`","`9`","`undefined`","`5`"],"answer":1,"explanation":"It logs `9`."},{"prompt":"What does this log?\n\n```js\nconsole.log([[4, 5], [1, [6]]].flat());\n```","options":["`[ 4, 5, 1, 6 ]`","`TypeError`","`[ 4, 5, 1, [ 6 ] ]`","`undefined`"],"answer":2,"explanation":"It logs `[ 4, 5, 1, [ 6 ] ]`."},{"prompt":"What does this log?\n\n```js\nconsole.log([9, 5, 1, 1].findLast((x) => x % 2 === 1));\n```","options":["`9`","`undefined`","`1`","`TypeError`"],"answer":2,"explanation":"It logs `1`."}]
---
# Predict the Output: Modern array helpers #10

`flat`, `flatMap`, `Array.from`, `at`, `findLast` and `Object.groupBy`-style helpers replace many hand-written loops.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
