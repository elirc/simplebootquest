---
slug: "js-predict-strings-20"
title: "Predict the Output: String methods #20"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(\"keyboard\".substring(5, 3));\n```","options":["`bo`","`boa`","`o`","`TypeError`"],"answer":0,"explanation":"It logs `bo`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"postgres\".slice(0, 2));\n```","options":["`po`","`o`","`TypeError`","`pos`"],"answer":0,"explanation":"It logs `po`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"banana\".slice(1, 5));\n```","options":["`nan`","`TypeError`","`anan`","`anana`"],"answer":2,"explanation":"It logs `anan`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"variable\".substring(7, 3));\n```","options":["`iabl`","`TypeError`","`abl`","`iable`"],"answer":0,"explanation":"It logs `iabl`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"frontend\".slice(2, 4));\n```","options":["`n`","`ont`","`onte`","`on`"],"answer":3,"explanation":"It logs `on`."}]
---
# Predict the Output: String methods #20

`slice(start, end)` excludes `end`, negative indexes count from the end, and strings are immutable: methods return new strings.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
