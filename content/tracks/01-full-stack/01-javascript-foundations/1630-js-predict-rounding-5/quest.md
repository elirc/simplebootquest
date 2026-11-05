---
slug: "js-predict-rounding-5"
title: "Predict the Output: Rounding numbers #5"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(Math.floor(-2.5), Math.round(-2.5), Math.ceil(-2.5));\n```","options":["`-3 -2 -2`","`-2 -2 -2`","`TypeError`","`2 3 3`"],"answer":0,"explanation":"It logs `-3 -2 -2`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.floor(5.7), Math.round(5.7), Math.ceil(5.7));\n```","options":["`5 6 6`","`-6 -6 -5`","`6 6 6`","`TypeError`"],"answer":0,"explanation":"It logs `5 6 6`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.trunc(-4.5), Math.ceil(-4.5), Math.floor(-4.5));\n```","options":["`TypeError`","`-4 -4 -4`","`4 5 4`","`-4 -4 -5`"],"answer":3,"explanation":"It logs `-4 -4 -5`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.round(4.5), Math.trunc(4.5), Math.ceil(4.5));\n```","options":["`5 5 5`","`-4 -4 -4`","`TypeError`","`5 4 5`"],"answer":3,"explanation":"It logs `5 4 5`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.trunc(4.5), Math.round(4.5), Math.floor(4.5));\n```","options":["`5 5 5`","`-4 -4 -5`","`TypeError`","`4 5 4`"],"answer":3,"explanation":"It logs `4 5 4`."}]
---
# Predict the Output: Rounding numbers #5

`Math.floor` rounds down (toward −∞), `Math.trunc` drops the decimals (toward 0), `Math.round` rounds .5 up (toward +∞), and `toFixed` returns a **string**.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
