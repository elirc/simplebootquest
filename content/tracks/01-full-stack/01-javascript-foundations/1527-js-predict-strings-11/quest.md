---
slug: "js-predict-strings-11"
title: "Predict the Output: String methods #11"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(\"react\".slice(1, 4));\n```","options":["`eact`","`ac`","`eac`","`TypeError`"],"answer":2,"explanation":"It logs `eac`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"postgres\".substring(7, 3));\n```","options":["`gre`","`tgre`","`tgres`","`TypeError`"],"answer":1,"explanation":"It logs `tgre`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"frontend\".substring(7, 1));\n```","options":["`ronten`","`TypeError`","`rontend`","`onten`"],"answer":0,"explanation":"It logs `ronten`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"frontend\".slice(3, 7));\n```","options":["`nten`","`TypeError`","`ntend`","`ten`"],"answer":0,"explanation":"It logs `nten`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"variable\".slice(1, 6));\n```","options":["`riab`","`ariab`","`TypeError`","`ariabl`"],"answer":1,"explanation":"It logs `ariab`."}]
---
# Predict the Output: String methods #11

`slice(start, end)` excludes `end`, negative indexes count from the end, and strings are immutable: methods return new strings.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
