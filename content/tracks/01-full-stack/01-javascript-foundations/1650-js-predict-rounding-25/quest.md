---
slug: "js-predict-rounding-25"
title: "Predict the Output: Rounding numbers #25"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(Math.round(-6.5), Math.floor(-6.5), Math.ceil(-6.5));\n```","options":["`TypeError`","`-6 -6 -6`","`-6 -7 -6`","`7 6 7`"],"answer":2,"explanation":"It logs `-6 -7 -6`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.ceil(-9.7), Math.floor(-9.7), Math.round(-9.7));\n```","options":["`10 9 10`","`TypeError`","`-9 -10 -10`","`-10 -10 -10`"],"answer":2,"explanation":"It logs `-9 -10 -10`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.round(7.5), Math.ceil(7.5), Math.trunc(7.5));\n```","options":["`8 8 7`","`-7 -7 -7`","`TypeError`","`8 8 8`"],"answer":0,"explanation":"It logs `8 8 7`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.ceil(-1.2), Math.round(-1.2), Math.floor(-1.2));\n```","options":["`-1 -1 -1`","`TypeError`","`-1 -1 -2`","`2 1 1`"],"answer":2,"explanation":"It logs `-1 -1 -2`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.ceil(-4.5), Math.round(-4.5), Math.floor(-4.5));\n```","options":["`TypeError`","`-4 -4 -5`","`5 5 4`","`-4 -4 -4`"],"answer":1,"explanation":"It logs `-4 -4 -5`."}]
---
# Predict the Output: Rounding numbers #25

`Math.floor` rounds down (toward −∞), `Math.trunc` drops the decimals (toward 0), `Math.round` rounds .5 up (toward +∞), and `toFixed` returns a **string**.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
