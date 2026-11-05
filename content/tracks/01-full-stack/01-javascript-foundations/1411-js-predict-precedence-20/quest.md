---
slug: "js-predict-precedence-20"
title: "Predict the Output: Operator precedence #20"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(8 ** 2 + 6);\n```","options":["`2`","`71`","`SyntaxError`","`70`"],"answer":3,"explanation":"It logs `70`."},{"prompt":"What does this log?\n\n```js\nconsole.log(2 + 2 * 2);\n```","options":["`6`","`7`","`5`","`1`"],"answer":0,"explanation":"It logs `6`."},{"prompt":"What does this log?\n\n```js\nconsole.log(8 * 4 - 2 * 2);\n```","options":["`2`","`29`","`28`","`12`"],"answer":2,"explanation":"It logs `28`."},{"prompt":"What does this log?\n\n```js\nconsole.log(8 - 6 - 7);\n```","options":["`-6`","`2`","`-5`","`-4`"],"answer":2,"explanation":"It logs `-5`."},{"prompt":"What does this log?\n\n```js\nconsole.log((9 + 9) * 4 - 8);\n```","options":["`14`","`65`","`64`","`2`"],"answer":2,"explanation":"It logs `64`."}]
---
# Predict the Output: Operator precedence #20

`*`, `/` and `%` bind tighter than `+` and `-`, and operators of equal precedence run left to right.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
