---
slug: "js-predict-precedence-16"
title: "Predict the Output: Operator precedence #16"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(7 ** 2 + 2);\n```","options":["`52`","`2`","`51`","`SyntaxError`"],"answer":2,"explanation":"It logs `51`."},{"prompt":"What does this log?\n\n```js\nconsole.log(6 + 6 % 6);\n```","options":["`7`","`5`","`1`","`6`"],"answer":3,"explanation":"It logs `6`."},{"prompt":"What does this log?\n\n```js\nconsole.log(20 / 8 / 2);\n```","options":["`1.25`","`4`","`2.25`","`0.25`"],"answer":0,"explanation":"It logs `1.25`."},{"prompt":"What does this log?\n\n```js\nconsole.log(8 + 9 * 8);\n```","options":["`81`","`2`","`25`","`80`"],"answer":3,"explanation":"It logs `80`."},{"prompt":"What does this log?\n\n```js\nconsole.log(4 + 7 % 2);\n```","options":["`6`","`1`","`5`","`4`"],"answer":2,"explanation":"It logs `5`."}]
---
# Predict the Output: Operator precedence #16

`*`, `/` and `%` bind tighter than `+` and `-`, and operators of equal precedence run left to right.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
