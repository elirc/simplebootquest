---
slug: "js-predict-rounding-8"
title: "Predict the Output: Rounding numbers #8"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(Math.round(-4.5), Math.trunc(-4.5), Math.floor(-4.5));\n```","options":["`-4 -4 -5`","`5 4 4`","`TypeError`","`-4 -4 -4`"],"answer":0,"explanation":"It logs `-4 -4 -5`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.ceil(9.7), Math.round(9.7), Math.trunc(9.7));\n```","options":["`10 10 10`","`-9 -10 -9`","`TypeError`","`10 10 9`"],"answer":3,"explanation":"It logs `10 10 9`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.floor(-5.5), Math.trunc(-5.5), Math.round(-5.5));\n```","options":["`TypeError`","`5 5 6`","`-6 -5 -5`","`-5 -5 -5`"],"answer":2,"explanation":"It logs `-6 -5 -5`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.round(-8.5), Math.floor(-8.5), Math.trunc(-8.5));\n```","options":["`-8 -9 -8`","`9 8 8`","`TypeError`","`-8 -8 -8`"],"answer":0,"explanation":"It logs `-8 -9 -8`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.round(5.7), Math.floor(5.7), Math.ceil(5.7));\n```","options":["`6 5 6`","`6 6 6`","`-6 -6 -5`","`TypeError`"],"answer":0,"explanation":"It logs `6 5 6`."}]
---
# Predict the Output: Rounding numbers #8

`Math.floor` rounds down (toward −∞), `Math.trunc` drops the decimals (toward 0), `Math.round` rounds .5 up (toward +∞), and `toFixed` returns a **string**.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
