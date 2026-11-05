---
slug: "js-predict-parsing-7"
title: "Predict the Output: Parsing numbers #7"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(parseFloat(\"abc\"), parseInt(\"abc\"), parseFloat(\"3.75kg\"), parseInt(\"3.75kg\"));\n```","options":["`NaN NaN 3.75 3.75`","`NaN NaN 3.75 3`","`NaN NaN NaN NaN`","`NaN NaN 3 3`"],"answer":1,"explanation":"It logs `NaN NaN 3.75 3`."},{"prompt":"What does this log?\n\n```js\nconsole.log(parseFloat(\"3.75kg\"), Number(\"3.75kg\"), parseFloat(\"1e3\"), Number(\"1e3\"));\n```","options":["`3.75 3.75 1000 1000`","`3 3 1 1`","`3.75 NaN 1000 1000`","`NaN NaN 1000 1000`"],"answer":2,"explanation":"It logs `3.75 NaN 1000 1000`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Number(\"\"), parseInt(\"\"), Number(\"12px\"), parseInt(\"12px\"));\n```","options":["`NaN NaN 12 12`","`0 NaN NaN 12`","`0 0 NaN NaN`","`TypeError`"],"answer":1,"explanation":"It logs `0 NaN NaN 12`."},{"prompt":"What does this log?\n\n```js\nconsole.log(parseFloat(\"-5.5\"), parseInt(\"-5.5\"), parseFloat(\"3.75kg\"), parseInt(\"3.75kg\"));\n```","options":["`-5.5 -5 3.75 3`","`-5.5 -5.5 3.75 3.75`","`-5 -5 3 3`","`-5.5 -5.5 NaN NaN`"],"answer":0,"explanation":"It logs `-5.5 -5 3.75 3`."},{"prompt":"What does this log?\n\n```js\nconsole.log(parseInt(\"1e3\"), parseFloat(\"1e3\"), parseInt(\"-5.5\"), parseFloat(\"-5.5\"));\n```","options":["`TypeError`","`1 1 -5 -5`","`1 1000 -5 -5.5`","`1000 1000 -5.5 -5.5`"],"answer":2,"explanation":"It logs `1 1000 -5 -5.5`."}]
---
# Predict the Output: Parsing numbers #7

`Number("12px")` is `NaN` (the whole string must be numeric), but `parseInt("12px")` reads digits until it stops. `Number("")` is `0`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
