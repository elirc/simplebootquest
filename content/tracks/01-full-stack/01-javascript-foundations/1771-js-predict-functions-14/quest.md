---
slug: "js-predict-functions-14"
title: "Predict the Output: Functions and return values #14"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nfunction f(x, y = 2) {\n  return x + y;\n}\nconsole.log(f(9), f(9, undefined), f(9, null));\n```","options":["`NaN`","`11 11 11`","`11 11 9`","`undefined`"],"answer":2,"explanation":"It logs `11 11 9`."},{"prompt":"What does this log?\n\n```js\nfunction f(x, y = 9) {\n  return x + y;\n}\nconsole.log(f(8), f(8, undefined), f(8, null));\n```","options":["`NaN`","`undefined`","`17 17 8`","`17 17 17`"],"answer":2,"explanation":"It logs `17 17 8`."},{"prompt":"What does this log?\n\n```js\nconst f = (x) => { x * 6; };\nconsole.log(f(5));\n```","options":["`TypeError`","`30`","`undefined`","`NaN`"],"answer":2,"explanation":"It logs `undefined`."},{"prompt":"What does this log?\n\n```js\nconst f = (x) => { x * 9; };\nconsole.log(f(5));\n```","options":["`TypeError`","`undefined`","`NaN`","`45`"],"answer":1,"explanation":"It logs `undefined`."},{"prompt":"What does this log?\n\n```js\nconst f = (x) => ({ value: x * 7 });\nconsole.log(f(5).value);\n```","options":["`35`","`NaN`","`TypeError`","`undefined`"],"answer":0,"explanation":"It logs `35`."}]
---
# Predict the Output: Functions and return values #14

A function without a `return` returns `undefined`. Arrow functions with braces need an explicit `return`; without braces they return the expression.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
