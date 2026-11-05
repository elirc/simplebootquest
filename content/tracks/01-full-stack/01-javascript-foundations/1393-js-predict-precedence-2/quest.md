---
slug: "js-predict-precedence-2"
title: "Predict the Output: Operator precedence #2"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(8 - 9 - 8);\n```","options":["`-9`","`-8`","`2`","`-10`"],"answer":0,"explanation":"It logs `-9`."},{"prompt":"What does this log?\n\n```js\nconsole.log(4 ** 2 + 2);\n```","options":["`18`","`2`","`SyntaxError`","`19`"],"answer":0,"explanation":"It logs `18`."},{"prompt":"What does this log?\n\n```js\nconsole.log(2 * 9 - 6 * 5);\n```","options":["`-12`","`-11`","`10`","`3`"],"answer":0,"explanation":"It logs `-12`."},{"prompt":"What does this log?\n\n```js\nconsole.log(2 + 4 % 4);\n```","options":["`1`","`3`","`TypeError`","`2`"],"answer":3,"explanation":"It logs `2`."},{"prompt":"What does this log?\n\n```js\nconsole.log(5 * 4 - 6 * 8);\n```","options":["`11`","`-27`","`3`","`-28`"],"answer":3,"explanation":"It logs `-28`."}]
---
# Predict the Output: Operator precedence #2

`*`, `/` and `%` bind tighter than `+` and `-`, and operators of equal precedence run left to right.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
