---
slug: "async-predict-array-modern-7"
title: "Predict the Output: Modern array helpers #7"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log([[5, 2], [4, [1]]].flat());\n```","options":["`undefined`","`TypeError`","`[ 5, 2, 4, 1 ]`","`[ 5, 2, 4, [ 1 ] ]`"],"answer":3,"explanation":"It logs `[ 5, 2, 4, [ 1 ] ]`."},{"prompt":"What does this log?\n\n```js\nconsole.log([8, 3, 1, 1].findLast((x) => x % 2 === 1));\n```","options":["`TypeError`","`1`","`undefined`","`3`"],"answer":1,"explanation":"It logs `1`."},{"prompt":"What does this log?\n\n```js\nconsole.log([3, 4, 9, 9].flatMap((x) => [x, x * 2]).length);\n```","options":["`8`","`undefined`","`4`","`TypeError`"],"answer":0,"explanation":"It logs `8`."},{"prompt":"What does this log?\n\n```js\nconsole.log([[1, 9], [6, [3]]].flat());\n```","options":["`[ 1, 9, 6, 3 ]`","`[ 1, 9, 6, [ 3 ] ]`","`TypeError`","`undefined`"],"answer":1,"explanation":"It logs `[ 1, 9, 6, [ 3 ] ]`."},{"prompt":"What does this log?\n\n```js\nconsole.log([5, 5, 1, 9].findLast((x) => x % 2 === 1));\n```","options":["`5`","`undefined`","`TypeError`","`9`"],"answer":3,"explanation":"It logs `9`."}]
---
# Predict the Output: Modern array helpers #7

`flat`, `flatMap`, `Array.from`, `at`, `findLast` and `Object.groupBy`-style helpers replace many hand-written loops.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
