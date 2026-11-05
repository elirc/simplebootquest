---
slug: "js-predict-logical-1"
title: "Predict the Output: ||, && and ?? #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(undefined || \"\", undefined ?? \"\", undefined && \"\");\n```","options":["`false false false`","`undefined  `","`  undefined`","`TypeError`"],"answer":2,"explanation":"It logs `  undefined`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"hi\" || 5, \"hi\" ?? 5, \"hi\" && 5);\n```","options":["`5 5 hi`","`hi hi 5`","`TypeError`","`true true true`"],"answer":1,"explanation":"It logs `hi hi 5`."},{"prompt":"What does this log?\n\n```js\nconsole.log(0 || \"hi\", 0 ?? \"hi\", 0 && \"hi\");\n```","options":["`hi hi 0`","`hi 0 0`","`0 hi 0`","`true false false`"],"answer":1,"explanation":"It logs `hi 0 0`."},{"prompt":"What does this log?\n\n```js\nconsole.log(5 || false, 5 ?? false, 5 && false);\n```","options":["`TypeError`","`true true false`","`5 5 false`","`5 false false`"],"answer":2,"explanation":"It logs `5 5 false`."},{"prompt":"What does this log?\n\n```js\nconsole.log(0 || null, 0 ?? null, 0 && null);\n```","options":["`0 0 null`","`null 0 0`","`false false false`","`0 null 0`"],"answer":1,"explanation":"It logs `null 0 0`."}]
---
# Predict the Output: ||, && and ?? #1

`a || b` returns the first truthy value, `a && b` the first falsy one, and `a ?? b` only falls back when `a` is `null` or `undefined`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
