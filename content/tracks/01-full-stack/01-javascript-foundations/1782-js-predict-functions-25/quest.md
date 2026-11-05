---
slug: "js-predict-functions-25"
title: "Predict the Output: Functions and return values #25"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nfunction f(x, y = 3) {\n  return x + y;\n}\nconsole.log(f(3), f(3, undefined), f(3, null));\n```","options":["`6 6 6`","`NaN`","`6 6 3`","`undefined`"],"answer":2,"explanation":"It logs `6 6 3`."},{"prompt":"What does this log?\n\n```js\nfunction f(x, y = 8) {\n  return x + y;\n}\nconsole.log(f(6), f(6, undefined), f(6, null));\n```","options":["`14 14 6`","`NaN`","`undefined`","`14 14 14`"],"answer":0,"explanation":"It logs `14 14 6`."},{"prompt":"What does this log?\n\n```js\nconst f = (x) => ({ value: x * 5 });\nconsole.log(f(9).value);\n```","options":["`45`","`TypeError`","`NaN`","`undefined`"],"answer":0,"explanation":"It logs `45`."},{"prompt":"What does this log?\n\n```js\nconst f = (x) => ({ value: x * 8 });\nconsole.log(f(7).value);\n```","options":["`56`","`TypeError`","`undefined`","`NaN`"],"answer":0,"explanation":"It logs `56`."},{"prompt":"What does this log?\n\n```js\nconst f = (x) => { x * 4; };\nconsole.log(f(8));\n```","options":["`32`","`TypeError`","`undefined`","`NaN`"],"answer":2,"explanation":"It logs `undefined`."}]
---
# Predict the Output: Functions and return values #25

A function without a `return` returns `undefined`. Arrow functions with braces need an explicit `return`; without braces they return the expression.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
