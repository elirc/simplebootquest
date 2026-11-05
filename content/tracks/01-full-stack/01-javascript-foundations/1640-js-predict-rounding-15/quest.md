---
slug: "js-predict-rounding-15"
title: "Predict the Output: Rounding numbers #15"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(Math.trunc(4.7), Math.ceil(4.7), Math.round(4.7));\n```","options":["`5 5 5`","`TypeError`","`4 5 5`","`-4 -4 -5`"],"answer":2,"explanation":"It logs `4 5 5`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.trunc(2.5), Math.ceil(2.5), Math.round(2.5));\n```","options":["`2 3 3`","`TypeError`","`3 3 3`","`-2 -2 -2`"],"answer":0,"explanation":"It logs `2 3 3`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.ceil(-9.2), Math.floor(-9.2), Math.trunc(-9.2));\n```","options":["`-9 -10 -9`","`-9 -9 -9`","`10 9 9`","`TypeError`"],"answer":0,"explanation":"It logs `-9 -10 -9`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.trunc(2.2), Math.ceil(2.2), Math.round(2.2));\n```","options":["`2 3 2`","`-2 -2 -2`","`2 2 2`","`TypeError`"],"answer":0,"explanation":"It logs `2 3 2`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.ceil(4.2), Math.floor(4.2), Math.round(4.2));\n```","options":["`-4 -5 -4`","`5 4 4`","`TypeError`","`4 4 4`"],"answer":1,"explanation":"It logs `5 4 4`."}]
---
# Predict the Output: Rounding numbers #15

`Math.floor` rounds down (toward −∞), `Math.trunc` drops the decimals (toward 0), `Math.round` rounds .5 up (toward +∞), and `toFixed` returns a **string**.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
