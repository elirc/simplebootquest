---
slug: "js-predict-precedence-23"
title: "Predict the Output: Operator precedence #23"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(3 + 6 % 7);\n```","options":["`8`","`10`","`1`","`9`"],"answer":3,"explanation":"It logs `9`."},{"prompt":"What does this log?\n\n```js\nconsole.log(3 - 6 - 9);\n```","options":["`-13`","`-12`","`-11`","`3`"],"answer":1,"explanation":"It logs `-12`."},{"prompt":"What does this log?\n\n```js\nconsole.log(9 - 4 - 6);\n```","options":["`-2`","`2`","`0`","`-1`"],"answer":3,"explanation":"It logs `-1`."},{"prompt":"What does this log?\n\n```js\nconsole.log(80 / 7 / 2);\n```","options":["`4.714285714285714`","`6.714285714285714`","`5.714285714285714`","`17`"],"answer":2,"explanation":"It logs `5.714285714285714`."},{"prompt":"What does this log?\n\n```js\nconsole.log((3 + 4) * 4 - 4);\n```","options":["`25`","`24`","`7`","`2`"],"answer":1,"explanation":"It logs `24`."}]
---
# Predict the Output: Operator precedence #23

`*`, `/` and `%` bind tighter than `+` and `-`, and operators of equal precedence run left to right.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
