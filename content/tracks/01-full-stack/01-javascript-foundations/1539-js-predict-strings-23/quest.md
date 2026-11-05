---
slug: "js-predict-strings-23"
title: "Predict the Output: String methods #23"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(\"network\".slice(1, 3));\n```","options":["`TypeError`","`t`","`et`","`etw`"],"answer":2,"explanation":"It logs `et`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"variable\".slice(0, 7));\n```","options":["`variabl`","`TypeError`","`variable`","`ariabl`"],"answer":0,"explanation":"It logs `variabl`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"closure\".substring(2, 0));\n```","options":["`TypeError`","`cl`","`l`","`clo`"],"answer":1,"explanation":"It logs `cl`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"closure\".slice(0, 1));\n```","options":["`c`","``","`cl`","`TypeError`"],"answer":0,"explanation":"It logs `c`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"variable\".slice(3, 5));\n```","options":["`a`","`iab`","`iable`","`ia`"],"answer":3,"explanation":"It logs `ia`."}]
---
# Predict the Output: String methods #23

`slice(start, end)` excludes `end`, negative indexes count from the end, and strings are immutable: methods return new strings.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
