---
slug: "js-predict-coercion-16"
title: "Predict the Output: Type coercion #16"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(true + 6);\n```","options":["`true6`","`67`","`8`","`7`"],"answer":3,"explanation":"It logs `7`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"8\" - 2);\n```","options":["`82`","`7`","`6`","`NaN`"],"answer":2,"explanation":"It logs `6`."},{"prompt":"What does this log?\n\n```js\nconsole.log(2 + 9 + \"4\");\n```","options":["`114`","`29`","`294`","`115`"],"answer":0,"explanation":"It logs `114`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"5\" + - \"1\");\n```","options":["`51`","`4`","`5-1`","`NaN`"],"answer":2,"explanation":"It logs `5-1`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"9\" + - \"4\");\n```","options":["`NaN`","`94`","`9-4`","`5`"],"answer":2,"explanation":"It logs `9-4`."}]
---
# Predict the Output: Type coercion #16

`+` concatenates if either side is a string; `-`, `*` and `/` always convert to numbers. That asymmetry causes many bugs.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
