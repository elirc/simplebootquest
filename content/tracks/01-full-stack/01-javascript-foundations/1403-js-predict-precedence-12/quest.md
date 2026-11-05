---
slug: "js-predict-precedence-12"
title: "Predict the Output: Operator precedence #12"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(3 ** 2 + 5);\n```","options":["`2`","`SyntaxError`","`14`","`15`"],"answer":2,"explanation":"It logs `14`."},{"prompt":"What does this log?\n\n```js\nconsole.log((9 + 9) * 5 - 4);\n```","options":["`2`","`19`","`86`","`87`"],"answer":2,"explanation":"It logs `86`."},{"prompt":"What does this log?\n\n```js\nconsole.log(50 / 8 / 2);\n```","options":["`2.125`","`5`","`4.125`","`3.125`"],"answer":3,"explanation":"It logs `3.125`."},{"prompt":"What does this log?\n\n```js\nconsole.log(9 + 2 * 7);\n```","options":["`18`","`2`","`23`","`24`"],"answer":2,"explanation":"It logs `23`."},{"prompt":"What does this log?\n\n```js\nconsole.log(2 - 6 - 6);\n```","options":["`3`","`-11`","`-9`","`-10`"],"answer":3,"explanation":"It logs `-10`."}]
---
# Predict the Output: Operator precedence #12

`*`, `/` and `%` bind tighter than `+` and `-`, and operators of equal precedence run left to right.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
