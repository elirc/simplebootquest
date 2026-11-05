---
slug: "js-predict-coercion-20"
title: "Predict the Output: Type coercion #20"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(3 + 3 + \"4\");\n```","options":["`65`","`334`","`64`","`33`"],"answer":2,"explanation":"It logs `64`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"4\" + - \"2\");\n```","options":["`2`","`42`","`4-2`","`NaN`"],"answer":2,"explanation":"It logs `4-2`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"2\" - 8);\n```","options":["`-6`","`28`","`-5`","`NaN`"],"answer":0,"explanation":"It logs `-6`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"9\" - 7);\n```","options":["`3`","`NaN`","`2`","`97`"],"answer":2,"explanation":"It logs `2`."},{"prompt":"What does this log?\n\n```js\nconsole.log(null + 1);\n```","options":["`1`","`19`","`NaN`","`2`"],"answer":0,"explanation":"It logs `1`."}]
---
# Predict the Output: Type coercion #20

`+` concatenates if either side is a string; `-`, `*` and `/` always convert to numbers. That asymmetry causes many bugs.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
