---
slug: "js-predict-rounding-13"
title: "Predict the Output: Rounding numbers #13"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(Math.round(8.2), Math.ceil(8.2), Math.trunc(8.2));\n```","options":["`8 9 8`","`-8 -8 -8`","`8 8 8`","`TypeError`"],"answer":0,"explanation":"It logs `8 9 8`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.round(-7.5), Math.floor(-7.5), Math.trunc(-7.5));\n```","options":["`TypeError`","`-7 -7 -7`","`-7 -8 -7`","`8 7 7`"],"answer":2,"explanation":"It logs `-7 -8 -7`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.floor(-1.2), Math.trunc(-1.2), Math.ceil(-1.2));\n```","options":["`1 1 2`","`TypeError`","`-1 -1 -1`","`-2 -1 -1`"],"answer":3,"explanation":"It logs `-2 -1 -1`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.round(9.7), Math.ceil(9.7), Math.floor(9.7));\n```","options":["`10 10 9`","`10 10 10`","`-10 -9 -10`","`TypeError`"],"answer":0,"explanation":"It logs `10 10 9`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.ceil(1.7), Math.round(1.7), Math.floor(1.7));\n```","options":["`2 2 2`","`2 2 1`","`-1 -2 -2`","`TypeError`"],"answer":1,"explanation":"It logs `2 2 1`."}]
---
# Predict the Output: Rounding numbers #13

`Math.floor` rounds down (toward −∞), `Math.trunc` drops the decimals (toward 0), `Math.round` rounds .5 up (toward +∞), and `toFixed` returns a **string**.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
