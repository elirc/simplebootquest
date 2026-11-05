---
slug: "js-predict-parsing-5"
title: "Predict the Output: Parsing numbers #5"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(Number(\"\"), parseInt(\"\"), Number(\" 42 \"), parseInt(\" 42 \"));\n```","options":["`TypeError`","`0 NaN 42 42`","`NaN NaN 42 42`","`0 0 42 42`"],"answer":1,"explanation":"It logs `0 NaN 42 42`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Number(\"abc\"), parseInt(\"abc\"), Number(null), parseInt(null));\n```","options":["`NaN NaN 0 0`","`TypeError`","`NaN NaN NaN NaN`","`NaN NaN 0 NaN`"],"answer":3,"explanation":"It logs `NaN NaN 0 NaN`."},{"prompt":"What does this log?\n\n```js\nconsole.log(parseInt(\"3.75kg\"), Number(\"3.75kg\"), parseInt(\"\"), Number(\"\"));\n```","options":["`3 NaN NaN 0`","`3 3 NaN NaN`","`NaN NaN 0 0`","`3.75 3.75 NaN NaN`"],"answer":0,"explanation":"It logs `3 NaN NaN 0`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Number(\"1e3\"), parseInt(\"1e3\"), Number(null), parseInt(null));\n```","options":["`1 1 NaN NaN`","`1000 1000 0 0`","`1000 1000 NaN NaN`","`1000 1 0 NaN`"],"answer":3,"explanation":"It logs `1000 1 0 NaN`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Number(\"07\"), parseInt(\"07\"), Number(\"12px\"), parseInt(\"12px\"));\n```","options":["`7 7 NaN 12`","`7 7 12 12`","`TypeError`","`7 7 NaN NaN`"],"answer":0,"explanation":"It logs `7 7 NaN 12`."}]
---
# Predict the Output: Parsing numbers #5

`Number("12px")` is `NaN` (the whole string must be numeric), but `parseInt("12px")` reads digits until it stops. `Number("")` is `0`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
