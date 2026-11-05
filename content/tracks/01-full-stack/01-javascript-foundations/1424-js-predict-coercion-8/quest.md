---
slug: "js-predict-coercion-8"
title: "Predict the Output: Type coercion #8"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(\"9\" - 9);\n```","options":["`NaN`","`1`","`0`","`99`"],"answer":2,"explanation":"It logs `0`."},{"prompt":"What does this log?\n\n```js\nconsole.log(9 + 6 + \"8\");\n```","options":["`96`","`158`","`159`","`968`"],"answer":1,"explanation":"It logs `158`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"5\" * \"9\");\n```","options":["`46`","`45`","`59`","`NaN`"],"answer":1,"explanation":"It logs `45`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"7\" + 2);\n```","options":["`72`","`NaN`","`73`","`9`"],"answer":0,"explanation":"It logs `72`."},{"prompt":"What does this log?\n\n```js\nconsole.log(1 + 1 + \"6\");\n```","options":["`26`","`116`","`27`","`11`"],"answer":0,"explanation":"It logs `26`."}]
---
# Predict the Output: Type coercion #8

`+` concatenates if either side is a string; `-`, `*` and `/` always convert to numbers. That asymmetry causes many bugs.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
