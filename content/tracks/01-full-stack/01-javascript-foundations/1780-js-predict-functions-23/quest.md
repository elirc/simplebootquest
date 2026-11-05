---
slug: "js-predict-functions-23"
title: "Predict the Output: Functions and return values #23"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst f = (x) => { x * 2; };\nconsole.log(f(9));\n```","options":["`undefined`","`TypeError`","`NaN`","`18`"],"answer":0,"explanation":"It logs `undefined`."},{"prompt":"What does this log?\n\n```js\nfunction f(x, y = 6) {\n  return x + y;\n}\nconsole.log(f(8), f(8, undefined), f(8, null));\n```","options":["`undefined`","`14 14 14`","`14 14 8`","`NaN`"],"answer":2,"explanation":"It logs `14 14 8`."},{"prompt":"What does this log?\n\n```js\nfunction f(x, y = 7) {\n  return x + y;\n}\nconsole.log(f(8), f(8, undefined), f(8, null));\n```","options":["`undefined`","`15 15 8`","`NaN`","`15 15 15`"],"answer":1,"explanation":"It logs `15 15 8`."},{"prompt":"What does this log?\n\n```js\nconst f = (x) => { x * 5; };\nconsole.log(f(5));\n```","options":["`25`","`NaN`","`TypeError`","`undefined`"],"answer":3,"explanation":"It logs `undefined`."},{"prompt":"What does this log?\n\n```js\nconst f = (x) => ({ value: x * 7 });\nconsole.log(f(8).value);\n```","options":["`NaN`","`TypeError`","`undefined`","`56`"],"answer":3,"explanation":"It logs `56`."}]
---
# Predict the Output: Functions and return values #23

A function without a `return` returns `undefined`. Arrow functions with braces need an explicit `return`; without braces they return the expression.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
