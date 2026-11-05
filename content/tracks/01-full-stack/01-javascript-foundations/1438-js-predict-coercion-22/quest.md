---
slug: "js-predict-coercion-22"
title: "Predict the Output: Type coercion #22"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(\"9\" - 4);\n```","options":["`94`","`5`","`NaN`","`6`"],"answer":1,"explanation":"It logs `5`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"2\" - 5);\n```","options":["`NaN`","`25`","`-3`","`-2`"],"answer":2,"explanation":"It logs `-3`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"4\" * \"1\");\n```","options":["`5`","`NaN`","`4`","`41`"],"answer":2,"explanation":"It logs `4`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"4\" + 3);\n```","options":["`44`","`NaN`","`7`","`43`"],"answer":3,"explanation":"It logs `43`."},{"prompt":"What does this log?\n\n```js\nconsole.log(null + 4);\n```","options":["`5`","`41`","`NaN`","`4`"],"answer":3,"explanation":"It logs `4`."}]
---
# Predict the Output: Type coercion #22

`+` concatenates if either side is a string; `-`, `*` and `/` always convert to numbers. That asymmetry causes many bugs.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
