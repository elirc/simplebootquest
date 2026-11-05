---
slug: "js-predict-rounding-4"
title: "Predict the Output: Rounding numbers #4"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(Math.ceil(2.5), Math.trunc(2.5), Math.round(2.5));\n```","options":["`TypeError`","`3 2 3`","`-2 -2 -2`","`3 3 3`"],"answer":1,"explanation":"It logs `3 2 3`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.round(7.2), Math.ceil(7.2), Math.trunc(7.2));\n```","options":["`-7 -7 -7`","`TypeError`","`7 8 7`","`7 7 7`"],"answer":2,"explanation":"It logs `7 8 7`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.round(-2.2), Math.floor(-2.2), Math.ceil(-2.2));\n```","options":["`TypeError`","`-2 -3 -2`","`2 2 3`","`-2 -2 -2`"],"answer":1,"explanation":"It logs `-2 -3 -2`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.ceil(6.2), Math.floor(6.2), Math.trunc(6.2));\n```","options":["`7 6 6`","`TypeError`","`-6 -7 -6`","`6 6 6`"],"answer":0,"explanation":"It logs `7 6 6`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.round(6.7), Math.trunc(6.7), Math.floor(6.7));\n```","options":["`7 6 6`","`7 7 7`","`TypeError`","`-7 -6 -7`"],"answer":0,"explanation":"It logs `7 6 6`."}]
---
# Predict the Output: Rounding numbers #4

`Math.floor` rounds down (toward −∞), `Math.trunc` drops the decimals (toward 0), `Math.round` rounds .5 up (toward +∞), and `toFixed` returns a **string**.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
