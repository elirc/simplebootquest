---
slug: "js-predict-functions-6"
title: "Predict the Output: Functions and return values #6"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst f = (x) => { x * 9; };\nconsole.log(f(4));\n```","options":["`TypeError`","`36`","`undefined`","`NaN`"],"answer":2,"explanation":"It logs `undefined`."},{"prompt":"What does this log?\n\n```js\nconst f = (x) => { x * 3; };\nconsole.log(f(6));\n```","options":["`undefined`","`TypeError`","`NaN`","`18`"],"answer":0,"explanation":"It logs `undefined`."},{"prompt":"What does this log?\n\n```js\nfunction f(x, y = 3) {\n  return x + y;\n}\nconsole.log(f(5), f(5, undefined), f(5, null));\n```","options":["`undefined`","`NaN`","`8 8 8`","`8 8 5`"],"answer":3,"explanation":"It logs `8 8 5`."},{"prompt":"What does this log?\n\n```js\nfunction f(x, y = 3) {\n  return x + y;\n}\nconsole.log(f(2), f(2, undefined), f(2, null));\n```","options":["`NaN`","`5 5 2`","`5 5 5`","`undefined`"],"answer":1,"explanation":"It logs `5 5 2`."},{"prompt":"What does this log?\n\n```js\nfunction f(x, y = 9) {\n  return x + y;\n}\nconsole.log(f(9), f(9, undefined), f(9, null));\n```","options":["`18 18 18`","`NaN`","`18 18 9`","`undefined`"],"answer":2,"explanation":"It logs `18 18 9`."}]
---
# Predict the Output: Functions and return values #6

A function without a `return` returns `undefined`. Arrow functions with braces need an explicit `return`; without braces they return the expression.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
