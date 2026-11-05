---
slug: "js-predict-rounding-17"
title: "Predict the Output: Rounding numbers #17"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(Math.round(7.2), Math.trunc(7.2), Math.ceil(7.2));\n```","options":["`7 7 8`","`7 7 7`","`TypeError`","`-7 -7 -7`"],"answer":0,"explanation":"It logs `7 7 8`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.floor(-2.7), Math.round(-2.7), Math.trunc(-2.7));\n```","options":["`2 3 2`","`TypeError`","`-3 -3 -2`","`-3 -3 -3`"],"answer":2,"explanation":"It logs `-3 -3 -2`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.round(7.5), Math.trunc(7.5), Math.ceil(7.5));\n```","options":["`TypeError`","`8 8 8`","`-7 -7 -7`","`8 7 8`"],"answer":3,"explanation":"It logs `8 7 8`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.floor(-7.2), Math.ceil(-7.2), Math.trunc(-7.2));\n```","options":["`-8 -7 -7`","`7 8 7`","`TypeError`","`-7 -7 -7`"],"answer":0,"explanation":"It logs `-8 -7 -7`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.ceil(8.5), Math.trunc(8.5), Math.floor(8.5));\n```","options":["`-8 -8 -9`","`TypeError`","`9 9 9`","`9 8 8`"],"answer":3,"explanation":"It logs `9 8 8`."}]
---
# Predict the Output: Rounding numbers #17

`Math.floor` rounds down (toward −∞), `Math.trunc` drops the decimals (toward 0), `Math.round` rounds .5 up (toward +∞), and `toFixed` returns a **string**.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
