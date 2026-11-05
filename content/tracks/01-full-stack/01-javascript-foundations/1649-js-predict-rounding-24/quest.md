---
slug: "js-predict-rounding-24"
title: "Predict the Output: Rounding numbers #24"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(Math.floor(-6.2), Math.trunc(-6.2), Math.round(-6.2));\n```","options":["`-7 -6 -6`","`TypeError`","`-6 -6 -6`","`6 6 6`"],"answer":0,"explanation":"It logs `-7 -6 -6`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.floor(-5.7), Math.round(-5.7), Math.trunc(-5.7));\n```","options":["`-6 -6 -6`","`-6 -6 -5`","`5 6 5`","`TypeError`"],"answer":1,"explanation":"It logs `-6 -6 -5`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.ceil(2.2), Math.trunc(2.2), Math.round(2.2));\n```","options":["`-2 -2 -2`","`TypeError`","`3 2 2`","`2 2 2`"],"answer":2,"explanation":"It logs `3 2 2`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.trunc(7.7), Math.ceil(7.7), Math.round(7.7));\n```","options":["`8 8 8`","`-7 -7 -8`","`TypeError`","`7 8 8`"],"answer":3,"explanation":"It logs `7 8 8`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.ceil(-6.2), Math.round(-6.2), Math.floor(-6.2));\n```","options":["`-6 -6 -6`","`-6 -6 -7`","`7 6 6`","`TypeError`"],"answer":1,"explanation":"It logs `-6 -6 -7`."}]
---
# Predict the Output: Rounding numbers #24

`Math.floor` rounds down (toward −∞), `Math.trunc` drops the decimals (toward 0), `Math.round` rounds .5 up (toward +∞), and `toFixed` returns a **string**.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
