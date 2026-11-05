---
slug: "js-predict-parsing-19"
title: "Predict the Output: Parsing numbers #19"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(Number(\"-5.5\"), parseInt(\"-5.5\"), Number(\" 42 \"), parseInt(\" 42 \"));\n```","options":["`-5 -5 42 42`","`-5.5 -5.5 42 42`","`-5.5 -5 42 42`","`TypeError`"],"answer":2,"explanation":"It logs `-5.5 -5 42 42`."},{"prompt":"What does this log?\n\n```js\nconsole.log(parseFloat(\"\"), Number(\"\"), parseFloat(\"-5.5\"), Number(\"-5.5\"));\n```","options":["`NaN NaN -5.5 -5.5`","`0 0 -5.5 -5.5`","`NaN 0 -5.5 -5.5`","`NaN NaN -5 -5`"],"answer":2,"explanation":"It logs `NaN 0 -5.5 -5.5`."},{"prompt":"What does this log?\n\n```js\nconsole.log(parseInt(\"12px\"), parseFloat(\"12px\"), parseInt(\"-5.5\"), parseFloat(\"-5.5\"));\n```","options":["`NaN NaN -5.5 -5.5`","`12 12 -5.5 -5.5`","`12 12 -5 -5.5`","`12 12 -5 -5`"],"answer":2,"explanation":"It logs `12 12 -5 -5.5`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Number(\"-5.5\"), parseInt(\"-5.5\"), Number(\"abc\"), parseInt(\"abc\"));\n```","options":["`-5.5 -5.5 NaN NaN`","`-5 -5 NaN NaN`","`TypeError`","`-5.5 -5 NaN NaN`"],"answer":3,"explanation":"It logs `-5.5 -5 NaN NaN`."},{"prompt":"What does this log?\n\n```js\nconsole.log(parseInt(\" 42 \"), Number(\" 42 \"), parseInt(\"3.75kg\"), Number(\"3.75kg\"));\n```","options":["`42 42 NaN NaN`","`42 42 3.75 3.75`","`42 42 3 3`","`42 42 3 NaN`"],"answer":3,"explanation":"It logs `42 42 3 NaN`."}]
---
# Predict the Output: Parsing numbers #19

`Number("12px")` is `NaN` (the whole string must be numeric), but `parseInt("12px")` reads digits until it stops. `Number("")` is `0`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
