---
slug: "js-predict-precedence-25"
title: "Predict the Output: Operator precedence #25"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(3 ** 2 + 2);\n```","options":["`SyntaxError`","`12`","`2`","`11`"],"answer":3,"explanation":"It logs `11`."},{"prompt":"What does this log?\n\n```js\nconsole.log((7 + 4) * 4 - 3);\n```","options":["`42`","`2`","`12`","`41`"],"answer":3,"explanation":"It logs `41`."},{"prompt":"What does this log?\n\n```js\nconsole.log((7 + 5) * 4 - 2);\n```","options":["`46`","`2`","`14`","`47`"],"answer":0,"explanation":"It logs `46`."},{"prompt":"What does this log?\n\n```js\nconsole.log(9 * 8 - 4 * 9);\n```","options":["`2`","`36`","`22`","`37`"],"answer":1,"explanation":"It logs `36`."},{"prompt":"What does this log?\n\n```js\nconsole.log(9 * 9 - 6 * 4);\n```","options":["`2`","`57`","`16`","`58`"],"answer":1,"explanation":"It logs `57`."}]
---
# Predict the Output: Operator precedence #25

`*`, `/` and `%` bind tighter than `+` and `-`, and operators of equal precedence run left to right.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
