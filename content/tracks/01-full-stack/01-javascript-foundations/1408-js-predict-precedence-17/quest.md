---
slug: "js-predict-precedence-17"
title: "Predict the Output: Operator precedence #17"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log((8 + 3) * 2 - 5);\n```","options":["`8`","`17`","`18`","`1`"],"answer":1,"explanation":"It logs `17`."},{"prompt":"What does this log?\n\n```js\nconsole.log(3 + 8 * 2);\n```","options":["`2`","`20`","`19`","`13`"],"answer":2,"explanation":"It logs `19`."},{"prompt":"What does this log?\n\n```js\nconsole.log(90 / 4 / 2);\n```","options":["`10.25`","`11.25`","`5`","`12.25`"],"answer":1,"explanation":"It logs `11.25`."},{"prompt":"What does this log?\n\n```js\nconsole.log((9 + 9) * 4 - 4);\n```","options":["`68`","`18`","`69`","`2`"],"answer":0,"explanation":"It logs `68`."},{"prompt":"What does this log?\n\n```js\nconsole.log(7 * 5 - 5 * 7);\n```","options":["`0`","`14`","`-1`","`1`"],"answer":0,"explanation":"It logs `0`."}]
---
# Predict the Output: Operator precedence #17

`*`, `/` and `%` bind tighter than `+` and `-`, and operators of equal precedence run left to right.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
