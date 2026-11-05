---
slug: "js-predict-strings-3"
title: "Predict the Output: String methods #3"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(\"database\".substring(4, 2));\n```","options":["`TypeError`","`tab`","`a`","`ta`"],"answer":3,"explanation":"It logs `ta`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"express\".substring(6, 0));\n```","options":["`express`","`TypeError`","`expres`","`xpres`"],"answer":2,"explanation":"It logs `expres`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"promise\".substring(6, 3));\n```","options":["`mis`","`TypeError`","`mise`","`is`"],"answer":0,"explanation":"It logs `mis`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"promise\".slice(2, 4));\n```","options":["`omis`","`omi`","`om`","`m`"],"answer":2,"explanation":"It logs `om`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"database\".substring(6, 0));\n```","options":["`TypeError`","`ataba`","`databas`","`databa`"],"answer":3,"explanation":"It logs `databa`."}]
---
# Predict the Output: String methods #3

`slice(start, end)` excludes `end`, negative indexes count from the end, and strings are immutable: methods return new strings.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
