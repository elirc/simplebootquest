---
slug: "js-predict-strings-25"
title: "Predict the Output: String methods #25"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(\"postgres\".slice(2, 6));\n```","options":["`stgr`","`stgres`","`stgre`","`tgr`"],"answer":0,"explanation":"It logs `stgr`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"variable\".substring(6, 2));\n```","options":["`iab`","`TypeError`","`riabl`","`riab`"],"answer":3,"explanation":"It logs `riab`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"closure\".substring(4, 0));\n```","options":["`closu`","`clos`","`los`","`TypeError`"],"answer":1,"explanation":"It logs `clos`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"promise\".slice(0, 3));\n```","options":["`prom`","`ro`","`pro`","`TypeError`"],"answer":2,"explanation":"It logs `pro`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"frontend\".substring(2, 0));\n```","options":["`TypeError`","`fr`","`r`","`fro`"],"answer":1,"explanation":"It logs `fr`."}]
---
# Predict the Output: String methods #25

`slice(start, end)` excludes `end`, negative indexes count from the end, and strings are immutable: methods return new strings.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
