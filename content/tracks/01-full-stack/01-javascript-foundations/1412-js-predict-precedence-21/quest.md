---
slug: "js-predict-precedence-21"
title: "Predict the Output: Operator precedence #21"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(90 / 8 / 2);\n```","options":["`5.625`","`6.625`","`5`","`4.625`"],"answer":0,"explanation":"It logs `5.625`."},{"prompt":"What does this log?\n\n```js\nconsole.log(9 + 4 * 8);\n```","options":["`2`","`21`","`42`","`41`"],"answer":3,"explanation":"It logs `41`."},{"prompt":"What does this log?\n\n```js\nconsole.log((7 + 2) * 9 - 6);\n```","options":["`75`","`12`","`2`","`76`"],"answer":0,"explanation":"It logs `75`."},{"prompt":"What does this log?\n\n```js\nconsole.log(4 * 3 - 5 * 4);\n```","options":["`-7`","`2`","`-8`","`6`"],"answer":2,"explanation":"It logs `-8`."},{"prompt":"What does this log?\n\n```js\nconsole.log(2 + 6 % 8);\n```","options":["`1`","`9`","`8`","`7`"],"answer":2,"explanation":"It logs `8`."}]
---
# Predict the Output: Operator precedence #21

`*`, `/` and `%` bind tighter than `+` and `-`, and operators of equal precedence run left to right.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
