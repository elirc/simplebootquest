---
slug: "js-predict-logical-6"
title: "Predict the Output: ||, && and ?? #6"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(0 || 5, 0 ?? 5, 0 && 5);\n```","options":["`5 5 0`","`5 0 0`","`true false false`","`0 5 0`"],"answer":1,"explanation":"It logs `5 0 0`."},{"prompt":"What does this log?\n\n```js\nconsole.log(5 || NaN, 5 ?? NaN, 5 && NaN);\n```","options":["`true true false`","`TypeError`","`5 5 NaN`","`5 NaN NaN`"],"answer":2,"explanation":"It logs `5 5 NaN`."},{"prompt":"What does this log?\n\n```js\nconsole.log(false || null, false ?? null, false && null);\n```","options":["`false false false`","`false false null`","`false null false`","`null false false`"],"answer":3,"explanation":"It logs `null false false`."},{"prompt":"What does this log?\n\n```js\nconsole.log(0 || false, 0 ?? false, 0 && false);\n```","options":["`0 false 0`","`false 0 0`","`false false false`","`0 false false`"],"answer":1,"explanation":"It logs `false 0 0`."},{"prompt":"What does this log?\n\n```js\nconsole.log(false || \"\", false ?? \"\", false && \"\");\n```","options":["`false  `","`false false false`","` false false`","`false  false`"],"answer":2,"explanation":"It logs ` false false`."}]
---
# Predict the Output: ||, && and ?? #6

`a || b` returns the first truthy value, `a && b` the first falsy one, and `a ?? b` only falls back when `a` is `null` or `undefined`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
