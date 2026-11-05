---
slug: "async-predict-array-modern-1"
title: "Predict the Output: Modern array helpers #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log([[3, 9], [4, [2]]].flat());\n```","options":["`[ 3, 9, 4, 2 ]`","`undefined`","`[ 3, 9, 4, [ 2 ] ]`","`TypeError`"],"answer":2,"explanation":"It logs `[ 3, 9, 4, [ 2 ] ]`."},{"prompt":"What does this log?\n\n```js\nconsole.log([\"10\", \"10\", \"10\"].map(parseInt));\n```","options":["`[ 10, 10, 10 ]`","`undefined`","`[ 10, NaN, 2 ]`","`TypeError`"],"answer":2,"explanation":"It logs `[ 10, NaN, 2 ]`."},{"prompt":"What does this log?\n\n```js\nconsole.log([6, 7, 3, 8].flatMap((x) => [x, x * 2]).length);\n```","options":["`4`","`TypeError`","`8`","`undefined`"],"answer":2,"explanation":"It logs `8`."},{"prompt":"What does this log?\n\n```js\nconsole.log([[1, 5], [9, [9]]].flat());\n```","options":["`[ 1, 5, 9, 9 ]`","`undefined`","`[ 1, 5, 9, [ 9 ] ]`","`TypeError`"],"answer":2,"explanation":"It logs `[ 1, 5, 9, [ 9 ] ]`."},{"prompt":"What does this log?\n\n```js\nconsole.log([[3, 7], [6, [9]]].flat());\n```","options":["`undefined`","`[ 3, 7, 6, [ 9 ] ]`","`TypeError`","`[ 3, 7, 6, 9 ]`"],"answer":1,"explanation":"It logs `[ 3, 7, 6, [ 9 ] ]`."}]
---
# Predict the Output: Modern array helpers #1

`flat`, `flatMap`, `Array.from`, `at`, `findLast` and `Object.groupBy`-style helpers replace many hand-written loops.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
