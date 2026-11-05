---
slug: "js-predict-coercion-7"
title: "Predict the Output: Type coercion #7"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(\"9\" + - \"1\");\n```","options":["`9-1`","`NaN`","`8`","`91`"],"answer":0,"explanation":"It logs `9-1`."},{"prompt":"What does this log?\n\n```js\nconsole.log(2 + 7 + \"2\");\n```","options":["`272`","`93`","`27`","`92`"],"answer":3,"explanation":"It logs `92`."},{"prompt":"What does this log?\n\n```js\nconsole.log(null + 6);\n```","options":["`7`","`NaN`","`65`","`6`"],"answer":3,"explanation":"It logs `6`."},{"prompt":"What does this log?\n\n```js\nconsole.log(5 + 7 + \"2\");\n```","options":["`572`","`122`","`57`","`123`"],"answer":1,"explanation":"It logs `122`."},{"prompt":"What does this log?\n\n```js\nconsole.log(true + 8);\n```","options":["`10`","`true8`","`9`","`88`"],"answer":2,"explanation":"It logs `9`."}]
---
# Predict the Output: Type coercion #7

`+` concatenates if either side is a string; `-`, `*` and `/` always convert to numbers. That asymmetry causes many bugs.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
