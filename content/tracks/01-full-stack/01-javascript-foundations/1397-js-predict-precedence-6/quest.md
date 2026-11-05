---
slug: "js-predict-precedence-6"
title: "Predict the Output: Operator precedence #6"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(3 ** 2 + 9);\n```","options":["`2`","`SyntaxError`","`19`","`18`"],"answer":3,"explanation":"It logs `18`."},{"prompt":"What does this log?\n\n```js\nconsole.log(8 + 5 % 3);\n```","options":["`11`","`2`","`9`","`10`"],"answer":3,"explanation":"It logs `10`."},{"prompt":"What does this log?\n\n```js\nconsole.log(3 ** 2 + 4);\n```","options":["`14`","`2`","`SyntaxError`","`13`"],"answer":3,"explanation":"It logs `13`."},{"prompt":"What does this log?\n\n```js\nconsole.log(80 / 4 / 2);\n```","options":["`2`","`9`","`11`","`10`"],"answer":3,"explanation":"It logs `10`."},{"prompt":"What does this log?\n\n```js\nconsole.log((9 + 4) * 4 - 2);\n```","options":["`51`","`2`","`15`","`50`"],"answer":3,"explanation":"It logs `50`."}]
---
# Predict the Output: Operator precedence #6

`*`, `/` and `%` bind tighter than `+` and `-`, and operators of equal precedence run left to right.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
