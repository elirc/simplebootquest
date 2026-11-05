---
slug: "js-predict-strings-8"
title: "Predict the Output: String methods #8"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(\"javascript\".substring(5, 3));\n```","options":["`s`","`TypeError`","`asc`","`as`"],"answer":3,"explanation":"It logs `as`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"database\".slice(3, 5));\n```","options":["`abase`","`aba`","`ab`","`b`"],"answer":2,"explanation":"It logs `ab`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"banana\".substring(5, 1));\n```","options":["`TypeError`","`anan`","`nan`","`anana`"],"answer":1,"explanation":"It logs `anan`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"database\".slice(2, 3));\n```","options":["`tab`","`ta`","`t`","``"],"answer":2,"explanation":"It logs `t`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"react\".slice(0, 2));\n```","options":["`rea`","`e`","`re`","`TypeError`"],"answer":2,"explanation":"It logs `re`."}]
---
# Predict the Output: String methods #8

`slice(start, end)` excludes `end`, negative indexes count from the end, and strings are immutable: methods return new strings.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
