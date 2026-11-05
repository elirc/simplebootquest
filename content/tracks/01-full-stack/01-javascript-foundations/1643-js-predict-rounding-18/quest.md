---
slug: "js-predict-rounding-18"
title: "Predict the Output: Rounding numbers #18"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(Math.floor(-9.5), Math.trunc(-9.5), Math.ceil(-9.5));\n```","options":["`TypeError`","`-10 -9 -9`","`-9 -9 -9`","`9 9 10`"],"answer":1,"explanation":"It logs `-10 -9 -9`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.trunc(-2.7), Math.floor(-2.7), Math.ceil(-2.7));\n```","options":["`-3 -3 -3`","`TypeError`","`-2 -3 -2`","`2 2 3`"],"answer":2,"explanation":"It logs `-2 -3 -2`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.floor(-2.7), Math.trunc(-2.7), Math.round(-2.7));\n```","options":["`-3 -2 -3`","`TypeError`","`2 2 3`","`-3 -3 -3`"],"answer":0,"explanation":"It logs `-3 -2 -3`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.round(1.5), Math.trunc(1.5), Math.floor(1.5));\n```","options":["`-1 -1 -2`","`2 1 1`","`TypeError`","`2 2 2`"],"answer":1,"explanation":"It logs `2 1 1`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.round(-4.2), Math.trunc(-4.2), Math.floor(-4.2));\n```","options":["`-4 -4 -4`","`4 4 4`","`TypeError`","`-4 -4 -5`"],"answer":3,"explanation":"It logs `-4 -4 -5`."}]
---
# Predict the Output: Rounding numbers #18

`Math.floor` rounds down (toward −∞), `Math.trunc` drops the decimals (toward 0), `Math.round` rounds .5 up (toward +∞), and `toFixed` returns a **string**.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
