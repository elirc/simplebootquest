---
slug: "js-predict-functions-3"
title: "Predict the Output: Functions and return values #3"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nfunction f(x) {\n  if (x > 7) return \"big\";\n}\nconsole.log(f(8), f(7));\n```","options":["`big big`","`undefined`","`big undefined`","`NaN`"],"answer":2,"explanation":"It logs `big undefined`."},{"prompt":"What does this log?\n\n```js\nfunction f(x) {\n  if (x > 6) return \"big\";\n}\nconsole.log(f(7), f(6));\n```","options":["`undefined`","`big big`","`NaN`","`big undefined`"],"answer":3,"explanation":"It logs `big undefined`."},{"prompt":"What does this log?\n\n```js\nfunction f(x, y = 4) {\n  return x + y;\n}\nconsole.log(f(2), f(2, undefined), f(2, null));\n```","options":["`6 6 2`","`NaN`","`6 6 6`","`undefined`"],"answer":0,"explanation":"It logs `6 6 2`."},{"prompt":"What does this log?\n\n```js\nfunction f(x) {\n  if (x > 4) return \"big\";\n}\nconsole.log(f(5), f(4));\n```","options":["`big big`","`undefined`","`NaN`","`big undefined`"],"answer":3,"explanation":"It logs `big undefined`."},{"prompt":"What does this log?\n\n```js\nfunction f(x, y = 6) {\n  return x + y;\n}\nconsole.log(f(9), f(9, undefined), f(9, null));\n```","options":["`15 15 9`","`undefined`","`15 15 15`","`NaN`"],"answer":0,"explanation":"It logs `15 15 9`."}]
---
# Predict the Output: Functions and return values #3

A function without a `return` returns `undefined`. Arrow functions with braces need an explicit `return`; without braces they return the expression.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
