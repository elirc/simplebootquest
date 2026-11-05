---
slug: "js-predict-logical-4"
title: "Predict the Output: ||, && and ?? #4"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(0 || NaN, 0 ?? NaN, 0 && NaN);\n```","options":["`0 NaN NaN`","`false false false`","`0 NaN 0`","`NaN 0 0`"],"answer":3,"explanation":"It logs `NaN 0 0`."},{"prompt":"What does this log?\n\n```js\nconsole.log(5 || 0, 5 ?? 0, 5 && 0);\n```","options":["`5 0 0`","`TypeError`","`true true false`","`5 5 0`"],"answer":3,"explanation":"It logs `5 5 0`."},{"prompt":"What does this log?\n\n```js\nconsole.log(NaN || null, NaN ?? null, NaN && null);\n```","options":["`false false false`","`null NaN NaN`","`NaN NaN null`","`NaN null NaN`"],"answer":1,"explanation":"It logs `null NaN NaN`."},{"prompt":"What does this log?\n\n```js\nconsole.log(NaN || 5, NaN ?? 5, NaN && 5);\n```","options":["`true false false`","`5 NaN NaN`","`5 5 NaN`","`NaN 5 NaN`"],"answer":1,"explanation":"It logs `5 NaN NaN`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"\" || 5, \"\" ?? 5, \"\" && 5);\n```","options":["`5 5 `","` 5 `","`true false false`","`5  `"],"answer":3,"explanation":"It logs `5  `."}]
---
# Predict the Output: ||, && and ?? #4

`a || b` returns the first truthy value, `a && b` the first falsy one, and `a ?? b` only falls back when `a` is `null` or `undefined`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
