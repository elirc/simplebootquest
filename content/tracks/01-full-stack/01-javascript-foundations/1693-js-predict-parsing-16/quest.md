---
slug: "js-predict-parsing-16"
title: "Predict the Output: Parsing numbers #16"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(parseFloat(\"0x1A\"), parseInt(\"0x1A\"), parseFloat(null), parseInt(null));\n```","options":["`0 0 NaN NaN`","`0 26 NaN NaN`","`26 26 NaN NaN`","`26 26 0 0`"],"answer":1,"explanation":"It logs `0 26 NaN NaN`."},{"prompt":"What does this log?\n\n```js\nconsole.log(parseInt(\"abc\"), Number(\"abc\"), parseInt(\"12px\"), Number(\"12px\"));\n```","options":["`NaN NaN 12 NaN`","`TypeError`","`NaN NaN 12 12`","`NaN NaN NaN NaN`"],"answer":0,"explanation":"It logs `NaN NaN 12 NaN`."},{"prompt":"What does this log?\n\n```js\nconsole.log(parseFloat(\"1e3\"), parseInt(\"1e3\"), parseFloat(\"0x1A\"), parseInt(\"0x1A\"));\n```","options":["`1000 1000 26 26`","`1 1 26 26`","`1000 1000 0 0`","`1000 1 0 26`"],"answer":3,"explanation":"It logs `1000 1 0 26`."},{"prompt":"What does this log?\n\n```js\nconsole.log(parseFloat(\"12px\"), Number(\"12px\"), parseFloat(\"1e3\"), Number(\"1e3\"));\n```","options":["`12 12 1000 1000`","`12 NaN 1000 1000`","`NaN NaN 1000 1000`","`12 12 1 1`"],"answer":1,"explanation":"It logs `12 NaN 1000 1000`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Number(\"\"), parseFloat(\"\"), Number(\"-5.5\"), parseFloat(\"-5.5\"));\n```","options":["`0 0 -5.5 -5.5`","`NaN NaN -5 -5`","`NaN NaN -5.5 -5.5`","`0 NaN -5.5 -5.5`"],"answer":3,"explanation":"It logs `0 NaN -5.5 -5.5`."}]
---
# Predict the Output: Parsing numbers #16

`Number("12px")` is `NaN` (the whole string must be numeric), but `parseInt("12px")` reads digits until it stops. `Number("")` is `0`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
