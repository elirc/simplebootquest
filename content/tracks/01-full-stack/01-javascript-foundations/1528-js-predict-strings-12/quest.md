---
slug: "js-predict-strings-12"
title: "Predict the Output: String methods #12"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(\"keyboard\".slice(0, 3));\n```","options":["`TypeError`","`ey`","`key`","`keyb`"],"answer":2,"explanation":"It logs `key`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"network\".slice(1, 6));\n```","options":["`etwor`","`etwork`","`TypeError`","`twor`"],"answer":0,"explanation":"It logs `etwor`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"frontend\".slice(1, 6));\n```","options":["`TypeError`","`onte`","`ronten`","`ronte`"],"answer":3,"explanation":"It logs `ronte`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"express\".slice(1, 4));\n```","options":["`TypeError`","`xpre`","`pr`","`xpr`"],"answer":3,"explanation":"It logs `xpr`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"javascript\".substring(4, 3));\n```","options":["`a`","`as`","``","`TypeError`"],"answer":0,"explanation":"It logs `a`."}]
---
# Predict the Output: String methods #12

`slice(start, end)` excludes `end`, negative indexes count from the end, and strings are immutable: methods return new strings.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
