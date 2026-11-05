---
slug: "js-predict-coercion-13"
title: "Predict the Output: Type coercion #13"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(\"8\" + 3);\n```","options":["`83`","`84`","`NaN`","`11`"],"answer":0,"explanation":"It logs `83`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"1\" - 2);\n```","options":["`0`","`12`","`-1`","`NaN`"],"answer":2,"explanation":"It logs `-1`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"9\" * \"3\");\n```","options":["`27`","`NaN`","`93`","`28`"],"answer":0,"explanation":"It logs `27`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"4\" + - \"3\");\n```","options":["`1`","`NaN`","`43`","`4-3`"],"answer":3,"explanation":"It logs `4-3`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"9\" + 6);\n```","options":["`15`","`96`","`NaN`","`97`"],"answer":1,"explanation":"It logs `96`."}]
---
# Predict the Output: Type coercion #13

`+` concatenates if either side is a string; `-`, `*` and `/` always convert to numbers. That asymmetry causes many bugs.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
