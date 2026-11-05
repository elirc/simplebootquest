---
slug: "js-predict-functions-1"
title: "Predict the Output: Functions and return values #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nfunction f(x) {\n  if (x > 8) return \"big\";\n}\nconsole.log(f(9), f(8));\n```","options":["`undefined`","`big undefined`","`NaN`","`big big`"],"answer":1,"explanation":"It logs `big undefined`."},{"prompt":"What does this log?\n\n```js\nconst f = (x) => { x * 5; };\nconsole.log(f(7));\n```","options":["`35`","`undefined`","`NaN`","`TypeError`"],"answer":1,"explanation":"It logs `undefined`."},{"prompt":"What does this log?\n\n```js\nfunction f(x) {\n  if (x > 3) return \"big\";\n}\nconsole.log(f(4), f(3));\n```","options":["`big big`","`big undefined`","`NaN`","`undefined`"],"answer":1,"explanation":"It logs `big undefined`."},{"prompt":"What does this log?\n\n```js\nconst f = (x) => ({ value: x * 8 });\nconsole.log(f(4).value);\n```","options":["`undefined`","`32`","`NaN`","`TypeError`"],"answer":1,"explanation":"It logs `32`."},{"prompt":"What does this log?\n\n```js\nconst f = (x) => ({ value: x * 8 });\nconsole.log(f(2).value);\n```","options":["`TypeError`","`16`","`NaN`","`undefined`"],"answer":1,"explanation":"It logs `16`."}]
---
# Predict the Output: Functions and return values #1

A function without a `return` returns `undefined`. Arrow functions with braces need an explicit `return`; without braces they return the expression.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
