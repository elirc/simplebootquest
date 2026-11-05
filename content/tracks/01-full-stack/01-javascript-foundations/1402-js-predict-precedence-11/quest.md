---
slug: "js-predict-precedence-11"
title: "Predict the Output: Operator precedence #11"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(4 * 3 - 4 * 6);\n```","options":["`3`","`-11`","`-12`","`9`"],"answer":2,"explanation":"It logs `-12`."},{"prompt":"What does this log?\n\n```js\nconsole.log((9 + 7) * 5 - 4);\n```","options":["`77`","`76`","`17`","`2`"],"answer":1,"explanation":"It logs `76`."},{"prompt":"What does this log?\n\n```js\nconsole.log(5 ** 2 + 8);\n```","options":["`SyntaxError`","`2`","`34`","`33`"],"answer":3,"explanation":"It logs `33`."},{"prompt":"What does this log?\n\n```js\nconsole.log(9 ** 2 + 9);\n```","options":["`90`","`SyntaxError`","`91`","`2`"],"answer":0,"explanation":"It logs `90`."},{"prompt":"What does this log?\n\n```js\nconsole.log(2 * 5 - 6 * 5);\n```","options":["`-19`","`6`","`-20`","`3`"],"answer":2,"explanation":"It logs `-20`."}]
---
# Predict the Output: Operator precedence #11

`*`, `/` and `%` bind tighter than `+` and `-`, and operators of equal precedence run left to right.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
