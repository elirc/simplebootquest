---
slug: "async-predict-array-modern-5"
title: "Predict the Output: Modern array helpers #5"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log([9, 3, 6, 9].flatMap((x) => [x, x * 2]).length);\n```","options":["`4`","`undefined`","`TypeError`","`8`"],"answer":3,"explanation":"It logs `8`."},{"prompt":"What does this log?\n\n```js\nconsole.log([[8, 2], [7, [6]]].flat());\n```","options":["`[ 8, 2, 7, 6 ]`","`[ 8, 2, 7, [ 6 ] ]`","`TypeError`","`undefined`"],"answer":1,"explanation":"It logs `[ 8, 2, 7, [ 6 ] ]`."},{"prompt":"What does this log?\n\n```js\nconsole.log([[5, 8], [4, [9]]].flat());\n```","options":["`undefined`","`[ 5, 8, 4, [ 9 ] ]`","`[ 5, 8, 4, 9 ]`","`TypeError`"],"answer":1,"explanation":"It logs `[ 5, 8, 4, [ 9 ] ]`."},{"prompt":"What does this log?\n\n```js\nconsole.log([1, 2, 3, 7].findLast((x) => x % 2 === 1));\n```","options":["`undefined`","`1`","`TypeError`","`7`"],"answer":3,"explanation":"It logs `7`."},{"prompt":"What does this log?\n\n```js\nconsole.log([9, 7, 2, 2].findLast((x) => x % 2 === 1));\n```","options":["`undefined`","`7`","`TypeError`","`9`"],"answer":1,"explanation":"It logs `7`."}]
---
# Predict the Output: Modern array helpers #5

`flat`, `flatMap`, `Array.from`, `at`, `findLast` and `Object.groupBy`-style helpers replace many hand-written loops.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
