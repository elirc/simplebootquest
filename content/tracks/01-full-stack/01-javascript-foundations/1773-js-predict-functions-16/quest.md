---
slug: "js-predict-functions-16"
title: "Predict the Output: Functions and return values #16"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nfunction f(x, y = 7) {\n  return x + y;\n}\nconsole.log(f(2), f(2, undefined), f(2, null));\n```","options":["`9 9 9`","`NaN`","`9 9 2`","`undefined`"],"answer":2,"explanation":"It logs `9 9 2`."},{"prompt":"What does this log?\n\n```js\nconst f = (x) => { x * 5; };\nconsole.log(f(3));\n```","options":["`undefined`","`NaN`","`TypeError`","`15`"],"answer":0,"explanation":"It logs `undefined`."},{"prompt":"What does this log?\n\n```js\nfunction f(x, y = 2) {\n  return x + y;\n}\nconsole.log(f(8), f(8, undefined), f(8, null));\n```","options":["`10 10 10`","`undefined`","`NaN`","`10 10 8`"],"answer":3,"explanation":"It logs `10 10 8`."},{"prompt":"What does this log?\n\n```js\nconst f = (x) => { x * 6; };\nconsole.log(f(6));\n```","options":["`TypeError`","`36`","`undefined`","`NaN`"],"answer":2,"explanation":"It logs `undefined`."},{"prompt":"What does this log?\n\n```js\nconst f = (x) => { x * 3; };\nconsole.log(f(4));\n```","options":["`TypeError`","`NaN`","`undefined`","`12`"],"answer":2,"explanation":"It logs `undefined`."}]
---
# Predict the Output: Functions and return values #16

A function without a `return` returns `undefined`. Arrow functions with braces need an explicit `return`; without braces they return the expression.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
