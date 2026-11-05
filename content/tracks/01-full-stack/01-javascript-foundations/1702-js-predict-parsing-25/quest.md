---
slug: "js-predict-parsing-25"
title: "Predict the Output: Parsing numbers #25"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(Number(\"0x1A\"), parseFloat(\"0x1A\"), Number(\"-5.5\"), parseFloat(\"-5.5\"));\n```","options":["`0 0 -5.5 -5.5`","`26 26 -5.5 -5.5`","`26 0 -5.5 -5.5`","`26 26 -5 -5`"],"answer":2,"explanation":"It logs `26 0 -5.5 -5.5`."},{"prompt":"What does this log?\n\n```js\nconsole.log(parseInt(\"-5.5\"), parseFloat(\"-5.5\"), parseInt(\" 42 \"), parseFloat(\" 42 \"));\n```","options":["`-5 -5 42 42`","`TypeError`","`-5.5 -5.5 42 42`","`-5 -5.5 42 42`"],"answer":3,"explanation":"It logs `-5 -5.5 42 42`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Number(\"0x1A\"), parseFloat(\"0x1A\"), Number(\"3.75kg\"), parseFloat(\"3.75kg\"));\n```","options":["`26 0 NaN 3.75`","`26 26 NaN NaN`","`0 0 3.75 3.75`","`26 26 3 3`"],"answer":0,"explanation":"It logs `26 0 NaN 3.75`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Number(\"1e3\"), parseInt(\"1e3\"), Number(\"abc\"), parseInt(\"abc\"));\n```","options":["`1 1 NaN NaN`","`1000 1 NaN NaN`","`TypeError`","`1000 1000 NaN NaN`"],"answer":1,"explanation":"It logs `1000 1 NaN NaN`."},{"prompt":"What does this log?\n\n```js\nconsole.log(parseFloat(\"12px\"), parseInt(\"12px\"), parseFloat(\"1e3\"), parseInt(\"1e3\"));\n```","options":["`12 12 1000 1000`","`12 12 1000 1`","`NaN NaN 1000 1000`","`12 12 1 1`"],"answer":1,"explanation":"It logs `12 12 1000 1`."}]
---
# Predict the Output: Parsing numbers #25

`Number("12px")` is `NaN` (the whole string must be numeric), but `parseInt("12px")` reads digits until it stops. `Number("")` is `0`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
