---
slug: "js-predict-strings-1"
title: "Predict the Output: String methods #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(\"react\".substring(3, 1));\n```","options":["`TypeError`","`a`","`eac`","`ea`"],"answer":3,"explanation":"It logs `ea`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"postgres\".substring(5, 3));\n```","options":["`TypeError`","`g`","`tgr`","`tg`"],"answer":3,"explanation":"It logs `tg`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"postgres\".slice(1, 5));\n```","options":["`ostgr`","`ostg`","`stg`","`TypeError`"],"answer":1,"explanation":"It logs `ostg`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"keyboard\".slice(0, 5));\n```","options":["`keybo`","`TypeError`","`eybo`","`keyboa`"],"answer":0,"explanation":"It logs `keybo`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"banana\".slice(3, 5));\n```","options":["`n`","`ana`","`TypeError`","`an`"],"answer":3,"explanation":"It logs `an`."}]
---
# Predict the Output: String methods #1

`slice(start, end)` excludes `end`, negative indexes count from the end, and strings are immutable: methods return new strings.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
