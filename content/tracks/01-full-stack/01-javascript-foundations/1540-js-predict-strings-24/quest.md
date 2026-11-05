---
slug: "js-predict-strings-24"
title: "Predict the Output: String methods #24"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(\"network\".slice(0, 1));\n```","options":["``","`ne`","`TypeError`","`n`"],"answer":3,"explanation":"It logs `n`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"express\".slice(2, 4));\n```","options":["`pres`","`pre`","`pr`","`r`"],"answer":2,"explanation":"It logs `pr`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"promise\".slice(0, 2));\n```","options":["`r`","`TypeError`","`pro`","`pr`"],"answer":3,"explanation":"It logs `pr`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"database\".substring(7, 2));\n```","options":["`abas`","`TypeError`","`tabas`","`tabase`"],"answer":2,"explanation":"It logs `tabas`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"react\".slice(3, 4));\n```","options":["``","`TypeError`","`ct`","`c`"],"answer":3,"explanation":"It logs `c`."}]
---
# Predict the Output: String methods #24

`slice(start, end)` excludes `end`, negative indexes count from the end, and strings are immutable: methods return new strings.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
