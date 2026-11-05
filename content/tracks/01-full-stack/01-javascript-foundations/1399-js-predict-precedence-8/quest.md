---
slug: "js-predict-precedence-8"
title: "Predict the Output: Operator precedence #8"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(7 - 7 - 7);\n```","options":["`-7`","`-6`","`-8`","`2`"],"answer":0,"explanation":"It logs `-7`."},{"prompt":"What does this log?\n\n```js\nconsole.log(9 + 2 % 7);\n```","options":["`12`","`2`","`10`","`11`"],"answer":3,"explanation":"It logs `11`."},{"prompt":"What does this log?\n\n```js\nconsole.log((3 + 2) * 5 - 2);\n```","options":["`8`","`24`","`23`","`2`"],"answer":2,"explanation":"It logs `23`."},{"prompt":"What does this log?\n\n```js\nconsole.log(2 + 6 % 9);\n```","options":["`8`","`1`","`9`","`7`"],"answer":0,"explanation":"It logs `8`."},{"prompt":"What does this log?\n\n```js\nconsole.log(2 + 2 * 6);\n```","options":["`2`","`14`","`10`","`15`"],"answer":1,"explanation":"It logs `14`."}]
---
# Predict the Output: Operator precedence #8

`*`, `/` and `%` bind tighter than `+` and `-`, and operators of equal precedence run left to right.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
