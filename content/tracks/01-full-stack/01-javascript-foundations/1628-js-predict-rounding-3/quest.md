---
slug: "js-predict-rounding-3"
title: "Predict the Output: Rounding numbers #3"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(Math.trunc(-3.7), Math.ceil(-3.7), Math.round(-3.7));\n```","options":["`-3 -3 -4`","`3 4 4`","`-4 -4 -4`","`TypeError`"],"answer":0,"explanation":"It logs `-3 -3 -4`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.ceil(8.7), Math.floor(8.7), Math.trunc(8.7));\n```","options":["`9 8 8`","`-8 -9 -8`","`9 9 9`","`TypeError`"],"answer":0,"explanation":"It logs `9 8 8`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.round(2.2), Math.floor(2.2), Math.ceil(2.2));\n```","options":["`2 2 3`","`-2 -3 -2`","`TypeError`","`2 2 2`"],"answer":0,"explanation":"It logs `2 2 3`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.round(2.2), Math.trunc(2.2), Math.ceil(2.2));\n```","options":["`2 2 3`","`-2 -2 -2`","`2 2 2`","`TypeError`"],"answer":0,"explanation":"It logs `2 2 3`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.trunc(4.2), Math.ceil(4.2), Math.round(4.2));\n```","options":["`-4 -4 -4`","`4 4 4`","`TypeError`","`4 5 4`"],"answer":3,"explanation":"It logs `4 5 4`."}]
---
# Predict the Output: Rounding numbers #3

`Math.floor` rounds down (toward −∞), `Math.trunc` drops the decimals (toward 0), `Math.round` rounds .5 up (toward +∞), and `toFixed` returns a **string**.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
