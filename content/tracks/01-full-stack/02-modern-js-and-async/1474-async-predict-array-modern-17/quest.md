---
slug: "async-predict-array-modern-17"
title: "Predict the Output: Modern array helpers #17"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log([7, 4, 3, 7].flatMap((x) => [x, x * 2]).length);\n```","options":["`undefined`","`8`","`TypeError`","`4`"],"answer":1,"explanation":"It logs `8`."},{"prompt":"What does this log?\n\n```js\nconsole.log([4, 5, 3, 6].findLast((x) => x % 2 === 1));\n```","options":["`3`","`5`","`TypeError`","`undefined`"],"answer":0,"explanation":"It logs `3`."},{"prompt":"What does this log?\n\n```js\nconsole.log([7, 2, 1, 4].flatMap((x) => [x, x * 2]).length);\n```","options":["`TypeError`","`8`","`undefined`","`4`"],"answer":1,"explanation":"It logs `8`."},{"prompt":"What does this log?\n\n```js\nconsole.log([[5, 3], [3, [6]]].flat());\n```","options":["`[ 5, 3, 3, [ 6 ] ]`","`[ 5, 3, 3, 6 ]`","`TypeError`","`undefined`"],"answer":0,"explanation":"It logs `[ 5, 3, 3, [ 6 ] ]`."},{"prompt":"What does this log?\n\n```js\nconsole.log([5, 4, 2, 9].flatMap((x) => [x, x * 2]).length);\n```","options":["`4`","`TypeError`","`undefined`","`8`"],"answer":3,"explanation":"It logs `8`."}]
---
# Predict the Output: Modern array helpers #17

`flat`, `flatMap`, `Array.from`, `at`, `findLast` and `Object.groupBy`-style helpers replace many hand-written loops.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
