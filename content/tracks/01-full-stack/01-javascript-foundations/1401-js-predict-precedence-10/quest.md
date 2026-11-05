---
slug: "js-predict-precedence-10"
title: "Predict the Output: Operator precedence #10"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log((7 + 4) * 3 - 4);\n```","options":["`30`","`2`","`29`","`10`"],"answer":2,"explanation":"It logs `29`."},{"prompt":"What does this log?\n\n```js\nconsole.log(8 - 6 - 9);\n```","options":["`-8`","`-6`","`-7`","`2`"],"answer":2,"explanation":"It logs `-7`."},{"prompt":"What does this log?\n\n```js\nconsole.log(8 * 6 - 3 * 4);\n```","options":["`2`","`36`","`15`","`37`"],"answer":1,"explanation":"It logs `36`."},{"prompt":"What does this log?\n\n```js\nconsole.log(2 - 9 - 3);\n```","options":["`3`","`-10`","`-11`","`-9`"],"answer":1,"explanation":"It logs `-10`."},{"prompt":"What does this log?\n\n```js\nconsole.log(20 / 9 / 2);\n```","options":["`1.1111111111111112`","`18`","`2.111111111111111`","`0.11111111111111116`"],"answer":0,"explanation":"It logs `1.1111111111111112`."}]
---
# Predict the Output: Operator precedence #10

`*`, `/` and `%` bind tighter than `+` and `-`, and operators of equal precedence run left to right.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
