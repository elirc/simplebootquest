---
slug: "js-predict-rounding-23"
title: "Predict the Output: Rounding numbers #23"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(Math.trunc(-1.2), Math.floor(-1.2), Math.round(-1.2));\n```","options":["`TypeError`","`1 1 1`","`-1 -2 -1`","`-1 -1 -1`"],"answer":2,"explanation":"It logs `-1 -2 -1`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.round(9.5), Math.trunc(9.5), Math.floor(9.5));\n```","options":["`10 9 9`","`TypeError`","`10 10 10`","`-9 -9 -10`"],"answer":0,"explanation":"It logs `10 9 9`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.trunc(-7.2), Math.ceil(-7.2), Math.floor(-7.2));\n```","options":["`7 8 7`","`-7 -7 -8`","`TypeError`","`-7 -7 -7`"],"answer":1,"explanation":"It logs `-7 -7 -8`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.round(3.7), Math.ceil(3.7), Math.floor(3.7));\n```","options":["`4 4 4`","`-4 -3 -4`","`4 4 3`","`TypeError`"],"answer":2,"explanation":"It logs `4 4 3`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.floor(-2.5), Math.ceil(-2.5), Math.trunc(-2.5));\n```","options":["`TypeError`","`-3 -2 -2`","`2 3 2`","`-2 -2 -2`"],"answer":1,"explanation":"It logs `-3 -2 -2`."}]
---
# Predict the Output: Rounding numbers #23

`Math.floor` rounds down (toward −∞), `Math.trunc` drops the decimals (toward 0), `Math.round` rounds .5 up (toward +∞), and `toFixed` returns a **string**.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
