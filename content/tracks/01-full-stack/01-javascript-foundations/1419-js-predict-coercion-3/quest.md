---
slug: "js-predict-coercion-3"
title: "Predict the Output: Type coercion #3"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(\"6\" + - \"9\");\n```","options":["`6-9`","`-3`","`NaN`","`69`"],"answer":0,"explanation":"It logs `6-9`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"3\" + - \"9\");\n```","options":["`-6`","`3-9`","`NaN`","`39`"],"answer":1,"explanation":"It logs `3-9`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"4\" + 8);\n```","options":["`NaN`","`12`","`48`","`49`"],"answer":2,"explanation":"It logs `48`."},{"prompt":"What does this log?\n\n```js\nconsole.log([3] + [8]);\n```","options":["`39`","`NaN`","`38`","`11`"],"answer":2,"explanation":"It logs `38`."},{"prompt":"What does this log?\n\n```js\nconsole.log([7] + [2]);\n```","options":["`9`","`NaN`","`72`","`73`"],"answer":2,"explanation":"It logs `72`."}]
---
# Predict the Output: Type coercion #3

`+` concatenates if either side is a string; `-`, `*` and `/` always convert to numbers. That asymmetry causes many bugs.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
