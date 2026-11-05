---
slug: "js-predict-coercion-6"
title: "Predict the Output: Type coercion #6"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(\"8\" * \"9\");\n```","options":["`NaN`","`73`","`89`","`72`"],"answer":3,"explanation":"It logs `72`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"4\" * \"8\");\n```","options":["`NaN`","`33`","`48`","`32`"],"answer":3,"explanation":"It logs `32`."},{"prompt":"What does this log?\n\n```js\nconsole.log(true + 2);\n```","options":["`28`","`4`","`3`","`true2`"],"answer":2,"explanation":"It logs `3`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"5\" - 7);\n```","options":["`NaN`","`-2`","`-1`","`57`"],"answer":1,"explanation":"It logs `-2`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"7\" - 7);\n```","options":["`1`","`0`","`NaN`","`77`"],"answer":1,"explanation":"It logs `0`."}]
---
# Predict the Output: Type coercion #6

`+` concatenates if either side is a string; `-`, `*` and `/` always convert to numbers. That asymmetry causes many bugs.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
