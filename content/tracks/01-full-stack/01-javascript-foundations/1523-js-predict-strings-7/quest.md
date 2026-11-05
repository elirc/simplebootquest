---
slug: "js-predict-strings-7"
title: "Predict the Output: String methods #7"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(\"keyboard\".slice(2, 3));\n```","options":["`y`","`yb`","``","`ybo`"],"answer":0,"explanation":"It logs `y`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"react\".substring(4, 2));\n```","options":["`TypeError`","`ac`","`c`","`act`"],"answer":1,"explanation":"It logs `ac`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"banana\".slice(2, 5));\n```","options":["`nana`","`nan`","`an`","`TypeError`"],"answer":1,"explanation":"It logs `nan`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"network\".slice(0, 6));\n```","options":["`networ`","`TypeError`","`network`","`etwor`"],"answer":0,"explanation":"It logs `networ`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"promise\".substring(2, 0));\n```","options":["`TypeError`","`pr`","`r`","`pro`"],"answer":1,"explanation":"It logs `pr`."}]
---
# Predict the Output: String methods #7

`slice(start, end)` excludes `end`, negative indexes count from the end, and strings are immutable: methods return new strings.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
