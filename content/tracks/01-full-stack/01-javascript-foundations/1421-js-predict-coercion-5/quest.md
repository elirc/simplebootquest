---
slug: "js-predict-coercion-5"
title: "Predict the Output: Type coercion #5"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(1 + 2 + \"8\");\n```","options":["`12`","`128`","`39`","`38`"],"answer":3,"explanation":"It logs `38`."},{"prompt":"What does this log?\n\n```js\nconsole.log(null + 2);\n```","options":["`NaN`","`2`","`21`","`3`"],"answer":1,"explanation":"It logs `2`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"4\" + - \"9\");\n```","options":["`-5`","`NaN`","`4-9`","`49`"],"answer":2,"explanation":"It logs `4-9`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"2\" - 6);\n```","options":["`26`","`-3`","`-4`","`NaN`"],"answer":2,"explanation":"It logs `-4`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"5\" + - \"3\");\n```","options":["`2`","`5-3`","`53`","`NaN`"],"answer":1,"explanation":"It logs `5-3`."}]
---
# Predict the Output: Type coercion #5

`+` concatenates if either side is a string; `-`, `*` and `/` always convert to numbers. That asymmetry causes many bugs.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
