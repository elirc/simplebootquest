---
slug: "js-predict-parsing-8"
title: "Predict the Output: Parsing numbers #8"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(Number(\"07\"), parseInt(\"07\"), Number(\"1e3\"), parseInt(\"1e3\"));\n```","options":["`7 7 1000 1000`","`7 7 1 1`","`7 7 1000 1`","`TypeError`"],"answer":2,"explanation":"It logs `7 7 1000 1`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Number(\"3.75kg\"), parseInt(\"3.75kg\"), Number(null), parseInt(null));\n```","options":["`NaN 3 0 NaN`","`3 3 NaN NaN`","`NaN NaN 0 0`","`3.75 3.75 NaN NaN`"],"answer":0,"explanation":"It logs `NaN 3 0 NaN`."},{"prompt":"What does this log?\n\n```js\nconsole.log(parseInt(\"07\"), parseFloat(\"07\"), parseInt(\"0x1A\"), parseFloat(\"0x1A\"));\n```","options":["`7 7 26 26`","`7 7 0 0`","`7 7 26 0`","`TypeError`"],"answer":2,"explanation":"It logs `7 7 26 0`."},{"prompt":"What does this log?\n\n```js\nconsole.log(parseInt(\"1e3\"), parseFloat(\"1e3\"), parseInt(\"07\"), parseFloat(\"07\"));\n```","options":["`1 1000 7 7`","`TypeError`","`1 1 7 7`","`1000 1000 7 7`"],"answer":0,"explanation":"It logs `1 1000 7 7`."},{"prompt":"What does this log?\n\n```js\nconsole.log(parseFloat(\"0x1A\"), Number(\"0x1A\"), parseFloat(\"07\"), Number(\"07\"));\n```","options":["`TypeError`","`0 0 7 7`","`26 26 7 7`","`0 26 7 7`"],"answer":3,"explanation":"It logs `0 26 7 7`."}]
---
# Predict the Output: Parsing numbers #8

`Number("12px")` is `NaN` (the whole string must be numeric), but `parseInt("12px")` reads digits until it stops. `Number("")` is `0`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
