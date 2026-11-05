---
slug: "js-predict-precedence-4"
title: "Predict the Output: Operator precedence #4"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(7 - 6 - 8);\n```","options":["`-6`","`-7`","`2`","`-8`"],"answer":1,"explanation":"It logs `-7`."},{"prompt":"What does this log?\n\n```js\nconsole.log((5 + 8) * 4 - 9);\n```","options":["`43`","`44`","`8`","`2`"],"answer":0,"explanation":"It logs `43`."},{"prompt":"What does this log?\n\n```js\nconsole.log(5 * 2 - 5 * 3);\n```","options":["`2`","`-4`","`5`","`-5`"],"answer":3,"explanation":"It logs `-5`."},{"prompt":"What does this log?\n\n```js\nconsole.log(4 + 6 % 5);\n```","options":["`1`","`6`","`5`","`4`"],"answer":2,"explanation":"It logs `5`."},{"prompt":"What does this log?\n\n```js\nconsole.log(4 ** 2 + 5);\n```","options":["`SyntaxError`","`2`","`21`","`22`"],"answer":2,"explanation":"It logs `21`."}]
---
# Predict the Output: Operator precedence #4

`*`, `/` and `%` bind tighter than `+` and `-`, and operators of equal precedence run left to right.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
