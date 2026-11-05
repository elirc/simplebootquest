---
slug: "js-predict-strings-5"
title: "Predict the Output: String methods #5"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(\"frontend\".slice(2, 6));\n```","options":["`onten`","`onte`","`nte`","`ontend`"],"answer":1,"explanation":"It logs `onte`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"variable\".slice(0, 4));\n```","options":["`ari`","`TypeError`","`vari`","`varia`"],"answer":2,"explanation":"It logs `vari`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"banana\".substring(4, 0));\n```","options":["`ana`","`bana`","`TypeError`","`banan`"],"answer":1,"explanation":"It logs `bana`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"javascript\".substring(7, 0));\n```","options":["`javascri`","`avascr`","`javascr`","`TypeError`"],"answer":2,"explanation":"It logs `javascr`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"network\".substring(6, 1));\n```","options":["`twor`","`etwork`","`TypeError`","`etwor`"],"answer":3,"explanation":"It logs `etwor`."}]
---
# Predict the Output: String methods #5

`slice(start, end)` excludes `end`, negative indexes count from the end, and strings are immutable: methods return new strings.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
