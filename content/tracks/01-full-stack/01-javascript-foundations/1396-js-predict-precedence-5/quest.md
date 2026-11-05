---
slug: "js-predict-precedence-5"
title: "Predict the Output: Operator precedence #5"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(4 + 9 * 8);\n```","options":["`77`","`2`","`21`","`76`"],"answer":3,"explanation":"It logs `76`."},{"prompt":"What does this log?\n\n```js\nconsole.log(9 ** 2 + 4);\n```","options":["`85`","`86`","`SyntaxError`","`2`"],"answer":0,"explanation":"It logs `85`."},{"prompt":"What does this log?\n\n```js\nconsole.log(8 * 4 - 8 * 8);\n```","options":["`-31`","`12`","`-32`","`3`"],"answer":2,"explanation":"It logs `-32`."},{"prompt":"What does this log?\n\n```js\nconsole.log(6 - 5 - 7);\n```","options":["`2`","`-6`","`-7`","`-5`"],"answer":1,"explanation":"It logs `-6`."},{"prompt":"What does this log?\n\n```js\nconsole.log(70 / 2 / 2);\n```","options":["`18.5`","`17.5`","`16.5`","`4`"],"answer":1,"explanation":"It logs `17.5`."}]
---
# Predict the Output: Operator precedence #5

`*`, `/` and `%` bind tighter than `+` and `-`, and operators of equal precedence run left to right.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
