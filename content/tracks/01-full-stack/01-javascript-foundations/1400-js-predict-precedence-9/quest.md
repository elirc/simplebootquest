---
slug: "js-predict-precedence-9"
title: "Predict the Output: Operator precedence #9"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(40 / 9 / 2);\n```","options":["`3.2222222222222223`","`18`","`2.2222222222222223`","`1.2222222222222223`"],"answer":2,"explanation":"It logs `2.2222222222222223`."},{"prompt":"What does this log?\n\n```js\nconsole.log(7 + 9 % 5);\n```","options":["`10`","`2`","`12`","`11`"],"answer":3,"explanation":"It logs `11`."},{"prompt":"What does this log?\n\n```js\nconsole.log((8 + 4) * 8 - 9);\n```","options":["`87`","`88`","`2`","`11`"],"answer":0,"explanation":"It logs `87`."},{"prompt":"What does this log?\n\n```js\nconsole.log(80 / 5 / 2);\n```","options":["`7`","`8`","`1`","`9`"],"answer":1,"explanation":"It logs `8`."},{"prompt":"What does this log?\n\n```js\nconsole.log(6 * 4 - 8 * 9);\n```","options":["`-47`","`3`","`-48`","`11`"],"answer":2,"explanation":"It logs `-48`."}]
---
# Predict the Output: Operator precedence #9

`*`, `/` and `%` bind tighter than `+` and `-`, and operators of equal precedence run left to right.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
