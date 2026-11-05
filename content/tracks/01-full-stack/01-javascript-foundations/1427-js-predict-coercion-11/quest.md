---
slug: "js-predict-coercion-11"
title: "Predict the Output: Type coercion #11"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(\"7\" - 9);\n```","options":["`79`","`-2`","`-1`","`NaN`"],"answer":1,"explanation":"It logs `-2`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"8\" - 6);\n```","options":["`2`","`86`","`3`","`NaN`"],"answer":0,"explanation":"It logs `2`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"7\" + 4);\n```","options":["`74`","`NaN`","`11`","`75`"],"answer":0,"explanation":"It logs `74`."},{"prompt":"What does this log?\n\n```js\nconsole.log(true + 7);\n```","options":["`72`","`true7`","`9`","`8`"],"answer":3,"explanation":"It logs `8`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"1\" - 6);\n```","options":["`-4`","`16`","`-5`","`NaN`"],"answer":2,"explanation":"It logs `-5`."}]
---
# Predict the Output: Type coercion #11

`+` concatenates if either side is a string; `-`, `*` and `/` always convert to numbers. That asymmetry causes many bugs.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
