---
slug: "async-predict-array-modern-13"
title: "Predict the Output: Modern array helpers #13"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log([[5, 4], [8, [5]]].flat());\n```","options":["`undefined`","`[ 5, 4, 8, [ 5 ] ]`","`TypeError`","`[ 5, 4, 8, 5 ]`"],"answer":1,"explanation":"It logs `[ 5, 4, 8, [ 5 ] ]`."},{"prompt":"What does this log?\n\n```js\nconsole.log([2, 8, 5, 3].findLast((x) => x % 2 === 1));\n```","options":["`5`","`TypeError`","`undefined`","`3`"],"answer":3,"explanation":"It logs `3`."},{"prompt":"What does this log?\n\n```js\nconsole.log([8, 6, 4, 8].flatMap((x) => [x, x * 2]).length);\n```","options":["`undefined`","`4`","`TypeError`","`8`"],"answer":3,"explanation":"It logs `8`."},{"prompt":"What does this log?\n\n```js\nconsole.log([3, 9, 2, 5].findLast((x) => x % 2 === 1));\n```","options":["`undefined`","`TypeError`","`5`","`3`"],"answer":2,"explanation":"It logs `5`."},{"prompt":"What does this log?\n\n```js\nconsole.log([[1, 3], [2, [3]]].flat());\n```","options":["`[ 1, 3, 2, 3 ]`","`[ 1, 3, 2, [ 3 ] ]`","`TypeError`","`undefined`"],"answer":1,"explanation":"It logs `[ 1, 3, 2, [ 3 ] ]`."}]
---
# Predict the Output: Modern array helpers #13

`flat`, `flatMap`, `Array.from`, `at`, `findLast` and `Object.groupBy`-style helpers replace many hand-written loops.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
