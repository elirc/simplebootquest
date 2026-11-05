---
slug: "js-predict-coercion-12"
title: "Predict the Output: Type coercion #12"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log([5] + [9]);\n```","options":["`NaN`","`14`","`60`","`59`"],"answer":3,"explanation":"It logs `59`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"5\" + 9);\n```","options":["`14`","`60`","`NaN`","`59`"],"answer":3,"explanation":"It logs `59`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"2\" + 7);\n```","options":["`27`","`9`","`NaN`","`28`"],"answer":0,"explanation":"It logs `27`."},{"prompt":"What does this log?\n\n```js\nconsole.log(8 + 2 + \"2\");\n```","options":["`102`","`103`","`822`","`82`"],"answer":0,"explanation":"It logs `102`."},{"prompt":"What does this log?\n\n```js\nconsole.log([2] + [3]);\n```","options":["`23`","`5`","`24`","`NaN`"],"answer":0,"explanation":"It logs `23`."}]
---
# Predict the Output: Type coercion #12

`+` concatenates if either side is a string; `-`, `*` and `/` always convert to numbers. That asymmetry causes many bugs.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
