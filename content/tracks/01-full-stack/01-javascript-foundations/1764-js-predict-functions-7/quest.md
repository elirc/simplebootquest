---
slug: "js-predict-functions-7"
title: "Predict the Output: Functions and return values #7"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nfunction f(x, y = 6) {\n  return x + y;\n}\nconsole.log(f(6), f(6, undefined), f(6, null));\n```","options":["`undefined`","`12 12 6`","`12 12 12`","`NaN`"],"answer":1,"explanation":"It logs `12 12 6`."},{"prompt":"What does this log?\n\n```js\nfunction f(x, y = 5) {\n  return x + y;\n}\nconsole.log(f(6), f(6, undefined), f(6, null));\n```","options":["`11 11 11`","`undefined`","`NaN`","`11 11 6`"],"answer":3,"explanation":"It logs `11 11 6`."},{"prompt":"What does this log?\n\n```js\nfunction f(x) {\n  if (x > 5) return \"big\";\n}\nconsole.log(f(6), f(5));\n```","options":["`big undefined`","`undefined`","`NaN`","`big big`"],"answer":0,"explanation":"It logs `big undefined`."},{"prompt":"What does this log?\n\n```js\nconst f = (x) => ({ value: x * 2 });\nconsole.log(f(4).value);\n```","options":["`undefined`","`TypeError`","`8`","`NaN`"],"answer":2,"explanation":"It logs `8`."},{"prompt":"What does this log?\n\n```js\nconst f = (x) => { x * 5; };\nconsole.log(f(9));\n```","options":["`TypeError`","`45`","`NaN`","`undefined`"],"answer":3,"explanation":"It logs `undefined`."}]
---
# Predict the Output: Functions and return values #7

A function without a `return` returns `undefined`. Arrow functions with braces need an explicit `return`; without braces they return the expression.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
