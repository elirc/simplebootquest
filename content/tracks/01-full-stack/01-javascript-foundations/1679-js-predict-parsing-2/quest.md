---
slug: "js-predict-parsing-2"
title: "Predict the Output: Parsing numbers #2"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(parseFloat(\"1e3\"), parseInt(\"1e3\"), parseFloat(\"3.75kg\"), parseInt(\"3.75kg\"));\n```","options":["`1000 1000 NaN NaN`","`1000 1000 3.75 3.75`","`1 1 3 3`","`1000 1 3.75 3`"],"answer":3,"explanation":"It logs `1000 1 3.75 3`."},{"prompt":"What does this log?\n\n```js\nconsole.log(parseInt(\"07\"), Number(\"07\"), parseInt(\"1e3\"), Number(\"1e3\"));\n```","options":["`7 7 1 1000`","`7 7 1 1`","`TypeError`","`7 7 1000 1000`"],"answer":0,"explanation":"It logs `7 7 1 1000`."},{"prompt":"What does this log?\n\n```js\nconsole.log(parseInt(null), parseFloat(null), parseInt(\"-5.5\"), parseFloat(\"-5.5\"));\n```","options":["`NaN NaN -5 -5.5`","`NaN NaN -5.5 -5.5`","`0 0 -5.5 -5.5`","`NaN NaN -5 -5`"],"answer":0,"explanation":"It logs `NaN NaN -5 -5.5`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Number(\"1e3\"), parseInt(\"1e3\"), Number(\"12px\"), parseInt(\"12px\"));\n```","options":["`1 1 12 12`","`1000 1000 NaN NaN`","`1000 1 NaN 12`","`1000 1000 12 12`"],"answer":2,"explanation":"It logs `1000 1 NaN 12`."},{"prompt":"What does this log?\n\n```js\nconsole.log(parseInt(\"0x1A\"), parseFloat(\"0x1A\"), parseInt(\"-5.5\"), parseFloat(\"-5.5\"));\n```","options":["`26 0 -5 -5.5`","`26 26 -5.5 -5.5`","`26 26 -5 -5`","`0 0 -5.5 -5.5`"],"answer":0,"explanation":"It logs `26 0 -5 -5.5`."}]
---
# Predict the Output: Parsing numbers #2

`Number("12px")` is `NaN` (the whole string must be numeric), but `parseInt("12px")` reads digits until it stops. `Number("")` is `0`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
