---
slug: "js-predict-functions-5"
title: "Predict the Output: Functions and return values #5"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nfunction f(x) {\n  if (x > 9) return \"big\";\n}\nconsole.log(f(10), f(9));\n```","options":["`big undefined`","`big big`","`NaN`","`undefined`"],"answer":0,"explanation":"It logs `big undefined`."},{"prompt":"What does this log?\n\n```js\nconst f = (x) => { x * 2; };\nconsole.log(f(8));\n```","options":["`16`","`undefined`","`TypeError`","`NaN`"],"answer":1,"explanation":"It logs `undefined`."},{"prompt":"What does this log?\n\n```js\nconst f = (x) => { x * 7; };\nconsole.log(f(6));\n```","options":["`42`","`undefined`","`TypeError`","`NaN`"],"answer":1,"explanation":"It logs `undefined`."},{"prompt":"What does this log?\n\n```js\nconst f = (x) => { x * 8; };\nconsole.log(f(7));\n```","options":["`undefined`","`TypeError`","`56`","`NaN`"],"answer":0,"explanation":"It logs `undefined`."},{"prompt":"What does this log?\n\n```js\nconst f = (x) => ({ value: x * 5 });\nconsole.log(f(3).value);\n```","options":["`NaN`","`undefined`","`TypeError`","`15`"],"answer":3,"explanation":"It logs `15`."}]
---
# Predict the Output: Functions and return values #5

A function without a `return` returns `undefined`. Arrow functions with braces need an explicit `return`; without braces they return the expression.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
