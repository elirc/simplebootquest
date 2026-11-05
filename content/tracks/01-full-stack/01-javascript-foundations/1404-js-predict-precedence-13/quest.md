---
slug: "js-predict-precedence-13"
title: "Predict the Output: Operator precedence #13"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(7 + 2 % 5);\n```","options":["`10`","`9`","`8`","`1`"],"answer":1,"explanation":"It logs `9`."},{"prompt":"What does this log?\n\n```js\nconsole.log(2 * 4 - 7 * 2);\n```","options":["`-6`","`2`","`1`","`-5`"],"answer":0,"explanation":"It logs `-6`."},{"prompt":"What does this log?\n\n```js\nconsole.log(8 + 2 * 5);\n```","options":["`18`","`15`","`2`","`19`"],"answer":0,"explanation":"It logs `18`."},{"prompt":"What does this log?\n\n```js\nconsole.log(90 / 5 / 2);\n```","options":["`10`","`9`","`8`","`1`"],"answer":1,"explanation":"It logs `9`."},{"prompt":"What does this log?\n\n```js\nconsole.log(3 + 4 * 7);\n```","options":["`14`","`31`","`2`","`32`"],"answer":1,"explanation":"It logs `31`."}]
---
# Predict the Output: Operator precedence #13

`*`, `/` and `%` bind tighter than `+` and `-`, and operators of equal precedence run left to right.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
