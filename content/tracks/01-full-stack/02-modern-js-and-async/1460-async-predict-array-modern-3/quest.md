---
slug: "async-predict-array-modern-3"
title: "Predict the Output: Modern array helpers #3"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log([5, 5, 7, 1].flatMap((x) => [x, x * 2]).length);\n```","options":["`undefined`","`TypeError`","`4`","`8`"],"answer":3,"explanation":"It logs `8`."},{"prompt":"What does this log?\n\n```js\nconsole.log([[8, 2], [6, [4]]].flat());\n```","options":["`[ 8, 2, 6, 4 ]`","`undefined`","`[ 8, 2, 6, [ 4 ] ]`","`TypeError`"],"answer":2,"explanation":"It logs `[ 8, 2, 6, [ 4 ] ]`."},{"prompt":"What does this log?\n\n```js\nconsole.log([4, 7, 4, 6].flatMap((x) => [x, x * 2]).length);\n```","options":["`TypeError`","`undefined`","`4`","`8`"],"answer":3,"explanation":"It logs `8`."},{"prompt":"What does this log?\n\n```js\nconsole.log([9, 4, 4, 4].flatMap((x) => [x, x * 2]).length);\n```","options":["`TypeError`","`4`","`undefined`","`8`"],"answer":3,"explanation":"It logs `8`."},{"prompt":"What does this log?\n\n```js\nconsole.log([[8, 9], [5, [4]]].flat());\n```","options":["`TypeError`","`[ 8, 9, 5, [ 4 ] ]`","`[ 8, 9, 5, 4 ]`","`undefined`"],"answer":1,"explanation":"It logs `[ 8, 9, 5, [ 4 ] ]`."}]
---
# Predict the Output: Modern array helpers #3

`flat`, `flatMap`, `Array.from`, `at`, `findLast` and `Object.groupBy`-style helpers replace many hand-written loops.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
