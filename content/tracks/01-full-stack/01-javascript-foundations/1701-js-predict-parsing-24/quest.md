---
slug: "js-predict-parsing-24"
title: "Predict the Output: Parsing numbers #24"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(parseFloat(\"abc\"), parseInt(\"abc\"), parseFloat(\"-5.5\"), parseInt(\"-5.5\"));\n```","options":["`NaN NaN -5.5 -5`","`NaN NaN -5.5 -5.5`","`NaN NaN -5 -5`","`TypeError`"],"answer":0,"explanation":"It logs `NaN NaN -5.5 -5`."},{"prompt":"What does this log?\n\n```js\nconsole.log(parseFloat(\"\"), Number(\"\"), parseFloat(\"abc\"), Number(\"abc\"));\n```","options":["`0 0 NaN NaN`","`NaN NaN NaN NaN`","`NaN 0 NaN NaN`","`TypeError`"],"answer":2,"explanation":"It logs `NaN 0 NaN NaN`."},{"prompt":"What does this log?\n\n```js\nconsole.log(parseFloat(\"\"), parseInt(\"\"), parseFloat(\"-5.5\"), parseInt(\"-5.5\"));\n```","options":["`0 0 -5.5 -5.5`","`NaN NaN -5.5 -5`","`NaN NaN -5.5 -5.5`","`NaN NaN -5 -5`"],"answer":1,"explanation":"It logs `NaN NaN -5.5 -5`."},{"prompt":"What does this log?\n\n```js\nconsole.log(parseFloat(\"12px\"), parseInt(\"12px\"), parseFloat(\"3.75kg\"), parseInt(\"3.75kg\"));\n```","options":["`12 12 3.75 3.75`","`NaN NaN NaN NaN`","`12 12 3 3`","`12 12 3.75 3`"],"answer":3,"explanation":"It logs `12 12 3.75 3`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Number(\"abc\"), parseInt(\"abc\"), Number(\"12px\"), parseInt(\"12px\"));\n```","options":["`TypeError`","`NaN NaN NaN 12`","`NaN NaN NaN NaN`","`NaN NaN 12 12`"],"answer":1,"explanation":"It logs `NaN NaN NaN 12`."}]
---
# Predict the Output: Parsing numbers #24

`Number("12px")` is `NaN` (the whole string must be numeric), but `parseInt("12px")` reads digits until it stops. `Number("")` is `0`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
