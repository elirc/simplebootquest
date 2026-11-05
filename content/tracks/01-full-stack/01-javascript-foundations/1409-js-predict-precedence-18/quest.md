---
slug: "js-predict-precedence-18"
title: "Predict the Output: Operator precedence #18"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(6 ** 2 + 9);\n```","options":["`2`","`45`","`46`","`SyntaxError`"],"answer":1,"explanation":"It logs `45`."},{"prompt":"What does this log?\n\n```js\nconsole.log(9 ** 2 + 7);\n```","options":["`SyntaxError`","`88`","`89`","`2`"],"answer":1,"explanation":"It logs `88`."},{"prompt":"What does this log?\n\n```js\nconsole.log(8 + 2 % 7);\n```","options":["`2`","`11`","`10`","`9`"],"answer":2,"explanation":"It logs `10`."},{"prompt":"What does this log?\n\n```js\nconsole.log(8 * 8 - 7 * 9);\n```","options":["`2`","`18`","`0`","`1`"],"answer":3,"explanation":"It logs `1`."},{"prompt":"What does this log?\n\n```js\nconsole.log(6 - 3 - 2);\n```","options":["`0`","`2`","`TypeError`","`1`"],"answer":3,"explanation":"It logs `1`."}]
---
# Predict the Output: Operator precedence #18

`*`, `/` and `%` bind tighter than `+` and `-`, and operators of equal precedence run left to right.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
