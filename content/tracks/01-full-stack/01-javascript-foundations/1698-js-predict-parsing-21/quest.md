---
slug: "js-predict-parsing-21"
title: "Predict the Output: Parsing numbers #21"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(parseInt(\"12px\"), parseFloat(\"12px\"), parseInt(\"3.75kg\"), parseFloat(\"3.75kg\"));\n```","options":["`NaN NaN NaN NaN`","`12 12 3 3.75`","`12 12 3.75 3.75`","`12 12 3 3`"],"answer":1,"explanation":"It logs `12 12 3 3.75`."},{"prompt":"What does this log?\n\n```js\nconsole.log(parseInt(\"1e3\"), parseFloat(\"1e3\"), parseInt(\" 42 \"), parseFloat(\" 42 \"));\n```","options":["`TypeError`","`1000 1000 42 42`","`1 1000 42 42`","`1 1 42 42`"],"answer":2,"explanation":"It logs `1 1000 42 42`."},{"prompt":"What does this log?\n\n```js\nconsole.log(parseFloat(\"3.75kg\"), parseInt(\"3.75kg\"), parseFloat(\"1e3\"), parseInt(\"1e3\"));\n```","options":["`3.75 3 1000 1`","`3 3 1 1`","`NaN NaN 1000 1000`","`3.75 3.75 1000 1000`"],"answer":0,"explanation":"It logs `3.75 3 1000 1`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Number(\"-5.5\"), parseInt(\"-5.5\"), Number(\"07\"), parseInt(\"07\"));\n```","options":["`-5.5 -5 7 7`","`-5 -5 7 7`","`TypeError`","`-5.5 -5.5 7 7`"],"answer":0,"explanation":"It logs `-5.5 -5 7 7`."},{"prompt":"What does this log?\n\n```js\nconsole.log(parseFloat(\"\"), Number(\"\"), parseFloat(\"07\"), Number(\"07\"));\n```","options":["`TypeError`","`NaN NaN 7 7`","`0 0 7 7`","`NaN 0 7 7`"],"answer":3,"explanation":"It logs `NaN 0 7 7`."}]
---
# Predict the Output: Parsing numbers #21

`Number("12px")` is `NaN` (the whole string must be numeric), but `parseInt("12px")` reads digits until it stops. `Number("")` is `0`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
