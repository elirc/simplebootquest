---
slug: "js-predict-coercion-1"
title: "Predict the Output: Type coercion #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(null + 8);\n```","options":["`82`","`NaN`","`9`","`8`"],"answer":3,"explanation":"It logs `8`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"6\" - 2);\n```","options":["`4`","`5`","`62`","`NaN`"],"answer":0,"explanation":"It logs `4`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"6\" * \"8\");\n```","options":["`49`","`48`","`68`","`NaN`"],"answer":1,"explanation":"It logs `48`."},{"prompt":"What does this log?\n\n```js\nconsole.log([6] + [9]);\n```","options":["`70`","`69`","`15`","`NaN`"],"answer":1,"explanation":"It logs `69`."},{"prompt":"What does this log?\n\n```js\nconsole.log(true + 9);\n```","options":["`11`","`97`","`10`","`true9`"],"answer":2,"explanation":"It logs `10`."}]
---
# Predict the Output: Type coercion #1

`+` concatenates if either side is a string; `-`, `*` and `/` always convert to numbers. That asymmetry causes many bugs.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
