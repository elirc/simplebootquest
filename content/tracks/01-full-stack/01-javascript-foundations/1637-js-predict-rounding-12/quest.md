---
slug: "js-predict-rounding-12"
title: "Predict the Output: Rounding numbers #12"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(Math.ceil(-8.7), Math.round(-8.7), Math.trunc(-8.7));\n```","options":["`-9 -9 -9`","`-8 -9 -8`","`9 9 8`","`TypeError`"],"answer":1,"explanation":"It logs `-8 -9 -8`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.trunc(1.7), Math.ceil(1.7), Math.round(1.7));\n```","options":["`2 2 2`","`1 2 2`","`TypeError`","`-1 -1 -2`"],"answer":1,"explanation":"It logs `1 2 2`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.ceil(-4.7), Math.trunc(-4.7), Math.round(-4.7));\n```","options":["`TypeError`","`-5 -5 -5`","`-4 -4 -5`","`5 4 5`"],"answer":2,"explanation":"It logs `-4 -4 -5`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.ceil(-6.2), Math.floor(-6.2), Math.trunc(-6.2));\n```","options":["`-6 -7 -6`","`-6 -6 -6`","`TypeError`","`7 6 6`"],"answer":0,"explanation":"It logs `-6 -7 -6`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.trunc(-3.2), Math.floor(-3.2), Math.ceil(-3.2));\n```","options":["`TypeError`","`3 3 4`","`-3 -4 -3`","`-3 -3 -3`"],"answer":2,"explanation":"It logs `-3 -4 -3`."}]
---
# Predict the Output: Rounding numbers #12

`Math.floor` rounds down (toward −∞), `Math.trunc` drops the decimals (toward 0), `Math.round` rounds .5 up (toward +∞), and `toFixed` returns a **string**.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
