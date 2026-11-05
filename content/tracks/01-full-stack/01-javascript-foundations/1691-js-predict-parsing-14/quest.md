---
slug: "js-predict-parsing-14"
title: "Predict the Output: Parsing numbers #14"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(parseInt(\"3.75kg\"), parseFloat(\"3.75kg\"), parseInt(\" 42 \"), parseFloat(\" 42 \"));\n```","options":["`3 3 42 42`","`NaN NaN 42 42`","`3 3.75 42 42`","`3.75 3.75 42 42`"],"answer":2,"explanation":"It logs `3 3.75 42 42`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Number(\"1e3\"), parseInt(\"1e3\"), Number(\"3.75kg\"), parseInt(\"3.75kg\"));\n```","options":["`1000 1 NaN 3`","`1000 1000 3.75 3.75`","`1000 1000 NaN NaN`","`1 1 3 3`"],"answer":0,"explanation":"It logs `1000 1 NaN 3`."},{"prompt":"What does this log?\n\n```js\nconsole.log(parseInt(\"1e3\"), parseFloat(\"1e3\"), parseInt(\"\"), parseFloat(\"\"));\n```","options":["`1000 1000 0 0`","`1 1 NaN NaN`","`1 1000 NaN NaN`","`1000 1000 NaN NaN`"],"answer":2,"explanation":"It logs `1 1000 NaN NaN`."},{"prompt":"What does this log?\n\n```js\nconsole.log(parseFloat(\"-5.5\"), parseInt(\"-5.5\"), parseFloat(\"abc\"), parseInt(\"abc\"));\n```","options":["`-5.5 -5.5 NaN NaN`","`-5 -5 NaN NaN`","`-5.5 -5 NaN NaN`","`TypeError`"],"answer":2,"explanation":"It logs `-5.5 -5 NaN NaN`."},{"prompt":"What does this log?\n\n```js\nconsole.log(parseInt(\"3.75kg\"), parseFloat(\"3.75kg\"), parseInt(\"07\"), parseFloat(\"07\"));\n```","options":["`3 3.75 7 7`","`3.75 3.75 7 7`","`3 3 7 7`","`NaN NaN 7 7`"],"answer":0,"explanation":"It logs `3 3.75 7 7`."}]
---
# Predict the Output: Parsing numbers #14

`Number("12px")` is `NaN` (the whole string must be numeric), but `parseInt("12px")` reads digits until it stops. `Number("")` is `0`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
