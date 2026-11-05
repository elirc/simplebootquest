---
slug: "js-predict-coercion-24"
title: "Predict the Output: Type coercion #24"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(\"5\" + 4);\n```","options":["`55`","`54`","`NaN`","`9`"],"answer":1,"explanation":"It logs `54`."},{"prompt":"What does this log?\n\n```js\nconsole.log([9] + [3]);\n```","options":["`12`","`93`","`94`","`NaN`"],"answer":1,"explanation":"It logs `93`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"7\" * \"4\");\n```","options":["`74`","`28`","`29`","`NaN`"],"answer":1,"explanation":"It logs `28`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"5\" + 2);\n```","options":["`53`","`7`","`NaN`","`52`"],"answer":3,"explanation":"It logs `52`."},{"prompt":"What does this log?\n\n```js\nconsole.log(9 + 1 + \"8\");\n```","options":["`109`","`91`","`108`","`918`"],"answer":2,"explanation":"It logs `108`."}]
---
# Predict the Output: Type coercion #24

`+` concatenates if either side is a string; `-`, `*` and `/` always convert to numbers. That asymmetry causes many bugs.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
