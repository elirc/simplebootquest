---
slug: "js-predict-coercion-25"
title: "Predict the Output: Type coercion #25"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(8 + 8 + \"4\");\n```","options":["`165`","`88`","`884`","`164`"],"answer":3,"explanation":"It logs `164`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"3\" + 2);\n```","options":["`32`","`33`","`5`","`NaN`"],"answer":0,"explanation":"It logs `32`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"3\" + - \"2\");\n```","options":["`NaN`","`3-2`","`1`","`32`"],"answer":1,"explanation":"It logs `3-2`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"1\" * \"5\");\n```","options":["`5`","`6`","`15`","`NaN`"],"answer":0,"explanation":"It logs `5`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"7\" + - \"8\");\n```","options":["`78`","`NaN`","`-1`","`7-8`"],"answer":3,"explanation":"It logs `7-8`."}]
---
# Predict the Output: Type coercion #25

`+` concatenates if either side is a string; `-`, `*` and `/` always convert to numbers. That asymmetry causes many bugs.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
