---
slug: "js-predict-coercion-9"
title: "Predict the Output: Type coercion #9"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log([1] + [3]);\n```","options":["`4`","`13`","`NaN`","`14`"],"answer":1,"explanation":"It logs `13`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"6\" * \"6\");\n```","options":["`66`","`37`","`NaN`","`36`"],"answer":3,"explanation":"It logs `36`."},{"prompt":"What does this log?\n\n```js\nconsole.log([7] + [8]);\n```","options":["`78`","`15`","`79`","`NaN`"],"answer":0,"explanation":"It logs `78`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"9\" * \"9\");\n```","options":["`99`","`81`","`NaN`","`82`"],"answer":1,"explanation":"It logs `81`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"8\" + 6);\n```","options":["`87`","`86`","`14`","`NaN`"],"answer":1,"explanation":"It logs `86`."}]
---
# Predict the Output: Type coercion #9

`+` concatenates if either side is a string; `-`, `*` and `/` always convert to numbers. That asymmetry causes many bugs.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
