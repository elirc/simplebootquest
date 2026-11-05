---
slug: "js-predict-logical-9"
title: "Predict the Output: ||, && and ?? #9"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(\"hi\" || false, \"hi\" ?? false, \"hi\" && false);\n```","options":["`hi hi false`","`true true false`","`hi false false`","`TypeError`"],"answer":0,"explanation":"It logs `hi hi false`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"hi\" || NaN, \"hi\" ?? NaN, \"hi\" && NaN);\n```","options":["`hi hi NaN`","`true true false`","`TypeError`","`hi NaN NaN`"],"answer":0,"explanation":"It logs `hi hi NaN`."},{"prompt":"What does this log?\n\n```js\nconsole.log(5 || \"hi\", 5 ?? \"hi\", 5 && \"hi\");\n```","options":["`TypeError`","`true true true`","`hi hi 5`","`5 5 hi`"],"answer":3,"explanation":"It logs `5 5 hi`."},{"prompt":"What does this log?\n\n```js\nconsole.log(false || NaN, false ?? NaN, false && NaN);\n```","options":["`false NaN NaN`","`false false false`","`false NaN false`","`NaN false false`"],"answer":3,"explanation":"It logs `NaN false false`."},{"prompt":"What does this log?\n\n```js\nconsole.log(false || undefined, false ?? undefined, false && undefined);\n```","options":["`false false undefined`","`false undefined false`","`undefined false false`","`false false false`"],"answer":2,"explanation":"It logs `undefined false false`."}]
---
# Predict the Output: ||, && and ?? #9

`a || b` returns the first truthy value, `a && b` the first falsy one, and `a ?? b` only falls back when `a` is `null` or `undefined`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
