---
slug: "js-predict-strings-14"
title: "Predict the Output: String methods #14"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(\"react\".substring(3, 2));\n```","options":["`ac`","``","`a`","`TypeError`"],"answer":2,"explanation":"It logs `a`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"database\".substring(3, 2));\n```","options":["`t`","`ta`","``","`TypeError`"],"answer":0,"explanation":"It logs `t`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"database\".slice(2, 4));\n```","options":["`ta`","`a`","`taba`","`tab`"],"answer":0,"explanation":"It logs `ta`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"closure\".slice(1, 6));\n```","options":["`osur`","`TypeError`","`losur`","`losure`"],"answer":2,"explanation":"It logs `losur`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"promise\".substring(4, 2));\n```","options":["`TypeError`","`omi`","`m`","`om`"],"answer":3,"explanation":"It logs `om`."}]
---
# Predict the Output: String methods #14

`slice(start, end)` excludes `end`, negative indexes count from the end, and strings are immutable: methods return new strings.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
