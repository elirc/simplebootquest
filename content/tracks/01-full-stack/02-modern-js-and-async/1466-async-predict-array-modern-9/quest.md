---
slug: "async-predict-array-modern-9"
title: "Predict the Output: Modern array helpers #9"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log([6, 1, 3, 4].flatMap((x) => [x, x * 2]).length);\n```","options":["`undefined`","`4`","`8`","`TypeError`"],"answer":2,"explanation":"It logs `8`."},{"prompt":"What does this log?\n\n```js\nconsole.log([[7, 4], [6, [3]]].flat());\n```","options":["`[ 7, 4, 6, [ 3 ] ]`","`TypeError`","`[ 7, 4, 6, 3 ]`","`undefined`"],"answer":0,"explanation":"It logs `[ 7, 4, 6, [ 3 ] ]`."},{"prompt":"What does this log?\n\n```js\nconsole.log([[8, 6], [1, [8]]].flat());\n```","options":["`undefined`","`[ 8, 6, 1, 8 ]`","`[ 8, 6, 1, [ 8 ] ]`","`TypeError`"],"answer":2,"explanation":"It logs `[ 8, 6, 1, [ 8 ] ]`."},{"prompt":"What does this log?\n\n```js\nconsole.log([[5, 3], [5, [8]]].flat());\n```","options":["`TypeError`","`undefined`","`[ 5, 3, 5, [ 8 ] ]`","`[ 5, 3, 5, 8 ]`"],"answer":2,"explanation":"It logs `[ 5, 3, 5, [ 8 ] ]`."},{"prompt":"What does this log?\n\n```js\nconsole.log([[3, 2], [4, [2]]].flat());\n```","options":["`undefined`","`[ 3, 2, 4, [ 2 ] ]`","`TypeError`","`[ 3, 2, 4, 2 ]`"],"answer":1,"explanation":"It logs `[ 3, 2, 4, [ 2 ] ]`."}]
---
# Predict the Output: Modern array helpers #9

`flat`, `flatMap`, `Array.from`, `at`, `findLast` and `Object.groupBy`-style helpers replace many hand-written loops.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
