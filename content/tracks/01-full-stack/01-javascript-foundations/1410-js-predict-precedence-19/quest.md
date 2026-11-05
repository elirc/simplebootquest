---
slug: "js-predict-precedence-19"
title: "Predict the Output: Operator precedence #19"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log((7 + 8) * 2 - 9);\n```","options":["`22`","`21`","`2`","`8`"],"answer":1,"explanation":"It logs `21`."},{"prompt":"What does this log?\n\n```js\nconsole.log(60 / 8 / 2);\n```","options":["`3.75`","`4`","`4.75`","`2.75`"],"answer":0,"explanation":"It logs `3.75`."},{"prompt":"What does this log?\n\n```js\nconsole.log(5 * 9 - 4 * 9);\n```","options":["`19`","`10`","`9`","`1`"],"answer":2,"explanation":"It logs `9`."},{"prompt":"What does this log?\n\n```js\nconsole.log((7 + 3) * 2 - 9);\n```","options":["`11`","`3`","`1`","`12`"],"answer":0,"explanation":"It logs `11`."},{"prompt":"What does this log?\n\n```js\nconsole.log(2 * 9 - 3 * 9);\n```","options":["`-8`","`2`","`17`","`-9`"],"answer":3,"explanation":"It logs `-9`."}]
---
# Predict the Output: Operator precedence #19

`*`, `/` and `%` bind tighter than `+` and `-`, and operators of equal precedence run left to right.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
