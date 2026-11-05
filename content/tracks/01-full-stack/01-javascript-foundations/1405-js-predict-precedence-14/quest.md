---
slug: "js-predict-precedence-14"
title: "Predict the Output: Operator precedence #14"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log((3 + 5) * 9 - 8);\n```","options":["`65`","`64`","`2`","`9`"],"answer":1,"explanation":"It logs `64`."},{"prompt":"What does this log?\n\n```js\nconsole.log(6 + 7 * 3);\n```","options":["`28`","`16`","`27`","`2`"],"answer":2,"explanation":"It logs `27`."},{"prompt":"What does this log?\n\n```js\nconsole.log((3 + 5) * 2 - 5);\n```","options":["`1`","`11`","`12`","`5`"],"answer":1,"explanation":"It logs `11`."},{"prompt":"What does this log?\n\n```js\nconsole.log((4 + 6) * 5 - 5);\n```","options":["`10`","`45`","`2`","`46`"],"answer":1,"explanation":"It logs `45`."},{"prompt":"What does this log?\n\n```js\nconsole.log(7 * 5 - 3 * 4);\n```","options":["`2`","`24`","`23`","`13`"],"answer":2,"explanation":"It logs `23`."}]
---
# Predict the Output: Operator precedence #14

`*`, `/` and `%` bind tighter than `+` and `-`, and operators of equal precedence run left to right.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
