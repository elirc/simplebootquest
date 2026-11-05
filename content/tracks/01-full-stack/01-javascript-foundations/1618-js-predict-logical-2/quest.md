---
slug: "js-predict-logical-2"
title: "Predict the Output: ||, && and ?? #2"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(undefined || 0, undefined ?? 0, undefined && 0);\n```","options":["`TypeError`","`0 0 undefined`","`undefined 0 0`","`false false false`"],"answer":1,"explanation":"It logs `0 0 undefined`."},{"prompt":"What does this log?\n\n```js\nconsole.log(null || 0, null ?? 0, null && 0);\n```","options":["`0 0 null`","`null 0 0`","`false false false`","`TypeError`"],"answer":0,"explanation":"It logs `0 0 null`."},{"prompt":"What does this log?\n\n```js\nconsole.log(undefined || false, undefined ?? false, undefined && false);\n```","options":["`false false false`","`undefined false false`","`false false undefined`","`TypeError`"],"answer":2,"explanation":"It logs `false false undefined`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"\" || \"hi\", \"\" ?? \"hi\", \"\" && \"hi\");\n```","options":["`true false false`","`hi hi `","`hi  `","` hi `"],"answer":2,"explanation":"It logs `hi  `."},{"prompt":"What does this log?\n\n```js\nconsole.log(0 || \"\", 0 ?? \"\", 0 && \"\");\n```","options":["` 0 0`","`false false false`","`0  `","`0  0`"],"answer":0,"explanation":"It logs ` 0 0`."}]
---
# Predict the Output: ||, && and ?? #2

`a || b` returns the first truthy value, `a && b` the first falsy one, and `a ?? b` only falls back when `a` is `null` or `undefined`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
