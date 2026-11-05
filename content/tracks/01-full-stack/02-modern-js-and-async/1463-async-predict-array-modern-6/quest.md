---
slug: "async-predict-array-modern-6"
title: "Predict the Output: Modern array helpers #6"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log([2, 3, 7, 2].findLast((x) => x % 2 === 1));\n```","options":["`3`","`TypeError`","`7`","`undefined`"],"answer":2,"explanation":"It logs `7`."},{"prompt":"What does this log?\n\n```js\nconsole.log([9, 5, 9, 7].findLast((x) => x % 2 === 1));\n```","options":["`TypeError`","`undefined`","`7`","`9`"],"answer":2,"explanation":"It logs `7`."},{"prompt":"What does this log?\n\n```js\nconsole.log([6, 8, 9, 7].flatMap((x) => [x, x * 2]).length);\n```","options":["`8`","`4`","`undefined`","`TypeError`"],"answer":0,"explanation":"It logs `8`."},{"prompt":"What does this log?\n\n```js\nconsole.log([9, 9, 4, 4].flatMap((x) => [x, x * 2]).length);\n```","options":["`undefined`","`8`","`TypeError`","`4`"],"answer":1,"explanation":"It logs `8`."},{"prompt":"What does this log?\n\n```js\nconsole.log([[8, 7], [4, [2]]].flat());\n```","options":["`[ 8, 7, 4, [ 2 ] ]`","`TypeError`","`undefined`","`[ 8, 7, 4, 2 ]`"],"answer":0,"explanation":"It logs `[ 8, 7, 4, [ 2 ] ]`."}]
---
# Predict the Output: Modern array helpers #6

`flat`, `flatMap`, `Array.from`, `at`, `findLast` and `Object.groupBy`-style helpers replace many hand-written loops.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
