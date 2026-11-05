---
slug: "js-predict-strings-17"
title: "Predict the Output: String methods #17"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(\"frontend\".slice(0, 6));\n```","options":["`fronten`","`fronte`","`ronte`","`TypeError`"],"answer":1,"explanation":"It logs `fronte`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"keyboard\".substring(5, 2));\n```","options":["`TypeError`","`bo`","`ybo`","`yboa`"],"answer":2,"explanation":"It logs `ybo`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"promise\".slice(1, 3));\n```","options":["`o`","`TypeError`","`ro`","`rom`"],"answer":2,"explanation":"It logs `ro`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"postgres\".slice(3, 5));\n```","options":["`tgr`","`g`","`tg`","`tgres`"],"answer":2,"explanation":"It logs `tg`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"database\".slice(0, 5));\n```","options":["`TypeError`","`atab`","`databa`","`datab`"],"answer":3,"explanation":"It logs `datab`."}]
---
# Predict the Output: String methods #17

`slice(start, end)` excludes `end`, negative indexes count from the end, and strings are immutable: methods return new strings.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
