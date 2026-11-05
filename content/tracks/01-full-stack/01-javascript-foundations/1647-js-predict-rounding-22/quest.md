---
slug: "js-predict-rounding-22"
title: "Predict the Output: Rounding numbers #22"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(Math.round(8.5), Math.floor(8.5), Math.ceil(8.5));\n```","options":["`TypeError`","`9 9 9`","`9 8 9`","`-8 -9 -8`"],"answer":2,"explanation":"It logs `9 8 9`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.round(4.2), Math.ceil(4.2), Math.trunc(4.2));\n```","options":["`-4 -4 -4`","`4 4 4`","`4 5 4`","`TypeError`"],"answer":2,"explanation":"It logs `4 5 4`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.floor(-5.5), Math.round(-5.5), Math.trunc(-5.5));\n```","options":["`5 6 5`","`TypeError`","`-5 -5 -5`","`-6 -5 -5`"],"answer":3,"explanation":"It logs `-6 -5 -5`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.ceil(3.5), Math.round(3.5), Math.floor(3.5));\n```","options":["`4 4 3`","`4 4 4`","`TypeError`","`-3 -3 -4`"],"answer":0,"explanation":"It logs `4 4 3`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.floor(-2.5), Math.trunc(-2.5), Math.ceil(-2.5));\n```","options":["`-2 -2 -2`","`TypeError`","`-3 -2 -2`","`2 2 3`"],"answer":2,"explanation":"It logs `-3 -2 -2`."}]
---
# Predict the Output: Rounding numbers #22

`Math.floor` rounds down (toward −∞), `Math.trunc` drops the decimals (toward 0), `Math.round` rounds .5 up (toward +∞), and `toFixed` returns a **string**.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
