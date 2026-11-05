---
slug: "async-predict-array-modern-22"
title: "Predict the Output: Modern array helpers #22"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log([4, 6, 6, 6].flatMap((x) => [x, x * 2]).length);\n```","options":["`TypeError`","`8`","`undefined`","`4`"],"answer":1,"explanation":"It logs `8`."},{"prompt":"What does this log?\n\n```js\nconsole.log([[2, 8], [2, [4]]].flat());\n```","options":["`[ 2, 8, 2, [ 4 ] ]`","`undefined`","`TypeError`","`[ 2, 8, 2, 4 ]`"],"answer":0,"explanation":"It logs `[ 2, 8, 2, [ 4 ] ]`."},{"prompt":"What does this log?\n\n```js\nconsole.log([5, 5, 7, 2].findLast((x) => x % 2 === 1));\n```","options":["`undefined`","`7`","`5`","`TypeError`"],"answer":1,"explanation":"It logs `7`."},{"prompt":"What does this log?\n\n```js\nconsole.log([9, 1, 8, 6].flatMap((x) => [x, x * 2]).length);\n```","options":["`TypeError`","`8`","`4`","`undefined`"],"answer":1,"explanation":"It logs `8`."},{"prompt":"What does this log?\n\n```js\nconsole.log([[8, 4], [8, [8]]].flat());\n```","options":["`[ 8, 4, 8, [ 8 ] ]`","`[ 8, 4, 8, 8 ]`","`TypeError`","`undefined`"],"answer":0,"explanation":"It logs `[ 8, 4, 8, [ 8 ] ]`."}]
---
# Predict the Output: Modern array helpers #22

`flat`, `flatMap`, `Array.from`, `at`, `findLast` and `Object.groupBy`-style helpers replace many hand-written loops.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
