---
slug: "js-predict-logical-3"
title: "Predict the Output: ||, && and ?? #3"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(\"hi\" || 0, \"hi\" ?? 0, \"hi\" && 0);\n```","options":["`TypeError`","`hi hi 0`","`hi 0 0`","`true true false`"],"answer":1,"explanation":"It logs `hi hi 0`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"\" || undefined, \"\" ?? undefined, \"\" && undefined);\n```","options":["`  undefined`","` undefined `","`undefined  `","`false false false`"],"answer":2,"explanation":"It logs `undefined  `."},{"prompt":"What does this log?\n\n```js\nconsole.log(0 || undefined, 0 ?? undefined, 0 && undefined);\n```","options":["`0 undefined 0`","`false false false`","`undefined 0 0`","`0 0 undefined`"],"answer":2,"explanation":"It logs `undefined 0 0`."},{"prompt":"What does this log?\n\n```js\nconsole.log(NaN || \"\", NaN ?? \"\", NaN && \"\");\n```","options":["`NaN  `","`false false false`","`NaN  NaN`","` NaN NaN`"],"answer":3,"explanation":"It logs ` NaN NaN`."},{"prompt":"What does this log?\n\n```js\nconsole.log(NaN || false, NaN ?? false, NaN && false);\n```","options":["`false NaN NaN`","`false false false`","`NaN false false`","`NaN false NaN`"],"answer":0,"explanation":"It logs `false NaN NaN`."}]
---
# Predict the Output: ||, && and ?? #3

`a || b` returns the first truthy value, `a && b` the first falsy one, and `a ?? b` only falls back when `a` is `null` or `undefined`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
