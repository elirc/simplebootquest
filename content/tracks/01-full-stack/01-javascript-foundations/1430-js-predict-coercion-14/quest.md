---
slug: "js-predict-coercion-14"
title: "Predict the Output: Type coercion #14"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(\"4\" + 9);\n```","options":["`49`","`NaN`","`13`","`50`"],"answer":0,"explanation":"It logs `49`."},{"prompt":"What does this log?\n\n```js\nconsole.log(true + 5);\n```","options":["`true5`","`7`","`57`","`6`"],"answer":3,"explanation":"It logs `6`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"5\" + 8);\n```","options":["`59`","`NaN`","`58`","`13`"],"answer":2,"explanation":"It logs `58`."},{"prompt":"What does this log?\n\n```js\nconsole.log(null + 7);\n```","options":["`74`","`7`","`NaN`","`8`"],"answer":1,"explanation":"It logs `7`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"2\" + 4);\n```","options":["`25`","`24`","`6`","`NaN`"],"answer":1,"explanation":"It logs `24`."}]
---
# Predict the Output: Type coercion #14

`+` concatenates if either side is a string; `-`, `*` and `/` always convert to numbers. That asymmetry causes many bugs.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
