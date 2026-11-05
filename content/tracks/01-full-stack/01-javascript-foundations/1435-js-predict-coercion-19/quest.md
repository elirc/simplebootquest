---
slug: "js-predict-coercion-19"
title: "Predict the Output: Type coercion #19"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(6 + 5 + \"1\");\n```","options":["`112`","`65`","`651`","`111`"],"answer":3,"explanation":"It logs `111`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"4\" + - \"5\");\n```","options":["`NaN`","`4-5`","`-1`","`45`"],"answer":1,"explanation":"It logs `4-5`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"4\" + 5);\n```","options":["`46`","`45`","`9`","`NaN`"],"answer":1,"explanation":"It logs `45`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"5\" * \"7\");\n```","options":["`35`","`57`","`NaN`","`36`"],"answer":0,"explanation":"It logs `35`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"3\" + - \"3\");\n```","options":["`NaN`","`33`","`0`","`3-3`"],"answer":3,"explanation":"It logs `3-3`."}]
---
# Predict the Output: Type coercion #19

`+` concatenates if either side is a string; `-`, `*` and `/` always convert to numbers. That asymmetry causes many bugs.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
