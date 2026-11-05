---
slug: "js-predict-strings-19"
title: "Predict the Output: String methods #19"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(\"variable\".slice(1, 5));\n```","options":["`TypeError`","`ariab`","`aria`","`ria`"],"answer":2,"explanation":"It logs `aria`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"keyboard\".substring(4, 1));\n```","options":["`yb`","`eyb`","`eybo`","`TypeError`"],"answer":1,"explanation":"It logs `eyb`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"promise\".substring(4, 3));\n```","options":["`TypeError`","`mi`","`m`","``"],"answer":2,"explanation":"It logs `m`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"express\".substring(4, 1));\n```","options":["`xpr`","`xpre`","`pr`","`TypeError`"],"answer":0,"explanation":"It logs `xpr`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"postgres\".substring(6, 1));\n```","options":["`TypeError`","`ostgr`","`stgr`","`ostgre`"],"answer":1,"explanation":"It logs `ostgr`."}]
---
# Predict the Output: String methods #19

`slice(start, end)` excludes `end`, negative indexes count from the end, and strings are immutable: methods return new strings.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
