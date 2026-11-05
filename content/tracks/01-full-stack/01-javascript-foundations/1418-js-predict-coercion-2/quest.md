---
slug: "js-predict-coercion-2"
title: "Predict the Output: Type coercion #2"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(null + 5);\n```","options":["`6`","`NaN`","`57`","`5`"],"answer":3,"explanation":"It logs `5`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"8\" + - \"6\");\n```","options":["`2`","`NaN`","`86`","`8-6`"],"answer":3,"explanation":"It logs `8-6`."},{"prompt":"What does this log?\n\n```js\nconsole.log(true + 4);\n```","options":["`6`","`true4`","`5`","`41`"],"answer":2,"explanation":"It logs `5`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"4\" * \"7\");\n```","options":["`28`","`NaN`","`29`","`47`"],"answer":0,"explanation":"It logs `28`."},{"prompt":"What does this log?\n\n```js\nconsole.log(2 + 8 + \"9\");\n```","options":["`110`","`289`","`109`","`28`"],"answer":2,"explanation":"It logs `109`."}]
---
# Predict the Output: Type coercion #2

`+` concatenates if either side is a string; `-`, `*` and `/` always convert to numbers. That asymmetry causes many bugs.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
