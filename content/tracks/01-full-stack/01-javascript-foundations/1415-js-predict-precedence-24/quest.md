---
slug: "js-predict-precedence-24"
title: "Predict the Output: Operator precedence #24"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log((6 + 7) * 4 - 6);\n```","options":["`46`","`11`","`2`","`47`"],"answer":0,"explanation":"It logs `46`."},{"prompt":"What does this log?\n\n```js\nconsole.log(6 + 2 * 6);\n```","options":["`19`","`2`","`18`","`14`"],"answer":2,"explanation":"It logs `18`."},{"prompt":"What does this log?\n\n```js\nconsole.log(2 * 7 - 6 * 3);\n```","options":["`6`","`-3`","`-4`","`2`"],"answer":2,"explanation":"It logs `-4`."},{"prompt":"What does this log?\n\n```js\nconsole.log(9 - 9 - 9);\n```","options":["`-8`","`-9`","`2`","`-10`"],"answer":1,"explanation":"It logs `-9`."},{"prompt":"What does this log?\n\n```js\nconsole.log(9 - 7 - 8);\n```","options":["`-5`","`-7`","`2`","`-6`"],"answer":3,"explanation":"It logs `-6`."}]
---
# Predict the Output: Operator precedence #24

`*`, `/` and `%` bind tighter than `+` and `-`, and operators of equal precedence run left to right.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
