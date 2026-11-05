---
slug: "async-predict-array-modern-4"
title: "Predict the Output: Modern array helpers #4"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log([[1, 7], [4, [3]]].flat());\n```","options":["`[ 1, 7, 4, [ 3 ] ]`","`TypeError`","`undefined`","`[ 1, 7, 4, 3 ]`"],"answer":0,"explanation":"It logs `[ 1, 7, 4, [ 3 ] ]`."},{"prompt":"What does this log?\n\n```js\nconsole.log([7, 9, 8, 8].findLast((x) => x % 2 === 1));\n```","options":["`TypeError`","`7`","`9`","`undefined`"],"answer":2,"explanation":"It logs `9`."},{"prompt":"What does this log?\n\n```js\nconsole.log([7, 3, 3, 2].flatMap((x) => [x, x * 2]).length);\n```","options":["`undefined`","`TypeError`","`4`","`8`"],"answer":3,"explanation":"It logs `8`."},{"prompt":"What does this log?\n\n```js\nconsole.log([[7, 5], [6, [1]]].flat());\n```","options":["`TypeError`","`[ 7, 5, 6, [ 1 ] ]`","`undefined`","`[ 7, 5, 6, 1 ]`"],"answer":1,"explanation":"It logs `[ 7, 5, 6, [ 1 ] ]`."},{"prompt":"What does this log?\n\n```js\nconsole.log([[8, 4], [3, [8]]].flat());\n```","options":["`[ 8, 4, 3, [ 8 ] ]`","`[ 8, 4, 3, 8 ]`","`undefined`","`TypeError`"],"answer":0,"explanation":"It logs `[ 8, 4, 3, [ 8 ] ]`."}]
---
# Predict the Output: Modern array helpers #4

`flat`, `flatMap`, `Array.from`, `at`, `findLast` and `Object.groupBy`-style helpers replace many hand-written loops.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
