---
slug: "js-predict-strings-15"
title: "Predict the Output: String methods #15"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(\"react\".slice(0, 3));\n```","options":["`reac`","`rea`","`TypeError`","`ea`"],"answer":1,"explanation":"It logs `rea`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"javascript\".substring(7, 3));\n```","options":["`ascri`","`ascr`","`TypeError`","`scr`"],"answer":1,"explanation":"It logs `ascr`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"promise\".substring(5, 1));\n```","options":["`romis`","`omi`","`TypeError`","`romi`"],"answer":3,"explanation":"It logs `romi`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"keyboard\".substring(7, 0));\n```","options":["`keyboard`","`TypeError`","`keyboar`","`eyboar`"],"answer":2,"explanation":"It logs `keyboar`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"frontend\".slice(3, 5));\n```","options":["`t`","`nte`","`nt`","`ntend`"],"answer":2,"explanation":"It logs `nt`."}]
---
# Predict the Output: String methods #15

`slice(start, end)` excludes `end`, negative indexes count from the end, and strings are immutable: methods return new strings.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
