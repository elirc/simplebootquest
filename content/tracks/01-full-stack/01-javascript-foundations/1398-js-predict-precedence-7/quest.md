---
slug: "js-predict-precedence-7"
title: "Predict the Output: Operator precedence #7"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(9 - 5 - 3);\n```","options":["`1`","`0`","`2`","`TypeError`"],"answer":0,"explanation":"It logs `1`."},{"prompt":"What does this log?\n\n```js\nconsole.log(8 * 7 - 8 * 4);\n```","options":["`11`","`2`","`24`","`25`"],"answer":2,"explanation":"It logs `24`."},{"prompt":"What does this log?\n\n```js\nconsole.log(2 ** 2 + 7);\n```","options":["`2`","`11`","`SyntaxError`","`12`"],"answer":1,"explanation":"It logs `11`."},{"prompt":"What does this log?\n\n```js\nconsole.log((9 + 4) * 8 - 5);\n```","options":["`99`","`100`","`16`","`2`"],"answer":0,"explanation":"It logs `99`."},{"prompt":"What does this log?\n\n```js\nconsole.log(70 / 3 / 2);\n```","options":["`18`","`11.666666666666666`","`10.666666666666666`","`12.666666666666666`"],"answer":1,"explanation":"It logs `11.666666666666666`."}]
---
# Predict the Output: Operator precedence #7

`*`, `/` and `%` bind tighter than `+` and `-`, and operators of equal precedence run left to right.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
