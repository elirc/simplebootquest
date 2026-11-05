---
slug: "js-predict-rounding-19"
title: "Predict the Output: Rounding numbers #19"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(Math.ceil(5.2), Math.trunc(5.2), Math.floor(5.2));\n```","options":["`5 5 5`","`6 5 5`","`TypeError`","`-5 -5 -6`"],"answer":1,"explanation":"It logs `6 5 5`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.floor(-9.7), Math.trunc(-9.7), Math.round(-9.7));\n```","options":["`9 9 10`","`TypeError`","`-10 -10 -10`","`-10 -9 -10`"],"answer":3,"explanation":"It logs `-10 -9 -10`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.trunc(4.5), Math.round(4.5), Math.ceil(4.5));\n```","options":["`5 5 5`","`TypeError`","`-4 -4 -4`","`4 5 5`"],"answer":3,"explanation":"It logs `4 5 5`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.floor(-9.2), Math.trunc(-9.2), Math.ceil(-9.2));\n```","options":["`-9 -9 -9`","`TypeError`","`9 9 10`","`-10 -9 -9`"],"answer":3,"explanation":"It logs `-10 -9 -9`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.ceil(-8.7), Math.trunc(-8.7), Math.round(-8.7));\n```","options":["`-8 -8 -9`","`9 8 9`","`TypeError`","`-9 -9 -9`"],"answer":0,"explanation":"It logs `-8 -8 -9`."}]
---
# Predict the Output: Rounding numbers #19

`Math.floor` rounds down (toward −∞), `Math.trunc` drops the decimals (toward 0), `Math.round` rounds .5 up (toward +∞), and `toFixed` returns a **string**.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
