---
slug: "js-predict-functions-17"
title: "Predict the Output: Functions and return values #17"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nfunction f(x, y = 5) {\n  return x + y;\n}\nconsole.log(f(5), f(5, undefined), f(5, null));\n```","options":["`undefined`","`10 10 10`","`10 10 5`","`NaN`"],"answer":2,"explanation":"It logs `10 10 5`."},{"prompt":"What does this log?\n\n```js\nconst f = (x) => { x * 2; };\nconsole.log(f(5));\n```","options":["`undefined`","`10`","`NaN`","`TypeError`"],"answer":0,"explanation":"It logs `undefined`."},{"prompt":"What does this log?\n\n```js\nfunction f(x, y = 7) {\n  return x + y;\n}\nconsole.log(f(5), f(5, undefined), f(5, null));\n```","options":["`undefined`","`NaN`","`12 12 12`","`12 12 5`"],"answer":3,"explanation":"It logs `12 12 5`."},{"prompt":"What does this log?\n\n```js\nfunction f(x, y = 5) {\n  return x + y;\n}\nconsole.log(f(3), f(3, undefined), f(3, null));\n```","options":["`8 8 8`","`NaN`","`undefined`","`8 8 3`"],"answer":3,"explanation":"It logs `8 8 3`."},{"prompt":"What does this log?\n\n```js\nconst f = (x) => ({ value: x * 6 });\nconsole.log(f(2).value);\n```","options":["`TypeError`","`undefined`","`NaN`","`12`"],"answer":3,"explanation":"It logs `12`."}]
---
# Predict the Output: Functions and return values #17

A function without a `return` returns `undefined`. Arrow functions with braces need an explicit `return`; without braces they return the expression.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
