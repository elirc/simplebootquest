---
slug: "js-predict-rounding-6"
title: "Predict the Output: Rounding numbers #6"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(Math.ceil(1.2), Math.floor(1.2), Math.trunc(1.2));\n```","options":["`-1 -2 -1`","`TypeError`","`1 1 1`","`2 1 1`"],"answer":3,"explanation":"It logs `2 1 1`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.round(-6.5), Math.floor(-6.5), Math.trunc(-6.5));\n```","options":["`7 6 6`","`TypeError`","`-6 -7 -6`","`-6 -6 -6`"],"answer":2,"explanation":"It logs `-6 -7 -6`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.round(-9.7), Math.trunc(-9.7), Math.floor(-9.7));\n```","options":["`10 9 9`","`-10 -10 -10`","`TypeError`","`-10 -9 -10`"],"answer":3,"explanation":"It logs `-10 -9 -10`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.round(-4.5), Math.ceil(-4.5), Math.floor(-4.5));\n```","options":["`5 5 4`","`-4 -4 -5`","`-4 -4 -4`","`TypeError`"],"answer":1,"explanation":"It logs `-4 -4 -5`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.trunc(-4.2), Math.floor(-4.2), Math.round(-4.2));\n```","options":["`-4 -4 -4`","`TypeError`","`4 4 4`","`-4 -5 -4`"],"answer":3,"explanation":"It logs `-4 -5 -4`."}]
---
# Predict the Output: Rounding numbers #6

`Math.floor` rounds down (toward −∞), `Math.trunc` drops the decimals (toward 0), `Math.round` rounds .5 up (toward +∞), and `toFixed` returns a **string**.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
