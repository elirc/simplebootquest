---
slug: "js-predict-coercion-4"
title: "Predict the Output: Type coercion #4"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(\"9\" * \"1\");\n```","options":["`91`","`10`","`9`","`NaN`"],"answer":2,"explanation":"It logs `9`."},{"prompt":"What does this log?\n\n```js\nconsole.log([8] + [9]);\n```","options":["`17`","`89`","`90`","`NaN`"],"answer":1,"explanation":"It logs `89`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"3\" + 9);\n```","options":["`12`","`40`","`NaN`","`39`"],"answer":3,"explanation":"It logs `39`."},{"prompt":"What does this log?\n\n```js\nconsole.log([2] + [6]);\n```","options":["`26`","`8`","`27`","`NaN`"],"answer":0,"explanation":"It logs `26`."},{"prompt":"What does this log?\n\n```js\nconsole.log(null + 3);\n```","options":["`34`","`4`","`NaN`","`3`"],"answer":3,"explanation":"It logs `3`."}]
---
# Predict the Output: Type coercion #4

`+` concatenates if either side is a string; `-`, `*` and `/` always convert to numbers. That asymmetry causes many bugs.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
