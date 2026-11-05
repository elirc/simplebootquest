---
slug: "js-predict-rounding-1"
title: "Predict the Output: Rounding numbers #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(Math.round(7.2), Math.floor(7.2), Math.ceil(7.2));\n```","options":["`-7 -8 -7`","`7 7 8`","`7 7 7`","`TypeError`"],"answer":1,"explanation":"It logs `7 7 8`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.round(6.5), Math.trunc(6.5), Math.floor(6.5));\n```","options":["`7 6 6`","`TypeError`","`7 7 7`","`-6 -6 -7`"],"answer":0,"explanation":"It logs `7 6 6`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.floor(-6.5), Math.round(-6.5), Math.ceil(-6.5));\n```","options":["`TypeError`","`-6 -6 -6`","`6 7 7`","`-7 -6 -6`"],"answer":3,"explanation":"It logs `-7 -6 -6`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.trunc(7.5), Math.round(7.5), Math.floor(7.5));\n```","options":["`8 8 8`","`7 8 7`","`TypeError`","`-7 -7 -8`"],"answer":1,"explanation":"It logs `7 8 7`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.ceil(-3.5), Math.trunc(-3.5), Math.floor(-3.5));\n```","options":["`TypeError`","`4 3 3`","`-3 -3 -3`","`-3 -3 -4`"],"answer":3,"explanation":"It logs `-3 -3 -4`."}]
---
# Predict the Output: Rounding numbers #1

`Math.floor` rounds down (toward −∞), `Math.trunc` drops the decimals (toward 0), `Math.round` rounds .5 up (toward +∞), and `toFixed` returns a **string**.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
