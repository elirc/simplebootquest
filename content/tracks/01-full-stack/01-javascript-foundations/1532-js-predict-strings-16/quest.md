---
slug: "js-predict-strings-16"
title: "Predict the Output: String methods #16"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(\"closure\".slice(2, 4));\n```","options":["`osu`","`os`","`osur`","`s`"],"answer":1,"explanation":"It logs `os`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"keyboard\".substring(2, 0));\n```","options":["`ke`","`e`","`TypeError`","`key`"],"answer":0,"explanation":"It logs `ke`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"keyboard\".substring(3, 2));\n```","options":["`yb`","`TypeError`","`y`","``"],"answer":2,"explanation":"It logs `y`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"database\".slice(3, 6));\n```","options":["`abas`","`aba`","`abase`","`ba`"],"answer":1,"explanation":"It logs `aba`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"variable\".slice(2, 5));\n```","options":["`riab`","`ia`","`ria`","`riabl`"],"answer":2,"explanation":"It logs `ria`."}]
---
# Predict the Output: String methods #16

`slice(start, end)` excludes `end`, negative indexes count from the end, and strings are immutable: methods return new strings.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
