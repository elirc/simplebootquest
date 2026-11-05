---
slug: "js-predict-parsing-22"
title: "Predict the Output: Parsing numbers #22"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(parseInt(\"\"), parseFloat(\"\"), parseInt(\"3.75kg\"), parseFloat(\"3.75kg\"));\n```","options":["`NaN NaN 3 3.75`","`NaN NaN 3.75 3.75`","`NaN NaN 3 3`","`0 0 NaN NaN`"],"answer":0,"explanation":"It logs `NaN NaN 3 3.75`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Number(\"12px\"), parseInt(\"12px\"), Number(\"0x1A\"), parseInt(\"0x1A\"));\n```","options":["`NaN NaN 26 26`","`NaN 12 26 26`","`12 12 26 26`","`12 12 0 0`"],"answer":1,"explanation":"It logs `NaN 12 26 26`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Number(\"\"), parseFloat(\"\"), Number(\"3.75kg\"), parseFloat(\"3.75kg\"));\n```","options":["`0 NaN NaN 3.75`","`0 0 NaN NaN`","`NaN NaN 3 3`","`NaN NaN 3.75 3.75`"],"answer":0,"explanation":"It logs `0 NaN NaN 3.75`."},{"prompt":"What does this log?\n\n```js\nconsole.log(parseFloat(\"07\"), Number(\"07\"), parseFloat(\"\"), Number(\"\"));\n```","options":["`7 7 NaN NaN`","`7 7 NaN 0`","`TypeError`","`7 7 0 0`"],"answer":1,"explanation":"It logs `7 7 NaN 0`."},{"prompt":"What does this log?\n\n```js\nconsole.log(parseInt(\"0x1A\"), Number(\"0x1A\"), parseInt(null), Number(null));\n```","options":["`26 26 NaN NaN`","`0 0 NaN NaN`","`26 26 NaN 0`","`26 26 0 0`"],"answer":2,"explanation":"It logs `26 26 NaN 0`."}]
---
# Predict the Output: Parsing numbers #22

`Number("12px")` is `NaN` (the whole string must be numeric), but `parseInt("12px")` reads digits until it stops. `Number("")` is `0`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
