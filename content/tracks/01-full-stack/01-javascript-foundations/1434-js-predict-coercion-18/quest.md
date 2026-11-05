---
slug: "js-predict-coercion-18"
title: "Predict the Output: Type coercion #18"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log([4] + [4]);\n```","options":["`44`","`45`","`NaN`","`8`"],"answer":0,"explanation":"It logs `44`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"3\" * \"4\");\n```","options":["`13`","`12`","`NaN`","`34`"],"answer":1,"explanation":"It logs `12`."},{"prompt":"What does this log?\n\n```js\nconsole.log([2] + [2]);\n```","options":["`23`","`22`","`4`","`NaN`"],"answer":1,"explanation":"It logs `22`."},{"prompt":"What does this log?\n\n```js\nconsole.log([8] + [5]);\n```","options":["`NaN`","`85`","`86`","`13`"],"answer":1,"explanation":"It logs `85`."},{"prompt":"What does this log?\n\n```js\nconsole.log(9 + 8 + \"9\");\n```","options":["`989`","`98`","`179`","`180`"],"answer":2,"explanation":"It logs `179`."}]
---
# Predict the Output: Type coercion #18

`+` concatenates if either side is a string; `-`, `*` and `/` always convert to numbers. That asymmetry causes many bugs.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
