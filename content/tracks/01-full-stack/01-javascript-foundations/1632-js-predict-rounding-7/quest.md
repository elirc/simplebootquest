---
slug: "js-predict-rounding-7"
title: "Predict the Output: Rounding numbers #7"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(Math.round(-1.2), Math.ceil(-1.2), Math.floor(-1.2));\n```","options":["`TypeError`","`1 2 1`","`-1 -1 -2`","`-1 -1 -1`"],"answer":2,"explanation":"It logs `-1 -1 -2`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.ceil(2.5), Math.floor(2.5), Math.trunc(2.5));\n```","options":["`TypeError`","`-2 -3 -2`","`3 2 2`","`3 3 3`"],"answer":2,"explanation":"It logs `3 2 2`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.trunc(-9.7), Math.floor(-9.7), Math.round(-9.7));\n```","options":["`9 9 10`","`TypeError`","`-10 -10 -10`","`-9 -10 -10`"],"answer":3,"explanation":"It logs `-9 -10 -10`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.trunc(-4.7), Math.floor(-4.7), Math.ceil(-4.7));\n```","options":["`-4 -5 -4`","`TypeError`","`4 4 5`","`-5 -5 -5`"],"answer":0,"explanation":"It logs `-4 -5 -4`."},{"prompt":"What does this log?\n\n```js\nconsole.log(Math.round(-1.5), Math.floor(-1.5), Math.trunc(-1.5));\n```","options":["`-1 -2 -1`","`TypeError`","`2 1 1`","`-1 -1 -1`"],"answer":0,"explanation":"It logs `-1 -2 -1`."}]
---
# Predict the Output: Rounding numbers #7

`Math.floor` rounds down (toward −∞), `Math.trunc` drops the decimals (toward 0), `Math.round` rounds .5 up (toward +∞), and `toFixed` returns a **string**.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
