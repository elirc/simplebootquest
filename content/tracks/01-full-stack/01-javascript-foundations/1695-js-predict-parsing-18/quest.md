---
slug: "js-predict-parsing-18"
title: "Predict the Output: Parsing numbers #18"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(Number(\"0x1A\"), parseInt(\"0x1A\"), Number(\"\"), parseInt(\"\"));\n```","options":["`26 26 NaN NaN`","`26 26 0 NaN`","`0 0 NaN NaN`","`26 26 0 0`"],"answer":1,"explanation":"It logs `26 26 0 NaN`."},{"prompt":"What does this log?\n\n```js\nconsole.log(parseInt(\"1e3\"), Number(\"1e3\"), parseInt(\"0x1A\"), Number(\"0x1A\"));\n```","options":["`1000 1000 0 0`","`1000 1000 26 26`","`1 1000 26 26`","`1 1 26 26`"],"answer":2,"explanation":"It logs `1 1000 26 26`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Number(\"-5.5\"), parseFloat(\"-5.5\"), Number(\"3.75kg\"), parseFloat(\"3.75kg\"));\n```","options":["`-5.5 -5.5 NaN NaN`","`-5 -5 3 3`","`-5.5 -5.5 NaN 3.75`","`-5.5 -5.5 3.75 3.75`"],"answer":2,"explanation":"It logs `-5.5 -5.5 NaN 3.75`."},{"prompt":"What does this log?\n\n```js\nconsole.log(parseInt(null), Number(null), parseInt(\" 42 \"), Number(\" 42 \"));\n```","options":["`TypeError`","`0 0 42 42`","`NaN NaN 42 42`","`NaN 0 42 42`"],"answer":3,"explanation":"It logs `NaN 0 42 42`."},{"prompt":"What does this log?\n\n```js\nconsole.log(parseFloat(\"12px\"), Number(\"12px\"), parseFloat(\"-5.5\"), Number(\"-5.5\"));\n```","options":["`12 12 -5 -5`","`NaN NaN -5.5 -5.5`","`12 NaN -5.5 -5.5`","`12 12 -5.5 -5.5`"],"answer":2,"explanation":"It logs `12 NaN -5.5 -5.5`."}]
---
# Predict the Output: Parsing numbers #18

`Number("12px")` is `NaN` (the whole string must be numeric), but `parseInt("12px")` reads digits until it stops. `Number("")` is `0`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
