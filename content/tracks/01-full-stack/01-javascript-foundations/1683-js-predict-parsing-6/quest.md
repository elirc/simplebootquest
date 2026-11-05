---
slug: "js-predict-parsing-6"
title: "Predict the Output: Parsing numbers #6"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(parseInt(\"-5.5\"), Number(\"-5.5\"), parseInt(\"3.75kg\"), Number(\"3.75kg\"));\n```","options":["`-5.5 -5.5 3.75 3.75`","`-5.5 -5.5 NaN NaN`","`-5 -5 3 3`","`-5 -5.5 3 NaN`"],"answer":3,"explanation":"It logs `-5 -5.5 3 NaN`."},{"prompt":"What does this log?\n\n```js\nconsole.log(parseFloat(\"3.75kg\"), parseInt(\"3.75kg\"), parseFloat(\"abc\"), parseInt(\"abc\"));\n```","options":["`NaN NaN NaN NaN`","`3.75 3.75 NaN NaN`","`3 3 NaN NaN`","`3.75 3 NaN NaN`"],"answer":3,"explanation":"It logs `3.75 3 NaN NaN`."},{"prompt":"What does this log?\n\n```js\nconsole.log(parseInt(\"0x1A\"), parseFloat(\"0x1A\"), parseInt(\"abc\"), parseFloat(\"abc\"));\n```","options":["`0 0 NaN NaN`","`TypeError`","`26 26 NaN NaN`","`26 0 NaN NaN`"],"answer":3,"explanation":"It logs `26 0 NaN NaN`."},{"prompt":"What does this log?\n\n```js\nconsole.log(parseFloat(\"12px\"), Number(\"12px\"), parseFloat(\" 42 \"), Number(\" 42 \"));\n```","options":["`12 12 42 42`","`NaN NaN 42 42`","`TypeError`","`12 NaN 42 42`"],"answer":3,"explanation":"It logs `12 NaN 42 42`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Number(null), parseFloat(null), Number(\"1e3\"), parseFloat(\"1e3\"));\n```","options":["`NaN NaN 1000 1000`","`0 NaN 1000 1000`","`0 0 1000 1000`","`NaN NaN 1 1`"],"answer":1,"explanation":"It logs `0 NaN 1000 1000`."}]
---
# Predict the Output: Parsing numbers #6

`Number("12px")` is `NaN` (the whole string must be numeric), but `parseInt("12px")` reads digits until it stops. `Number("")` is `0`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
