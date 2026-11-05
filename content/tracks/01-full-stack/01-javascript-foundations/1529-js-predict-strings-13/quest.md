---
slug: "js-predict-strings-13"
title: "Predict the Output: String methods #13"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(\"postgres\".slice(1, 3));\n```","options":["`ost`","`os`","`TypeError`","`s`"],"answer":1,"explanation":"It logs `os`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"variable\".slice(1, 7));\n```","options":["`ariabl`","`ariable`","`riabl`","`TypeError`"],"answer":0,"explanation":"It logs `ariabl`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"variable\".substring(4, 1));\n```","options":["`aria`","`TypeError`","`ari`","`ri`"],"answer":2,"explanation":"It logs `ari`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"promise\".substring(3, 1));\n```","options":["`TypeError`","`ro`","`o`","`rom`"],"answer":1,"explanation":"It logs `ro`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"keyboard\".slice(3, 5));\n```","options":["`boa`","`board`","`bo`","`o`"],"answer":2,"explanation":"It logs `bo`."}]
---
# Predict the Output: String methods #13

`slice(start, end)` excludes `end`, negative indexes count from the end, and strings are immutable: methods return new strings.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
