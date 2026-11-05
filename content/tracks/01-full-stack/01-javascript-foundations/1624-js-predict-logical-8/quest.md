---
slug: "js-predict-logical-8"
title: "Predict the Output: ||, && and ?? #8"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(null || undefined, null ?? undefined, null && undefined);\n```","options":["`null null undefined`","`TypeError`","`false false false`","`undefined undefined null`"],"answer":3,"explanation":"It logs `undefined undefined null`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"\" || null, \"\" ?? null, \"\" && null);\n```","options":["`null  `","`  null`","`false false false`","` null `"],"answer":0,"explanation":"It logs `null  `."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"\" || 0, \"\" ?? 0, \"\" && 0);\n```","options":["` 0 `","`false false false`","`0  `","` 0 0`"],"answer":2,"explanation":"It logs `0  `."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"\" || false, \"\" ?? false, \"\" && false);\n```","options":["` false `","`false  `","` false false`","`false false false`"],"answer":1,"explanation":"It logs `false  `."},{"prompt":"What does this log?\n\n```js\nconsole.log(NaN || undefined, NaN ?? undefined, NaN && undefined);\n```","options":["`undefined NaN NaN`","`false false false`","`NaN NaN undefined`","`NaN undefined NaN`"],"answer":0,"explanation":"It logs `undefined NaN NaN`."}]
---
# Predict the Output: ||, && and ?? #8

`a || b` returns the first truthy value, `a && b` the first falsy one, and `a ?? b` only falls back when `a` is `null` or `undefined`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
