---
slug: "js-predict-functions-20"
title: "Predict the Output: Functions and return values #20"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst f = (x) => ({ value: x * 3 });\nconsole.log(f(8).value);\n```","options":["`undefined`","`NaN`","`TypeError`","`24`"],"answer":3,"explanation":"It logs `24`."},{"prompt":"What does this log?\n\n```js\nfunction f(x, y = 8) {\n  return x + y;\n}\nconsole.log(f(5), f(5, undefined), f(5, null));\n```","options":["`13 13 5`","`13 13 13`","`NaN`","`undefined`"],"answer":0,"explanation":"It logs `13 13 5`."},{"prompt":"What does this log?\n\n```js\nfunction f(x, y = 5) {\n  return x + y;\n}\nconsole.log(f(8), f(8, undefined), f(8, null));\n```","options":["`undefined`","`NaN`","`13 13 8`","`13 13 13`"],"answer":2,"explanation":"It logs `13 13 8`."},{"prompt":"What does this log?\n\n```js\nconst f = (x) => ({ value: x * 8 });\nconsole.log(f(9).value);\n```","options":["`72`","`TypeError`","`NaN`","`undefined`"],"answer":0,"explanation":"It logs `72`."},{"prompt":"What does this log?\n\n```js\nconst f = (x) => ({ value: x * 9 });\nconsole.log(f(3).value);\n```","options":["`27`","`NaN`","`undefined`","`TypeError`"],"answer":0,"explanation":"It logs `27`."}]
---
# Predict the Output: Functions and return values #20

A function without a `return` returns `undefined`. Arrow functions with braces need an explicit `return`; without braces they return the expression.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
