---
slug: "js-predict-rounding-16"
title: "Predict the Output: Rounding numbers #16"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(Math.ceil(3.7), Math.trunc(3.7), Math.round(3.7));\n```","options":["`4 4 4`","`TypeError`","`4 3 4`","`-3 -3 -4`"],"answer":2,"explanation":"It logs `4 3 4`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.floor(-3.2), Math.round(-3.2), Math.ceil(-3.2));\n```","options":["`-4 -3 -3`","`TypeError`","`3 3 4`","`-3 -3 -3`"],"answer":0,"explanation":"It logs `-4 -3 -3`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.ceil(7.7), Math.round(7.7), Math.trunc(7.7));\n```","options":["`-7 -8 -7`","`TypeError`","`8 8 7`","`8 8 8`"],"answer":2,"explanation":"It logs `8 8 7`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.round(-4.7), Math.floor(-4.7), Math.trunc(-4.7));\n```","options":["`-5 -5 -4`","`5 4 4`","`-5 -5 -5`","`TypeError`"],"answer":0,"explanation":"It logs `-5 -5 -4`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.trunc(7.7), Math.round(7.7), Math.ceil(7.7));\n```","options":["`TypeError`","`8 8 8`","`7 8 8`","`-7 -8 -7`"],"answer":2,"explanation":"It logs `7 8 8`."}]
---
# Predict the Output: Rounding numbers #16

`Math.floor` rounds down (toward −∞), `Math.trunc` drops the decimals (toward 0), `Math.round` rounds .5 up (toward +∞), and `toFixed` returns a **string**.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
