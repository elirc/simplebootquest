---
slug: "js-predict-rounding-14"
title: "Predict the Output: Rounding numbers #14"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(Math.floor(-6.2), Math.trunc(-6.2), Math.ceil(-6.2));\n```","options":["`-6 -6 -6`","`-7 -6 -6`","`TypeError`","`6 6 7`"],"answer":1,"explanation":"It logs `-7 -6 -6`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.trunc(9.5), Math.floor(9.5), Math.ceil(9.5));\n```","options":["`-9 -10 -9`","`TypeError`","`10 10 10`","`9 9 10`"],"answer":3,"explanation":"It logs `9 9 10`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.ceil(7.2), Math.round(7.2), Math.floor(7.2));\n```","options":["`7 7 7`","`-7 -7 -8`","`8 7 7`","`TypeError`"],"answer":2,"explanation":"It logs `8 7 7`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.floor(1.2), Math.ceil(1.2), Math.round(1.2));\n```","options":["`1 2 1`","`-2 -1 -1`","`TypeError`","`1 1 1`"],"answer":0,"explanation":"It logs `1 2 1`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.round(1.7), Math.floor(1.7), Math.trunc(1.7));\n```","options":["`2 1 1`","`TypeError`","`2 2 2`","`-2 -2 -1`"],"answer":0,"explanation":"It logs `2 1 1`."}]
---
# Predict the Output: Rounding numbers #14

`Math.floor` rounds down (toward −∞), `Math.trunc` drops the decimals (toward 0), `Math.round` rounds .5 up (toward +∞), and `toFixed` returns a **string**.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
