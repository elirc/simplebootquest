---
slug: "js-predict-parsing-4"
title: "Predict the Output: Parsing numbers #4"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(Number(\"abc\"), parseInt(\"abc\"), Number(\"\"), parseInt(\"\"));\n```","options":["`TypeError`","`NaN NaN NaN NaN`","`NaN NaN 0 NaN`","`NaN NaN 0 0`"],"answer":2,"explanation":"It logs `NaN NaN 0 NaN`."},{"prompt":"What does this log?\n\n```js\nconsole.log(parseFloat(\"0x1A\"), parseInt(\"0x1A\"), parseFloat(\"1e3\"), parseInt(\"1e3\"));\n```","options":["`26 26 1 1`","`0 26 1000 1`","`0 0 1000 1000`","`26 26 1000 1000`"],"answer":1,"explanation":"It logs `0 26 1000 1`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Number(\"12px\"), parseFloat(\"12px\"), Number(\"-5.5\"), parseFloat(\"-5.5\"));\n```","options":["`NaN NaN -5.5 -5.5`","`12 12 -5 -5`","`12 12 -5.5 -5.5`","`NaN 12 -5.5 -5.5`"],"answer":3,"explanation":"It logs `NaN 12 -5.5 -5.5`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Number(\"-5.5\"), parseInt(\"-5.5\"), Number(\"1e3\"), parseInt(\"1e3\"));\n```","options":["`-5.5 -5 1000 1`","`-5 -5 1 1`","`TypeError`","`-5.5 -5.5 1000 1000`"],"answer":0,"explanation":"It logs `-5.5 -5 1000 1`."},{"prompt":"What does this log?\n\n```js\nconsole.log(parseFloat(\"1e3\"), parseInt(\"1e3\"), parseFloat(\"-5.5\"), parseInt(\"-5.5\"));\n```","options":["`1 1 -5 -5`","`1000 1 -5.5 -5`","`TypeError`","`1000 1000 -5.5 -5.5`"],"answer":1,"explanation":"It logs `1000 1 -5.5 -5`."}]
---
# Predict the Output: Parsing numbers #4

`Number("12px")` is `NaN` (the whole string must be numeric), but `parseInt("12px")` reads digits until it stops. `Number("")` is `0`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
