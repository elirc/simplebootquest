---
slug: "js-predict-strings-10"
title: "Predict the Output: String methods #10"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(\"keyboard\".substring(6, 1));\n```","options":["`eyboar`","`eyboa`","`yboa`","`TypeError`"],"answer":1,"explanation":"It logs `eyboa`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"variable\".slice(2, 6));\n```","options":["`riabl`","`riable`","`riab`","`iab`"],"answer":2,"explanation":"It logs `riab`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"keyboard\".substring(3, 1));\n```","options":["`y`","`ey`","`eyb`","`TypeError`"],"answer":1,"explanation":"It logs `ey`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"closure\".substring(1, 0));\n```","options":["`TypeError`","`cl`","`c`","``"],"answer":2,"explanation":"It logs `c`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"javascript\".substring(4, 1));\n```","options":["`TypeError`","`avas`","`ava`","`va`"],"answer":2,"explanation":"It logs `ava`."}]
---
# Predict the Output: String methods #10

`slice(start, end)` excludes `end`, negative indexes count from the end, and strings are immutable: methods return new strings.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
