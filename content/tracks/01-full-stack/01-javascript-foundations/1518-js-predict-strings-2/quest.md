---
slug: "js-predict-strings-2"
title: "Predict the Output: String methods #2"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(\"keyboard\".slice(0, 4));\n```","options":["`TypeError`","`keybo`","`keyb`","`eyb`"],"answer":2,"explanation":"It logs `keyb`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"network\".substring(4, 0));\n```","options":["`etw`","`netwo`","`netw`","`TypeError`"],"answer":2,"explanation":"It logs `netw`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"frontend\".substring(5, 1));\n```","options":["`ront`","`ronte`","`TypeError`","`ont`"],"answer":0,"explanation":"It logs `ront`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"banana\".slice(2, 3));\n```","options":["`nan`","``","`n`","`na`"],"answer":2,"explanation":"It logs `n`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"javascript\".slice(1, 7));\n```","options":["`TypeError`","`avascr`","`vascr`","`avascri`"],"answer":1,"explanation":"It logs `avascr`."}]
---
# Predict the Output: String methods #2

`slice(start, end)` excludes `end`, negative indexes count from the end, and strings are immutable: methods return new strings.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
