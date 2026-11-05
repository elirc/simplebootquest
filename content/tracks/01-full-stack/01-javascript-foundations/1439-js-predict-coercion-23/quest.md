---
slug: "js-predict-coercion-23"
title: "Predict the Output: Type coercion #23"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(5 + 6 + \"9\");\n```","options":["`120`","`56`","`119`","`569`"],"answer":2,"explanation":"It logs `119`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"8\" * \"3\");\n```","options":["`24`","`25`","`NaN`","`83`"],"answer":0,"explanation":"It logs `24`."},{"prompt":"What does this log?\n\n```js\nconsole.log(2 + 1 + \"1\");\n```","options":["`31`","`21`","`32`","`211`"],"answer":0,"explanation":"It logs `31`."},{"prompt":"What does this log?\n\n```js\nconsole.log(6 + 6 + \"2\");\n```","options":["`122`","`66`","`123`","`662`"],"answer":0,"explanation":"It logs `122`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"6\" + - \"2\");\n```","options":["`6-2`","`62`","`NaN`","`4`"],"answer":0,"explanation":"It logs `6-2`."}]
---
# Predict the Output: Type coercion #23

`+` concatenates if either side is a string; `-`, `*` and `/` always convert to numbers. That asymmetry causes many bugs.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
