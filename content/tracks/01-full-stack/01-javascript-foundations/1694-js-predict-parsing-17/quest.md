---
slug: "js-predict-parsing-17"
title: "Predict the Output: Parsing numbers #17"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(parseFloat(\"3.75kg\"), Number(\"3.75kg\"), parseFloat(\" 42 \"), Number(\" 42 \"));\n```","options":["`3.75 3.75 42 42`","`3.75 NaN 42 42`","`NaN NaN 42 42`","`3 3 42 42`"],"answer":1,"explanation":"It logs `3.75 NaN 42 42`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Number(\"\"), parseFloat(\"\"), Number(\"12px\"), parseFloat(\"12px\"));\n```","options":["`0 0 NaN NaN`","`NaN NaN 12 12`","`0 NaN NaN 12`","`TypeError`"],"answer":2,"explanation":"It logs `0 NaN NaN 12`."},{"prompt":"What does this log?\n\n```js\nconsole.log(parseFloat(\"07\"), Number(\"07\"), parseFloat(\"12px\"), Number(\"12px\"));\n```","options":["`TypeError`","`7 7 12 NaN`","`7 7 NaN NaN`","`7 7 12 12`"],"answer":1,"explanation":"It logs `7 7 12 NaN`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Number(\"1e3\"), parseInt(\"1e3\"), Number(\" 42 \"), parseInt(\" 42 \"));\n```","options":["`TypeError`","`1 1 42 42`","`1000 1000 42 42`","`1000 1 42 42`"],"answer":3,"explanation":"It logs `1000 1 42 42`."},{"prompt":"What does this log?\n\n```js\nconsole.log(parseInt(\"-5.5\"), Number(\"-5.5\"), parseInt(\" 42 \"), Number(\" 42 \"));\n```","options":["`-5 -5 42 42`","`-5.5 -5.5 42 42`","`-5 -5.5 42 42`","`TypeError`"],"answer":2,"explanation":"It logs `-5 -5.5 42 42`."}]
---
# Predict the Output: Parsing numbers #17

`Number("12px")` is `NaN` (the whole string must be numeric), but `parseInt("12px")` reads digits until it stops. `Number("")` is `0`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
