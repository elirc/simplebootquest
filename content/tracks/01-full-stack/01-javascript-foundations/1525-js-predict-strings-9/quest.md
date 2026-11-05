---
slug: "js-predict-strings-9"
title: "Predict the Output: String methods #9"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(\"keyboard\".slice(2, 5));\n```","options":["`yboar`","`ybo`","`bo`","`yboa`"],"answer":1,"explanation":"It logs `ybo`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"frontend\".substring(6, 2));\n```","options":["`nte`","`onten`","`TypeError`","`onte`"],"answer":3,"explanation":"It logs `onte`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"frontend\".slice(0, 2));\n```","options":["`fro`","`r`","`fr`","`TypeError`"],"answer":2,"explanation":"It logs `fr`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"react\".substring(4, 3));\n```","options":["`ct`","``","`c`","`TypeError`"],"answer":2,"explanation":"It logs `c`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"promise\".slice(3, 5));\n```","options":["`i`","`mis`","`mi`","`mise`"],"answer":2,"explanation":"It logs `mi`."}]
---
# Predict the Output: String methods #9

`slice(start, end)` excludes `end`, negative indexes count from the end, and strings are immutable: methods return new strings.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
