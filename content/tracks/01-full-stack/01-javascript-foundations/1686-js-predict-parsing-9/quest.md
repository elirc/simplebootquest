---
slug: "js-predict-parsing-9"
title: "Predict the Output: Parsing numbers #9"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(parseInt(\"0x1A\"), Number(\"0x1A\"), parseInt(\"3.75kg\"), Number(\"3.75kg\"));\n```","options":["`0 0 3.75 3.75`","`26 26 3 3`","`26 26 3 NaN`","`26 26 NaN NaN`"],"answer":2,"explanation":"It logs `26 26 3 NaN`."},{"prompt":"What does this log?\n\n```js\nconsole.log(parseFloat(\"07\"), Number(\"07\"), parseFloat(null), Number(null));\n```","options":["`7 7 NaN 0`","`7 7 0 0`","`TypeError`","`7 7 NaN NaN`"],"answer":0,"explanation":"It logs `7 7 NaN 0`."},{"prompt":"What does this log?\n\n```js\nconsole.log(parseFloat(\"1e3\"), parseInt(\"1e3\"), parseFloat(\"12px\"), parseInt(\"12px\"));\n```","options":["`1000 1000 12 12`","`1000 1000 NaN NaN`","`1 1 12 12`","`1000 1 12 12`"],"answer":3,"explanation":"It logs `1000 1 12 12`."},{"prompt":"What does this log?\n\n```js\nconsole.log(parseFloat(\" 42 \"), Number(\" 42 \"), parseFloat(null), Number(null));\n```","options":["`42 42 0 0`","`42 42 NaN 0`","`42 42 NaN NaN`","`TypeError`"],"answer":1,"explanation":"It logs `42 42 NaN 0`."},{"prompt":"What does this log?\n\n```js\nconsole.log(parseInt(null), Number(null), parseInt(\"0x1A\"), Number(\"0x1A\"));\n```","options":["`NaN NaN 0 0`","`NaN 0 26 26`","`NaN NaN 26 26`","`0 0 26 26`"],"answer":1,"explanation":"It logs `NaN 0 26 26`."}]
---
# Predict the Output: Parsing numbers #9

`Number("12px")` is `NaN` (the whole string must be numeric), but `parseInt("12px")` reads digits until it stops. `Number("")` is `0`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
