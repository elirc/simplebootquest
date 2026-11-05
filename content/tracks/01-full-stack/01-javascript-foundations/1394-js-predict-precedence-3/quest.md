---
slug: "js-predict-precedence-3"
title: "Predict the Output: Operator precedence #3"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(6 ** 2 + 8);\n```","options":["`44`","`SyntaxError`","`2`","`45`"],"answer":0,"explanation":"It logs `44`."},{"prompt":"What does this log?\n\n```js\nconsole.log(9 - 9 - 6);\n```","options":["`-7`","`2`","`-6`","`-5`"],"answer":2,"explanation":"It logs `-6`."},{"prompt":"What does this log?\n\n```js\nconsole.log(2 - 3 - 7);\n```","options":["`-7`","`2`","`-8`","`-9`"],"answer":2,"explanation":"It logs `-8`."},{"prompt":"What does this log?\n\n```js\nconsole.log((3 + 9) * 9 - 6);\n```","options":["`102`","`103`","`15`","`2`"],"answer":0,"explanation":"It logs `102`."},{"prompt":"What does this log?\n\n```js\nconsole.log(3 - 9 - 6);\n```","options":["`3`","`-12`","`-13`","`-11`"],"answer":1,"explanation":"It logs `-12`."}]
---
# Predict the Output: Operator precedence #3

`*`, `/` and `%` bind tighter than `+` and `-`, and operators of equal precedence run left to right.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
