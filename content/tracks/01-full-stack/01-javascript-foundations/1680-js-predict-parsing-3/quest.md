---
slug: "js-predict-parsing-3"
title: "Predict the Output: Parsing numbers #3"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(parseFloat(\"0x1A\"), parseInt(\"0x1A\"), parseFloat(\"12px\"), parseInt(\"12px\"));\n```","options":["`26 26 NaN NaN`","`26 26 12 12`","`0 26 12 12`","`0 0 12 12`"],"answer":2,"explanation":"It logs `0 26 12 12`."},{"prompt":"What does this log?\n\n```js\nconsole.log(parseInt(\"-5.5\"), Number(\"-5.5\"), parseInt(null), Number(null));\n```","options":["`-5 -5.5 NaN 0`","`-5.5 -5.5 0 0`","`-5.5 -5.5 NaN NaN`","`-5 -5 NaN NaN`"],"answer":0,"explanation":"It logs `-5 -5.5 NaN 0`."},{"prompt":"What does this log?\n\n```js\nconsole.log(parseFloat(\"3.75kg\"), parseInt(\"3.75kg\"), parseFloat(\"0x1A\"), parseInt(\"0x1A\"));\n```","options":["`3.75 3.75 0 0`","`3 3 26 26`","`NaN NaN 26 26`","`3.75 3 0 26`"],"answer":3,"explanation":"It logs `3.75 3 0 26`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Number(\"12px\"), parseFloat(\"12px\"), Number(\" 42 \"), parseFloat(\" 42 \"));\n```","options":["`NaN NaN 42 42`","`NaN 12 42 42`","`12 12 42 42`","`TypeError`"],"answer":1,"explanation":"It logs `NaN 12 42 42`."},{"prompt":"What does this log?\n\n```js\nconsole.log(parseFloat(\"1e3\"), parseInt(\"1e3\"), parseFloat(\"07\"), parseInt(\"07\"));\n```","options":["`1 1 7 7`","`TypeError`","`1000 1 7 7`","`1000 1000 7 7`"],"answer":2,"explanation":"It logs `1000 1 7 7`."}]
---
# Predict the Output: Parsing numbers #3

`Number("12px")` is `NaN` (the whole string must be numeric), but `parseInt("12px")` reads digits until it stops. `Number("")` is `0`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
