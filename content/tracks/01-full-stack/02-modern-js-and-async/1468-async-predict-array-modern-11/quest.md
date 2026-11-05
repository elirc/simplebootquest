---
slug: "async-predict-array-modern-11"
title: "Predict the Output: Modern array helpers #11"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log([1, 4, 7, 5].findLast((x) => x % 2 === 1));\n```","options":["`5`","`TypeError`","`undefined`","`1`"],"answer":0,"explanation":"It logs `5`."},{"prompt":"What does this log?\n\n```js\nconsole.log([4, 3, 9, 5].findLast((x) => x % 2 === 1));\n```","options":["`5`","`TypeError`","`undefined`","`3`"],"answer":0,"explanation":"It logs `5`."},{"prompt":"What does this log?\n\n```js\nconsole.log([4, 7, 2, 3].findLast((x) => x % 2 === 1));\n```","options":["`7`","`undefined`","`TypeError`","`3`"],"answer":3,"explanation":"It logs `3`."},{"prompt":"What does this log?\n\n```js\nconsole.log([[8, 6], [8, [5]]].flat());\n```","options":["`[ 8, 6, 8, 5 ]`","`TypeError`","`undefined`","`[ 8, 6, 8, [ 5 ] ]`"],"answer":3,"explanation":"It logs `[ 8, 6, 8, [ 5 ] ]`."},{"prompt":"What does this log?\n\n```js\nconsole.log([[2, 6], [6, [4]]].flat());\n```","options":["`[ 2, 6, 6, [ 4 ] ]`","`undefined`","`[ 2, 6, 6, 4 ]`","`TypeError`"],"answer":0,"explanation":"It logs `[ 2, 6, 6, [ 4 ] ]`."}]
---
# Predict the Output: Modern array helpers #11

`flat`, `flatMap`, `Array.from`, `at`, `findLast` and `Object.groupBy`-style helpers replace many hand-written loops.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
