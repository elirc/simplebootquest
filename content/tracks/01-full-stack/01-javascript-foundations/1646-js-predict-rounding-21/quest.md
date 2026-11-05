---
slug: "js-predict-rounding-21"
title: "Predict the Output: Rounding numbers #21"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(Math.round(-9.7), Math.trunc(-9.7), Math.ceil(-9.7));\n```","options":["`-10 -10 -10`","`10 9 10`","`-10 -9 -9`","`TypeError`"],"answer":2,"explanation":"It logs `-10 -9 -9`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.trunc(-7.2), Math.round(-7.2), Math.floor(-7.2));\n```","options":["`-7 -7 -8`","`-7 -7 -7`","`7 7 7`","`TypeError`"],"answer":0,"explanation":"It logs `-7 -7 -8`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.round(3.5), Math.ceil(3.5), Math.floor(3.5));\n```","options":["`4 4 4`","`-3 -3 -4`","`TypeError`","`4 4 3`"],"answer":3,"explanation":"It logs `4 4 3`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.ceil(-1.2), Math.floor(-1.2), Math.trunc(-1.2));\n```","options":["`-1 -2 -1`","`-1 -1 -1`","`2 1 1`","`TypeError`"],"answer":0,"explanation":"It logs `-1 -2 -1`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.round(5.5), Math.trunc(5.5), Math.floor(5.5));\n```","options":["`TypeError`","`6 5 5`","`6 6 6`","`-5 -5 -6`"],"answer":1,"explanation":"It logs `6 5 5`."}]
---
# Predict the Output: Rounding numbers #21

`Math.floor` rounds down (toward −∞), `Math.trunc` drops the decimals (toward 0), `Math.round` rounds .5 up (toward +∞), and `toFixed` returns a **string**.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
