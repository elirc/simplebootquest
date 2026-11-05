---
slug: "js-predict-precedence-22"
title: "Predict the Output: Operator precedence #22"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(7 - 3 - 5);\n```","options":["`2`","`-2`","`0`","`-1`"],"answer":3,"explanation":"It logs `-1`."},{"prompt":"What does this log?\n\n```js\nconsole.log(9 * 3 - 7 * 4);\n```","options":["`0`","`2`","`-1`","`9`"],"answer":2,"explanation":"It logs `-1`."},{"prompt":"What does this log?\n\n```js\nconsole.log(7 ** 2 + 4);\n```","options":["`SyntaxError`","`54`","`53`","`2`"],"answer":2,"explanation":"It logs `53`."},{"prompt":"What does this log?\n\n```js\nconsole.log(8 + 2 % 3);\n```","options":["`11`","`10`","`9`","`2`"],"answer":1,"explanation":"It logs `10`."},{"prompt":"What does this log?\n\n```js\nconsole.log(7 * 3 - 5 * 9);\n```","options":["`-24`","`14`","`3`","`-23`"],"answer":0,"explanation":"It logs `-24`."}]
---
# Predict the Output: Operator precedence #22

`*`, `/` and `%` bind tighter than `+` and `-`, and operators of equal precedence run left to right.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
