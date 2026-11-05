---
slug: "js-predict-coercion-10"
title: "Predict the Output: Type coercion #10"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(7 + 8 + \"7\");\n```","options":["`787`","`158`","`78`","`157`"],"answer":3,"explanation":"It logs `157`."},{"prompt":"What does this log?\n\n```js\nconsole.log([6] + [1]);\n```","options":["`61`","`NaN`","`62`","`7`"],"answer":0,"explanation":"It logs `61`."},{"prompt":"What does this log?\n\n```js\nconsole.log(8 + 5 + \"8\");\n```","options":["`858`","`85`","`139`","`138`"],"answer":3,"explanation":"It logs `138`."},{"prompt":"What does this log?\n\n```js\nconsole.log(4 + 1 + \"5\");\n```","options":["`55`","`415`","`56`","`41`"],"answer":0,"explanation":"It logs `55`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"8\" - 7);\n```","options":["`2`","`87`","`NaN`","`1`"],"answer":3,"explanation":"It logs `1`."}]
---
# Predict the Output: Type coercion #10

`+` concatenates if either side is a string; `-`, `*` and `/` always convert to numbers. That asymmetry causes many bugs.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
