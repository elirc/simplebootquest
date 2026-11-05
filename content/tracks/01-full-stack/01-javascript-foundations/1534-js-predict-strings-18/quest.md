---
slug: "js-predict-strings-18"
title: "Predict the Output: String methods #18"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(\"promise\".slice(0, 4));\n```","options":["`prom`","`rom`","`TypeError`","`promi`"],"answer":0,"explanation":"It logs `prom`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"react\".substring(4, 1));\n```","options":["`eact`","`TypeError`","`ac`","`eac`"],"answer":3,"explanation":"It logs `eac`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"javascript\".slice(1, 5));\n```","options":["`vas`","`TypeError`","`avas`","`avasc`"],"answer":2,"explanation":"It logs `avas`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"variable\".slice(2, 3));\n```","options":["`r`","`ri`","`ria`","``"],"answer":0,"explanation":"It logs `r`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"javascript\".substring(3, 1));\n```","options":["`ava`","`TypeError`","`av`","`v`"],"answer":2,"explanation":"It logs `av`."}]
---
# Predict the Output: String methods #18

`slice(start, end)` excludes `end`, negative indexes count from the end, and strings are immutable: methods return new strings.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
