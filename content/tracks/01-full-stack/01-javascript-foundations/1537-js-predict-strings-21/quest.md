---
slug: "js-predict-strings-21"
title: "Predict the Output: String methods #21"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(\"network\".substring(4, 1));\n```","options":["`tw`","`TypeError`","`etw`","`etwo`"],"answer":2,"explanation":"It logs `etw`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"frontend\".substring(5, 3));\n```","options":["`nt`","`TypeError`","`nte`","`t`"],"answer":0,"explanation":"It logs `nt`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"promise\".substring(6, 0));\n```","options":["`promis`","`promise`","`romis`","`TypeError`"],"answer":0,"explanation":"It logs `promis`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"variable\".substring(2, 1));\n```","options":["`TypeError`","``","`a`","`ar`"],"answer":2,"explanation":"It logs `a`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"database\".substring(6, 1));\n```","options":["`taba`","`atabas`","`TypeError`","`ataba`"],"answer":3,"explanation":"It logs `ataba`."}]
---
# Predict the Output: String methods #21

`slice(start, end)` excludes `end`, negative indexes count from the end, and strings are immutable: methods return new strings.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
