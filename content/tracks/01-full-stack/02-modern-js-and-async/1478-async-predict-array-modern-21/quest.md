---
slug: "async-predict-array-modern-21"
title: "Predict the Output: Modern array helpers #21"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log([5, 3, 9, 1].flatMap((x) => [x, x * 2]).length);\n```","options":["`8`","`TypeError`","`4`","`undefined`"],"answer":0,"explanation":"It logs `8`."},{"prompt":"What does this log?\n\n```js\nconsole.log([6, 5, 2, 4].flatMap((x) => [x, x * 2]).length);\n```","options":["`4`","`TypeError`","`undefined`","`8`"],"answer":3,"explanation":"It logs `8`."},{"prompt":"What does this log?\n\n```js\nconsole.log([[7, 7], [8, [7]]].flat());\n```","options":["`undefined`","`TypeError`","`[ 7, 7, 8, 7 ]`","`[ 7, 7, 8, [ 7 ] ]`"],"answer":3,"explanation":"It logs `[ 7, 7, 8, [ 7 ] ]`."},{"prompt":"What does this log?\n\n```js\nconsole.log([7, 1, 9, 4].flatMap((x) => [x, x * 2]).length);\n```","options":["`undefined`","`4`","`8`","`TypeError`"],"answer":2,"explanation":"It logs `8`."},{"prompt":"What does this log?\n\n```js\nconsole.log([8, 9, 7, 4].findLast((x) => x % 2 === 1));\n```","options":["`7`","`TypeError`","`9`","`undefined`"],"answer":0,"explanation":"It logs `7`."}]
---
# Predict the Output: Modern array helpers #21

`flat`, `flatMap`, `Array.from`, `at`, `findLast` and `Object.groupBy`-style helpers replace many hand-written loops.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
