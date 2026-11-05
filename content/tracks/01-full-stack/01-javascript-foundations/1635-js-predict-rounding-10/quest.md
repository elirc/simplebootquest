---
slug: "js-predict-rounding-10"
title: "Predict the Output: Rounding numbers #10"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(Math.floor(-4.2), Math.round(-4.2), Math.ceil(-4.2));\n```","options":["`4 4 5`","`-4 -4 -4`","`-5 -4 -4`","`TypeError`"],"answer":2,"explanation":"It logs `-5 -4 -4`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.ceil(1.7), Math.floor(1.7), Math.trunc(1.7));\n```","options":["`-1 -2 -1`","`2 2 2`","`TypeError`","`2 1 1`"],"answer":3,"explanation":"It logs `2 1 1`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.floor(-3.2), Math.trunc(-3.2), Math.ceil(-3.2));\n```","options":["`TypeError`","`-3 -3 -3`","`3 3 4`","`-4 -3 -3`"],"answer":3,"explanation":"It logs `-4 -3 -3`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.trunc(3.5), Math.round(3.5), Math.ceil(3.5));\n```","options":["`3 4 4`","`4 4 4`","`TypeError`","`-3 -3 -3`"],"answer":0,"explanation":"It logs `3 4 4`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.trunc(-1.5), Math.floor(-1.5), Math.round(-1.5));\n```","options":["`-1 -1 -1`","`-1 -2 -1`","`1 1 2`","`TypeError`"],"answer":1,"explanation":"It logs `-1 -2 -1`."}]
---
# Predict the Output: Rounding numbers #10

`Math.floor` rounds down (toward −∞), `Math.trunc` drops the decimals (toward 0), `Math.round` rounds .5 up (toward +∞), and `toFixed` returns a **string**.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
