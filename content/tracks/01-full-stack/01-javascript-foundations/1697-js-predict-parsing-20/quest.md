---
slug: "js-predict-parsing-20"
title: "Predict the Output: Parsing numbers #20"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(parseInt(\"12px\"), Number(\"12px\"), parseInt(\"0x1A\"), Number(\"0x1A\"));\n```","options":["`NaN NaN 26 26`","`12 12 0 0`","`12 12 26 26`","`12 NaN 26 26`"],"answer":3,"explanation":"It logs `12 NaN 26 26`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Number(\"12px\"), parseInt(\"12px\"), Number(\"\"), parseInt(\"\"));\n```","options":["`NaN NaN 0 0`","`NaN 12 0 NaN`","`12 12 NaN NaN`","`TypeError`"],"answer":1,"explanation":"It logs `NaN 12 0 NaN`."},{"prompt":"What does this log?\n\n```js\nconsole.log(parseFloat(\"-5.5\"), parseInt(\"-5.5\"), parseFloat(\"12px\"), parseInt(\"12px\"));\n```","options":["`-5 -5 12 12`","`-5.5 -5 12 12`","`-5.5 -5.5 12 12`","`-5.5 -5.5 NaN NaN`"],"answer":1,"explanation":"It logs `-5.5 -5 12 12`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Number(\" 42 \"), parseInt(\" 42 \"), Number(\"12px\"), parseInt(\"12px\"));\n```","options":["`TypeError`","`42 42 12 12`","`42 42 NaN NaN`","`42 42 NaN 12`"],"answer":3,"explanation":"It logs `42 42 NaN 12`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Number(\"07\"), parseFloat(\"07\"), Number(\"3.75kg\"), parseFloat(\"3.75kg\"));\n```","options":["`7 7 3 3`","`7 7 NaN 3.75`","`7 7 NaN NaN`","`7 7 3.75 3.75`"],"answer":1,"explanation":"It logs `7 7 NaN 3.75`."}]
---
# Predict the Output: Parsing numbers #20

`Number("12px")` is `NaN` (the whole string must be numeric), but `parseInt("12px")` reads digits until it stops. `Number("")` is `0`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
