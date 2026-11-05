---
slug: "js-predict-strings-4"
title: "Predict the Output: String methods #4"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(\"database\".slice(2, 6));\n```","options":["`tabase`","`taba`","`tabas`","`aba`"],"answer":1,"explanation":"It logs `taba`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"variable\".substring(3, 0));\n```","options":["`vari`","`TypeError`","`var`","`ar`"],"answer":2,"explanation":"It logs `var`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"postgres\".substring(7, 2));\n```","options":["`tgre`","`TypeError`","`stgre`","`stgres`"],"answer":2,"explanation":"It logs `stgre`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"promise\".slice(3, 6));\n```","options":["`TypeError`","`is`","`mise`","`mis`"],"answer":3,"explanation":"It logs `mis`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"postgres\".slice(0, 7));\n```","options":["`TypeError`","`ostgre`","`postgres`","`postgre`"],"answer":3,"explanation":"It logs `postgre`."}]
---
# Predict the Output: String methods #4

`slice(start, end)` excludes `end`, negative indexes count from the end, and strings are immutable: methods return new strings.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
