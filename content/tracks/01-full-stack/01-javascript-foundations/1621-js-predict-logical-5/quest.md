---
slug: "js-predict-logical-5"
title: "Predict the Output: ||, && and ?? #5"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(null || \"\", null ?? \"\", null && \"\");\n```","options":["`  null`","`false false false`","`null  `","`TypeError`"],"answer":0,"explanation":"It logs `  null`."},{"prompt":"What does this log?\n\n```js\nconsole.log(undefined || NaN, undefined ?? NaN, undefined && NaN);\n```","options":["`undefined NaN NaN`","`false false false`","`NaN NaN undefined`","`TypeError`"],"answer":2,"explanation":"It logs `NaN NaN undefined`."},{"prompt":"What does this log?\n\n```js\nconsole.log(undefined || null, undefined ?? null, undefined && null);\n```","options":["`false false false`","`TypeError`","`null null undefined`","`undefined undefined null`"],"answer":2,"explanation":"It logs `null null undefined`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"\" || NaN, \"\" ?? NaN, \"\" && NaN);\n```","options":["` NaN `","`false false false`","`NaN  `","` NaN NaN`"],"answer":2,"explanation":"It logs `NaN  `."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"hi\" || \"\", \"hi\" ?? \"\", \"hi\" && \"\");\n```","options":["`true true false`","`hi hi `","`TypeError`","`hi  `"],"answer":1,"explanation":"It logs `hi hi `."}]
---
# Predict the Output: ||, && and ?? #5

`a || b` returns the first truthy value, `a && b` the first falsy one, and `a ?? b` only falls back when `a` is `null` or `undefined`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
