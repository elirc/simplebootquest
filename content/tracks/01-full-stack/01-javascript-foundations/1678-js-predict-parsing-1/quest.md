---
slug: "js-predict-parsing-1"
title: "Predict the Output: Parsing numbers #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(parseInt(\" 42 \"), Number(\" 42 \"), parseInt(\"1e3\"), Number(\"1e3\"));\n```","options":["`42 42 1000 1000`","`42 42 1 1000`","`TypeError`","`42 42 1 1`"],"answer":1,"explanation":"It logs `42 42 1 1000`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Number(null), parseInt(null), Number(\"abc\"), parseInt(\"abc\"));\n```","options":["`0 0 NaN NaN`","`NaN NaN NaN NaN`","`TypeError`","`0 NaN NaN NaN`"],"answer":3,"explanation":"It logs `0 NaN NaN NaN`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Number(null), parseFloat(null), Number(\"12px\"), parseFloat(\"12px\"));\n```","options":["`0 0 NaN NaN`","`TypeError`","`0 NaN NaN 12`","`NaN NaN 12 12`"],"answer":2,"explanation":"It logs `0 NaN NaN 12`."},{"prompt":"What does this log?\n\n```js\nconsole.log(parseInt(\"3.75kg\"), Number(\"3.75kg\"), parseInt(\"-5.5\"), Number(\"-5.5\"));\n```","options":["`NaN NaN -5.5 -5.5`","`3.75 3.75 -5.5 -5.5`","`3 NaN -5 -5.5`","`3 3 -5 -5`"],"answer":2,"explanation":"It logs `3 NaN -5 -5.5`."},{"prompt":"What does this log?\n\n```js\nconsole.log(parseFloat(\"1e3\"), parseInt(\"1e3\"), parseFloat(\" 42 \"), parseInt(\" 42 \"));\n```","options":["`1000 1 42 42`","`1 1 42 42`","`1000 1000 42 42`","`TypeError`"],"answer":0,"explanation":"It logs `1000 1 42 42`."}]
---
# Predict the Output: Parsing numbers #1

`Number("12px")` is `NaN` (the whole string must be numeric), but `parseInt("12px")` reads digits until it stops. `Number("")` is `0`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
