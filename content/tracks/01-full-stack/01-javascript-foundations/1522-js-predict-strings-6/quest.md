---
slug: "js-predict-strings-6"
title: "Predict the Output: String methods #6"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(\"express\".slice(2, 5));\n```","options":["`re`","`pre`","`pres`","`press`"],"answer":1,"explanation":"It logs `pre`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"closure\".slice(3, 4));\n```","options":["`sure`","`su`","``","`s`"],"answer":3,"explanation":"It logs `s`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"banana\".slice(0, 3));\n```","options":["`an`","`ban`","`TypeError`","`bana`"],"answer":1,"explanation":"It logs `ban`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"postgres\".slice(1, 6));\n```","options":["`ostgre`","`stgr`","`ostgr`","`TypeError`"],"answer":2,"explanation":"It logs `ostgr`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"promise\".slice(1, 2));\n```","options":["``","`TypeError`","`r`","`ro`"],"answer":2,"explanation":"It logs `r`."}]
---
# Predict the Output: String methods #6

`slice(start, end)` excludes `end`, negative indexes count from the end, and strings are immutable: methods return new strings.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
