---
slug: "js-predict-rounding-11"
title: "Predict the Output: Rounding numbers #11"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(Math.floor(-8.5), Math.ceil(-8.5), Math.trunc(-8.5));\n```","options":["`8 9 8`","`-8 -8 -8`","`TypeError`","`-9 -8 -8`"],"answer":3,"explanation":"It logs `-9 -8 -8`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.round(-4.7), Math.trunc(-4.7), Math.floor(-4.7));\n```","options":["`5 4 4`","`-5 -4 -5`","`-5 -5 -5`","`TypeError`"],"answer":1,"explanation":"It logs `-5 -4 -5`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.round(1.7), Math.trunc(1.7), Math.ceil(1.7));\n```","options":["`2 2 2`","`TypeError`","`-2 -1 -1`","`2 1 2`"],"answer":3,"explanation":"It logs `2 1 2`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.trunc(4.7), Math.ceil(4.7), Math.floor(4.7));\n```","options":["`4 5 4`","`TypeError`","`-4 -4 -5`","`5 5 5`"],"answer":0,"explanation":"It logs `4 5 4`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.ceil(9.2), Math.floor(9.2), Math.round(9.2));\n```","options":["`9 9 9`","`10 9 9`","`-9 -10 -9`","`TypeError`"],"answer":1,"explanation":"It logs `10 9 9`."}]
---
# Predict the Output: Rounding numbers #11

`Math.floor` rounds down (toward −∞), `Math.trunc` drops the decimals (toward 0), `Math.round` rounds .5 up (toward +∞), and `toFixed` returns a **string**.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
