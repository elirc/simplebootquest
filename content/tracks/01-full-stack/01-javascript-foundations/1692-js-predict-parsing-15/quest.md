---
slug: "js-predict-parsing-15"
title: "Predict the Output: Parsing numbers #15"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(Number(\"3.75kg\"), parseInt(\"3.75kg\"), Number(\"07\"), parseInt(\"07\"));\n```","options":["`NaN 3 7 7`","`3 3 7 7`","`3.75 3.75 7 7`","`NaN NaN 7 7`"],"answer":0,"explanation":"It logs `NaN 3 7 7`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Number(\"12px\"), parseFloat(\"12px\"), Number(null), parseFloat(null));\n```","options":["`12 12 NaN NaN`","`NaN 12 0 NaN`","`NaN NaN 0 0`","`TypeError`"],"answer":1,"explanation":"It logs `NaN 12 0 NaN`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Number(\"\"), parseFloat(\"\"), Number(\"07\"), parseFloat(\"07\"));\n```","options":["`0 NaN 7 7`","`TypeError`","`NaN NaN 7 7`","`0 0 7 7`"],"answer":0,"explanation":"It logs `0 NaN 7 7`."},{"prompt":"What does this log?\n\n```js\nconsole.log(parseInt(\"abc\"), Number(\"abc\"), parseInt(null), Number(null));\n```","options":["`NaN NaN 0 0`","`NaN NaN NaN NaN`","`NaN NaN NaN 0`","`TypeError`"],"answer":2,"explanation":"It logs `NaN NaN NaN 0`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Number(\"0x1A\"), parseFloat(\"0x1A\"), Number(\"abc\"), parseFloat(\"abc\"));\n```","options":["`26 0 NaN NaN`","`26 26 NaN NaN`","`0 0 NaN NaN`","`TypeError`"],"answer":0,"explanation":"It logs `26 0 NaN NaN`."}]
---
# Predict the Output: Parsing numbers #15

`Number("12px")` is `NaN` (the whole string must be numeric), but `parseInt("12px")` reads digits until it stops. `Number("")` is `0`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
