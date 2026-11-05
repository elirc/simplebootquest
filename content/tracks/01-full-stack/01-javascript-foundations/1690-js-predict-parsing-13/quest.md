---
slug: "js-predict-parsing-13"
title: "Predict the Output: Parsing numbers #13"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(Number(\"\"), parseInt(\"\"), Number(\"1e3\"), parseInt(\"1e3\"));\n```","options":["`0 0 1000 1000`","`0 NaN 1000 1`","`NaN NaN 1 1`","`NaN NaN 1000 1000`"],"answer":1,"explanation":"It logs `0 NaN 1000 1`."},{"prompt":"What does this log?\n\n```js\nconsole.log(parseInt(\"3.75kg\"), Number(\"3.75kg\"), parseInt(\"12px\"), Number(\"12px\"));\n```","options":["`NaN NaN NaN NaN`","`3 NaN 12 NaN`","`3 3 12 12`","`3.75 3.75 12 12`"],"answer":1,"explanation":"It logs `3 NaN 12 NaN`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Number(\"07\"), parseFloat(\"07\"), Number(null), parseFloat(null));\n```","options":["`7 7 NaN NaN`","`7 7 0 NaN`","`7 7 0 0`","`TypeError`"],"answer":1,"explanation":"It logs `7 7 0 NaN`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Number(\"0x1A\"), parseFloat(\"0x1A\"), Number(\"07\"), parseFloat(\"07\"));\n```","options":["`TypeError`","`0 0 7 7`","`26 0 7 7`","`26 26 7 7`"],"answer":2,"explanation":"It logs `26 0 7 7`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Number(\"3.75kg\"), parseFloat(\"3.75kg\"), Number(\"12px\"), parseFloat(\"12px\"));\n```","options":["`NaN NaN NaN NaN`","`NaN 3.75 NaN 12`","`3 3 12 12`","`3.75 3.75 12 12`"],"answer":1,"explanation":"It logs `NaN 3.75 NaN 12`."}]
---
# Predict the Output: Parsing numbers #13

`Number("12px")` is `NaN` (the whole string must be numeric), but `parseInt("12px")` reads digits until it stops. `Number("")` is `0`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
