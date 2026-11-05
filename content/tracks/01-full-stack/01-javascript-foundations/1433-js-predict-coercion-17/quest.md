---
slug: "js-predict-coercion-17"
title: "Predict the Output: Type coercion #17"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log([1] + [8]);\n```","options":["`18`","`9`","`19`","`NaN`"],"answer":0,"explanation":"It logs `18`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"3\" - 8);\n```","options":["`NaN`","`-4`","`38`","`-5`"],"answer":3,"explanation":"It logs `-5`."},{"prompt":"What does this log?\n\n```js\nconsole.log([9] + [2]);\n```","options":["`11`","`92`","`93`","`NaN`"],"answer":1,"explanation":"It logs `92`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"6\" * \"9\");\n```","options":["`69`","`55`","`NaN`","`54`"],"answer":3,"explanation":"It logs `54`."},{"prompt":"What does this log?\n\n```js\nconsole.log(null + 9);\n```","options":["`9`","`98`","`NaN`","`10`"],"answer":0,"explanation":"It logs `9`."}]
---
# Predict the Output: Type coercion #17

`+` concatenates if either side is a string; `-`, `*` and `/` always convert to numbers. That asymmetry causes many bugs.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
