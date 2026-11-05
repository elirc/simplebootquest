---
slug: "async-predict-array-modern-14"
title: "Predict the Output: Modern array helpers #14"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log([6, 6, 9, 8].flatMap((x) => [x, x * 2]).length);\n```","options":["`TypeError`","`8`","`4`","`undefined`"],"answer":1,"explanation":"It logs `8`."},{"prompt":"What does this log?\n\n```js\nconsole.log([4, 8, 5, 1].flatMap((x) => [x, x * 2]).length);\n```","options":["`TypeError`","`8`","`4`","`undefined`"],"answer":1,"explanation":"It logs `8`."},{"prompt":"What does this log?\n\n```js\nconsole.log([2, 3, 1, 1].flatMap((x) => [x, x * 2]).length);\n```","options":["`TypeError`","`8`","`4`","`undefined`"],"answer":1,"explanation":"It logs `8`."},{"prompt":"What does this log?\n\n```js\nconsole.log([[2, 6], [5, [2]]].flat());\n```","options":["`[ 2, 6, 5, [ 2 ] ]`","`[ 2, 6, 5, 2 ]`","`undefined`","`TypeError`"],"answer":0,"explanation":"It logs `[ 2, 6, 5, [ 2 ] ]`."},{"prompt":"What does this log?\n\n```js\nconsole.log([2, 2, 5, 9].flatMap((x) => [x, x * 2]).length);\n```","options":["`4`","`TypeError`","`undefined`","`8`"],"answer":3,"explanation":"It logs `8`."}]
---
# Predict the Output: Modern array helpers #14

`flat`, `flatMap`, `Array.from`, `at`, `findLast` and `Object.groupBy`-style helpers replace many hand-written loops.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
