---
slug: "js-predict-logical-7"
title: "Predict the Output: ||, && and ?? #7"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(false || 5, false ?? 5, false && 5);\n```","options":["`5 5 false`","`5 false false`","`false 5 false`","`true false false`"],"answer":1,"explanation":"It logs `5 false false`."},{"prompt":"What does this log?\n\n```js\nconsole.log(false || \"hi\", false ?? \"hi\", false && \"hi\");\n```","options":["`hi hi false`","`false hi false`","`true false false`","`hi false false`"],"answer":3,"explanation":"It logs `hi false false`."},{"prompt":"What does this log?\n\n```js\nconsole.log(NaN || 0, NaN ?? 0, NaN && 0);\n```","options":["`false false false`","`NaN 0 NaN`","`0 NaN NaN`","`NaN 0 0`"],"answer":2,"explanation":"It logs `0 NaN NaN`."},{"prompt":"What does this log?\n\n```js\nconsole.log(NaN || \"hi\", NaN ?? \"hi\", NaN && \"hi\");\n```","options":["`NaN hi NaN`","`hi NaN NaN`","`true false false`","`hi hi NaN`"],"answer":1,"explanation":"It logs `hi NaN NaN`."},{"prompt":"What does this log?\n\n```js\nconsole.log(null || false, null ?? false, null && false);\n```","options":["`false false null`","`null false false`","`TypeError`","`false false false`"],"answer":0,"explanation":"It logs `false false null`."}]
---
# Predict the Output: ||, && and ?? #7

`a || b` returns the first truthy value, `a && b` the first falsy one, and `a ?? b` only falls back when `a` is `null` or `undefined`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
