---
slug: "js-predict-precedence-15"
title: "Predict the Output: Operator precedence #15"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log((8 + 9) * 2 - 2);\n```","options":["`33`","`17`","`2`","`32`"],"answer":3,"explanation":"It logs `32`."},{"prompt":"What does this log?\n\n```js\nconsole.log(2 + 8 % 6);\n```","options":["`1`","`3`","`4`","`5`"],"answer":2,"explanation":"It logs `4`."},{"prompt":"What does this log?\n\n```js\nconsole.log(5 + 6 % 4);\n```","options":["`6`","`8`","`1`","`7`"],"answer":3,"explanation":"It logs `7`."},{"prompt":"What does this log?\n\n```js\nconsole.log(4 ** 2 + 4);\n```","options":["`2`","`21`","`SyntaxError`","`20`"],"answer":3,"explanation":"It logs `20`."},{"prompt":"What does this log?\n\n```js\nconsole.log(2 * 7 - 2 * 7);\n```","options":["`14`","`0`","`1`","`-1`"],"answer":1,"explanation":"It logs `0`."}]
---
# Predict the Output: Operator precedence #15

`*`, `/` and `%` bind tighter than `+` and `-`, and operators of equal precedence run left to right.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
