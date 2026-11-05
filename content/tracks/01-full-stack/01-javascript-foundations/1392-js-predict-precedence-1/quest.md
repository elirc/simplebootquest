---
slug: "js-predict-precedence-1"
title: "Predict the Output: Operator precedence #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log((2 + 8) * 5 - 9);\n```","options":["`6`","`42`","`41`","`2`"],"answer":2,"explanation":"It logs `41`."},{"prompt":"What does this log?\n\n```js\nconsole.log(2 * 9 - 6 * 7);\n```","options":["`-24`","`3`","`-23`","`12`"],"answer":0,"explanation":"It logs `-24`."},{"prompt":"What does this log?\n\n```js\nconsole.log(8 ** 2 + 8);\n```","options":["`2`","`73`","`72`","`SyntaxError`"],"answer":2,"explanation":"It logs `72`."},{"prompt":"What does this log?\n\n```js\nconsole.log(5 - 6 - 9);\n```","options":["`3`","`-10`","`-9`","`-11`"],"answer":1,"explanation":"It logs `-10`."},{"prompt":"What does this log?\n\n```js\nconsole.log(60 / 9 / 2);\n```","options":["`4.333333333333334`","`2.3333333333333335`","`18`","`3.3333333333333335`"],"answer":3,"explanation":"It logs `3.3333333333333335`."}]
---
# Predict the Output: Operator precedence #1

`*`, `/` and `%` bind tighter than `+` and `-`, and operators of equal precedence run left to right.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
