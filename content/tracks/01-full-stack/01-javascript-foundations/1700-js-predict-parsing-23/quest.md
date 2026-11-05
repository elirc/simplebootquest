---
slug: "js-predict-parsing-23"
title: "Predict the Output: Parsing numbers #23"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(parseInt(\"0x1A\"), parseFloat(\"0x1A\"), parseInt(\"3.75kg\"), parseFloat(\"3.75kg\"));\n```","options":["`26 0 3 3.75`","`26 26 NaN NaN`","`26 26 3 3`","`0 0 3.75 3.75`"],"answer":0,"explanation":"It logs `26 0 3 3.75`."},{"prompt":"What does this log?\n\n```js\nconsole.log(parseInt(\"-5.5\"), Number(\"-5.5\"), parseInt(\"abc\"), Number(\"abc\"));\n```","options":["`-5 -5.5 NaN NaN`","`-5 -5 NaN NaN`","`TypeError`","`-5.5 -5.5 NaN NaN`"],"answer":0,"explanation":"It logs `-5 -5.5 NaN NaN`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Number(\"3.75kg\"), parseInt(\"3.75kg\"), Number(\"12px\"), parseInt(\"12px\"));\n```","options":["`NaN NaN NaN NaN`","`3 3 12 12`","`3.75 3.75 12 12`","`NaN 3 NaN 12`"],"answer":3,"explanation":"It logs `NaN 3 NaN 12`."},{"prompt":"What does this log?\n\n```js\nconsole.log(parseFloat(\"\"), parseInt(\"\"), parseFloat(\"1e3\"), parseInt(\"1e3\"));\n```","options":["`NaN NaN 1 1`","`NaN NaN 1000 1`","`NaN NaN 1000 1000`","`0 0 1000 1000`"],"answer":1,"explanation":"It logs `NaN NaN 1000 1`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Number(\"12px\"), parseInt(\"12px\"), Number(\"07\"), parseInt(\"07\"));\n```","options":["`TypeError`","`12 12 7 7`","`NaN NaN 7 7`","`NaN 12 7 7`"],"answer":3,"explanation":"It logs `NaN 12 7 7`."}]
---
# Predict the Output: Parsing numbers #23

`Number("12px")` is `NaN` (the whole string must be numeric), but `parseInt("12px")` reads digits until it stops. `Number("")` is `0`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
