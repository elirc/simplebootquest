---
slug: "js-predict-functions-15"
title: "Predict the Output: Functions and return values #15"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nfunction f(x, y = 2) {\n  return x + y;\n}\nconsole.log(f(5), f(5, undefined), f(5, null));\n```","options":["`NaN`","`7 7 7`","`undefined`","`7 7 5`"],"answer":3,"explanation":"It logs `7 7 5`."},{"prompt":"What does this log?\n\n```js\nfunction f(x) {\n  if (x > 2) return \"big\";\n}\nconsole.log(f(3), f(2));\n```","options":["`big big`","`NaN`","`big undefined`","`undefined`"],"answer":2,"explanation":"It logs `big undefined`."},{"prompt":"What does this log?\n\n```js\nconst f = (x) => { x * 2; };\nconsole.log(f(2));\n```","options":["`TypeError`","`undefined`","`4`","`NaN`"],"answer":1,"explanation":"It logs `undefined`."},{"prompt":"What does this log?\n\n```js\nfunction f(x, y = 4) {\n  return x + y;\n}\nconsole.log(f(6), f(6, undefined), f(6, null));\n```","options":["`10 10 10`","`NaN`","`undefined`","`10 10 6`"],"answer":3,"explanation":"It logs `10 10 6`."},{"prompt":"What does this log?\n\n```js\nfunction f(x, y = 9) {\n  return x + y;\n}\nconsole.log(f(4), f(4, undefined), f(4, null));\n```","options":["`13 13 4`","`13 13 13`","`NaN`","`undefined`"],"answer":0,"explanation":"It logs `13 13 4`."}]
---
# Predict the Output: Functions and return values #15

A function without a `return` returns `undefined`. Arrow functions with braces need an explicit `return`; without braces they return the expression.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
