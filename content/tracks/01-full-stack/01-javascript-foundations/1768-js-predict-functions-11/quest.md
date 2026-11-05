---
slug: "js-predict-functions-11"
title: "Predict the Output: Functions and return values #11"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nfunction f(x, y = 5) {\n  return x + y;\n}\nconsole.log(f(7), f(7, undefined), f(7, null));\n```","options":["`12 12 7`","`NaN`","`12 12 12`","`undefined`"],"answer":0,"explanation":"It logs `12 12 7`."},{"prompt":"What does this log?\n\n```js\nconst f = (x) => ({ value: x * 4 });\nconsole.log(f(9).value);\n```","options":["`TypeError`","`NaN`","`undefined`","`36`"],"answer":3,"explanation":"It logs `36`."},{"prompt":"What does this log?\n\n```js\nfunction f(x, y = 4) {\n  return x + y;\n}\nconsole.log(f(5), f(5, undefined), f(5, null));\n```","options":["`9 9 5`","`NaN`","`9 9 9`","`undefined`"],"answer":0,"explanation":"It logs `9 9 5`."},{"prompt":"What does this log?\n\n```js\nfunction f(x, y = 6) {\n  return x + y;\n}\nconsole.log(f(2), f(2, undefined), f(2, null));\n```","options":["`NaN`","`undefined`","`8 8 8`","`8 8 2`"],"answer":3,"explanation":"It logs `8 8 2`."},{"prompt":"What does this log?\n\n```js\nconst f = (x) => { x * 8; };\nconsole.log(f(9));\n```","options":["`undefined`","`NaN`","`72`","`TypeError`"],"answer":0,"explanation":"It logs `undefined`."}]
---
# Predict the Output: Functions and return values #11

A function without a `return` returns `undefined`. Arrow functions with braces need an explicit `return`; without braces they return the expression.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
