---
slug: "js-predict-rounding-9"
title: "Predict the Output: Rounding numbers #9"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(Math.ceil(-6.5), Math.floor(-6.5), Math.trunc(-6.5));\n```","options":["`-6 -6 -6`","`TypeError`","`7 6 6`","`-6 -7 -6`"],"answer":3,"explanation":"It logs `-6 -7 -6`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.round(-8.2), Math.floor(-8.2), Math.ceil(-8.2));\n```","options":["`-8 -9 -8`","`-8 -8 -8`","`TypeError`","`8 8 9`"],"answer":0,"explanation":"It logs `-8 -9 -8`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.ceil(-2.7), Math.round(-2.7), Math.trunc(-2.7));\n```","options":["`-3 -3 -3`","`3 3 2`","`TypeError`","`-2 -3 -2`"],"answer":3,"explanation":"It logs `-2 -3 -2`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.round(-4.5), Math.floor(-4.5), Math.trunc(-4.5));\n```","options":["`TypeError`","`-4 -5 -4`","`-4 -4 -4`","`5 4 4`"],"answer":1,"explanation":"It logs `-4 -5 -4`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.floor(-2.7), Math.ceil(-2.7), Math.round(-2.7));\n```","options":["`2 3 3`","`-3 -2 -3`","`-3 -3 -3`","`TypeError`"],"answer":1,"explanation":"It logs `-3 -2 -3`."}]
---
# Predict the Output: Rounding numbers #9

`Math.floor` rounds down (toward −∞), `Math.trunc` drops the decimals (toward 0), `Math.round` rounds .5 up (toward +∞), and `toFixed` returns a **string**.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
