---
slug: "async-predict-array-modern-2"
title: "Predict the Output: Modern array helpers #2"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log([2, 9, 8, 8].flatMap((x) => [x, x * 2]).length);\n```","options":["`4`","`TypeError`","`undefined`","`8`"],"answer":3,"explanation":"It logs `8`."},{"prompt":"What does this log?\n\n```js\nconsole.log([7, 7, 2, 4].flatMap((x) => [x, x * 2]).length);\n```","options":["`TypeError`","`4`","`undefined`","`8`"],"answer":3,"explanation":"It logs `8`."},{"prompt":"What does this log?\n\n```js\nconsole.log([[7, 8], [8, [6]]].flat());\n```","options":["`undefined`","`TypeError`","`[ 7, 8, 8, 6 ]`","`[ 7, 8, 8, [ 6 ] ]`"],"answer":3,"explanation":"It logs `[ 7, 8, 8, [ 6 ] ]`."},{"prompt":"What does this log?\n\n```js\nconsole.log([[6, 2], [1, [2]]].flat());\n```","options":["`undefined`","`[ 6, 2, 1, 2 ]`","`TypeError`","`[ 6, 2, 1, [ 2 ] ]`"],"answer":3,"explanation":"It logs `[ 6, 2, 1, [ 2 ] ]`."},{"prompt":"What does this log?\n\n```js\nconsole.log([2, 6, 5, 9].flatMap((x) => [x, x * 2]).length);\n```","options":["`4`","`TypeError`","`8`","`undefined`"],"answer":2,"explanation":"It logs `8`."}]
---
# Predict the Output: Modern array helpers #2

`flat`, `flatMap`, `Array.from`, `at`, `findLast` and `Object.groupBy`-style helpers replace many hand-written loops.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
