---
slug: "js-predict-parsing-12"
title: "Predict the Output: Parsing numbers #12"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(parseInt(\"-5.5\"), parseFloat(\"-5.5\"), parseInt(\"3.75kg\"), parseFloat(\"3.75kg\"));\n```","options":["`-5 -5 3 3`","`-5.5 -5.5 NaN NaN`","`-5.5 -5.5 3.75 3.75`","`-5 -5.5 3 3.75`"],"answer":3,"explanation":"It logs `-5 -5.5 3 3.75`."},{"prompt":"What does this log?\n\n```js\nconsole.log(parseInt(\"0x1A\"), Number(\"0x1A\"), parseInt(\"-5.5\"), Number(\"-5.5\"));\n```","options":["`26 26 -5 -5`","`26 26 -5.5 -5.5`","`0 0 -5.5 -5.5`","`26 26 -5 -5.5`"],"answer":3,"explanation":"It logs `26 26 -5 -5.5`."},{"prompt":"What does this log?\n\n```js\nconsole.log(parseFloat(\"0x1A\"), parseInt(\"0x1A\"), parseFloat(\"07\"), parseInt(\"07\"));\n```","options":["`TypeError`","`0 26 7 7`","`26 26 7 7`","`0 0 7 7`"],"answer":1,"explanation":"It logs `0 26 7 7`."},{"prompt":"What does this log?\n\n```js\nconsole.log(parseInt(\"0x1A\"), parseFloat(\"0x1A\"), parseInt(\"07\"), parseFloat(\"07\"));\n```","options":["`TypeError`","`26 0 7 7`","`26 26 7 7`","`0 0 7 7`"],"answer":1,"explanation":"It logs `26 0 7 7`."},{"prompt":"What does this log?\n\n```js\nconsole.log(parseInt(null), Number(null), parseInt(\"3.75kg\"), Number(\"3.75kg\"));\n```","options":["`NaN NaN 3.75 3.75`","`NaN 0 3 NaN`","`0 0 NaN NaN`","`NaN NaN 3 3`"],"answer":1,"explanation":"It logs `NaN 0 3 NaN`."}]
---
# Predict the Output: Parsing numbers #12

`Number("12px")` is `NaN` (the whole string must be numeric), but `parseInt("12px")` reads digits until it stops. `Number("")` is `0`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
