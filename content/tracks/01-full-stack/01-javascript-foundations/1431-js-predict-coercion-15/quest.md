---
slug: "js-predict-coercion-15"
title: "Predict the Output: Type coercion #15"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(\"2\" * \"4\");\n```","options":["`9`","`NaN`","`8`","`24`"],"answer":2,"explanation":"It logs `8`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"5\" + 5);\n```","options":["`10`","`55`","`NaN`","`56`"],"answer":1,"explanation":"It logs `55`."},{"prompt":"What does this log?\n\n```js\nconsole.log(true + 1);\n```","options":["`19`","`true1`","`3`","`2`"],"answer":3,"explanation":"It logs `2`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"2\" + - \"4\");\n```","options":["`2-4`","`NaN`","`-2`","`24`"],"answer":0,"explanation":"It logs `2-4`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"3\" + - \"4\");\n```","options":["`NaN`","`34`","`-1`","`3-4`"],"answer":3,"explanation":"It logs `3-4`."}]
---
# Predict the Output: Type coercion #15

`+` concatenates if either side is a string; `-`, `*` and `/` always convert to numbers. That asymmetry causes many bugs.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
