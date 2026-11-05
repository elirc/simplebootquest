---
slug: "js-predict-rounding-2"
title: "Predict the Output: Rounding numbers #2"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(Math.floor(-8.7), Math.ceil(-8.7), Math.trunc(-8.7));\n```","options":["`TypeError`","`-9 -9 -9`","`8 9 8`","`-9 -8 -8`"],"answer":3,"explanation":"It logs `-9 -8 -8`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.ceil(-7.7), Math.trunc(-7.7), Math.floor(-7.7));\n```","options":["`8 7 7`","`-7 -7 -8`","`TypeError`","`-8 -8 -8`"],"answer":1,"explanation":"It logs `-7 -7 -8`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.round(-4.7), Math.floor(-4.7), Math.ceil(-4.7));\n```","options":["`TypeError`","`-5 -5 -5`","`-5 -5 -4`","`5 4 5`"],"answer":2,"explanation":"It logs `-5 -5 -4`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.trunc(-8.7), Math.ceil(-8.7), Math.floor(-8.7));\n```","options":["`TypeError`","`-8 -8 -9`","`-9 -9 -9`","`8 9 8`"],"answer":1,"explanation":"It logs `-8 -8 -9`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.ceil(8.5), Math.floor(8.5), Math.trunc(8.5));\n```","options":["`-8 -9 -8`","`TypeError`","`9 8 8`","`9 9 9`"],"answer":2,"explanation":"It logs `9 8 8`."}]
---
# Predict the Output: Rounding numbers #2

`Math.floor` rounds down (toward −∞), `Math.trunc` drops the decimals (toward 0), `Math.round` rounds .5 up (toward +∞), and `toFixed` returns a **string**.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
