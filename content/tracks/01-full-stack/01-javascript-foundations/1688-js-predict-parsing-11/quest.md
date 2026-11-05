---
slug: "js-predict-parsing-11"
title: "Predict the Output: Parsing numbers #11"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(Number(\" 42 \"), parseFloat(\" 42 \"), Number(\"0x1A\"), parseFloat(\"0x1A\"));\n```","options":["`TypeError`","`42 42 26 26`","`42 42 26 0`","`42 42 0 0`"],"answer":2,"explanation":"It logs `42 42 26 0`."},{"prompt":"What does this log?\n\n```js\nconsole.log(parseInt(\"12px\"), parseFloat(\"12px\"), parseInt(\"0x1A\"), parseFloat(\"0x1A\"));\n```","options":["`NaN NaN 26 26`","`12 12 26 0`","`12 12 26 26`","`12 12 0 0`"],"answer":1,"explanation":"It logs `12 12 26 0`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Number(\"3.75kg\"), parseInt(\"3.75kg\"), Number(\"\"), parseInt(\"\"));\n```","options":["`3.75 3.75 NaN NaN`","`NaN 3 0 NaN`","`NaN NaN 0 0`","`3 3 NaN NaN`"],"answer":1,"explanation":"It logs `NaN 3 0 NaN`."},{"prompt":"What does this log?\n\n```js\nconsole.log(parseFloat(\" 42 \"), parseInt(\" 42 \"), parseFloat(\"-5.5\"), parseInt(\"-5.5\"));\n```","options":["`42 42 -5.5 -5`","`TypeError`","`42 42 -5 -5`","`42 42 -5.5 -5.5`"],"answer":0,"explanation":"It logs `42 42 -5.5 -5`."},{"prompt":"What does this log?\n\n```js\nconsole.log(parseFloat(\"-5.5\"), Number(\"-5.5\"), parseFloat(\"3.75kg\"), Number(\"3.75kg\"));\n```","options":["`-5.5 -5.5 3.75 3.75`","`-5.5 -5.5 3.75 NaN`","`-5.5 -5.5 NaN NaN`","`-5 -5 3 3`"],"answer":1,"explanation":"It logs `-5.5 -5.5 3.75 NaN`."}]
---
# Predict the Output: Parsing numbers #11

`Number("12px")` is `NaN` (the whole string must be numeric), but `parseInt("12px")` reads digits until it stops. `Number("")` is `0`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
