---
slug: "js-predict-parsing-10"
title: "Predict the Output: Parsing numbers #10"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(parseFloat(\"\"), Number(\"\"), parseFloat(\" 42 \"), Number(\" 42 \"));\n```","options":["`NaN NaN 42 42`","`NaN 0 42 42`","`0 0 42 42`","`TypeError`"],"answer":1,"explanation":"It logs `NaN 0 42 42`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Number(\"07\"), parseFloat(\"07\"), Number(\"12px\"), parseFloat(\"12px\"));\n```","options":["`7 7 NaN NaN`","`7 7 12 12`","`7 7 NaN 12`","`TypeError`"],"answer":2,"explanation":"It logs `7 7 NaN 12`."},{"prompt":"What does this log?\n\n```js\nconsole.log(parseInt(\"\"), parseFloat(\"\"), parseInt(\"1e3\"), parseFloat(\"1e3\"));\n```","options":["`NaN NaN 1000 1000`","`NaN NaN 1 1`","`NaN NaN 1 1000`","`0 0 1000 1000`"],"answer":2,"explanation":"It logs `NaN NaN 1 1000`."},{"prompt":"What does this log?\n\n```js\nconsole.log(parseInt(\" 42 \"), Number(\" 42 \"), parseInt(null), Number(null));\n```","options":["`42 42 NaN NaN`","`42 42 NaN 0`","`TypeError`","`42 42 0 0`"],"answer":1,"explanation":"It logs `42 42 NaN 0`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Number(\"3.75kg\"), parseFloat(\"3.75kg\"), Number(\"0x1A\"), parseFloat(\"0x1A\"));\n```","options":["`3.75 3.75 0 0`","`NaN 3.75 26 0`","`3 3 26 26`","`NaN NaN 26 26`"],"answer":1,"explanation":"It logs `NaN 3.75 26 0`."}]
---
# Predict the Output: Parsing numbers #10

`Number("12px")` is `NaN` (the whole string must be numeric), but `parseInt("12px")` reads digits until it stops. `Number("")` is `0`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
