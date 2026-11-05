---
slug: "js-predict-strings-22"
title: "Predict the Output: String methods #22"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(\"database\".substring(6, 3));\n```","options":["`abas`","`TypeError`","`aba`","`ba`"],"answer":2,"explanation":"It logs `aba`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"promise\".substring(6, 1));\n```","options":["`TypeError`","`romise`","`omis`","`romis`"],"answer":3,"explanation":"It logs `romis`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"javascript\".slice(0, 8));\n```","options":["`avascri`","`javascri`","`TypeError`","`javascrip`"],"answer":1,"explanation":"It logs `javascri`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"javascript\".slice(3, 4));\n```","options":["`a`","``","`ascr`","`as`"],"answer":0,"explanation":"It logs `a`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"database\".slice(1, 2));\n```","options":["``","`at`","`a`","`TypeError`"],"answer":2,"explanation":"It logs `a`."}]
---
# Predict the Output: String methods #22

`slice(start, end)` excludes `end`, negative indexes count from the end, and strings are immutable: methods return new strings.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
