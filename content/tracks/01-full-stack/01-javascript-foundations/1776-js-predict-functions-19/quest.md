---
slug: "js-predict-functions-19"
title: "Predict the Output: Functions and return values #19"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst f = (x) => ({ value: x * 6 });\nconsole.log(f(6).value);\n```","options":["`36`","`TypeError`","`NaN`","`undefined`"],"answer":0,"explanation":"It logs `36`."},{"prompt":"What does this log?\n\n```js\nfunction f(x, y = 4) {\n  return x + y;\n}\nconsole.log(f(9), f(9, undefined), f(9, null));\n```","options":["`13 13 13`","`undefined`","`13 13 9`","`NaN`"],"answer":2,"explanation":"It logs `13 13 9`."},{"prompt":"What does this log?\n\n```js\nconst f = (x) => ({ value: x * 8 });\nconsole.log(f(3).value);\n```","options":["`undefined`","`NaN`","`TypeError`","`24`"],"answer":3,"explanation":"It logs `24`."},{"prompt":"What does this log?\n\n```js\nfunction f(x, y = 9) {\n  return x + y;\n}\nconsole.log(f(7), f(7, undefined), f(7, null));\n```","options":["`NaN`","`undefined`","`16 16 16`","`16 16 7`"],"answer":3,"explanation":"It logs `16 16 7`."},{"prompt":"What does this log?\n\n```js\nfunction f(x, y = 7) {\n  return x + y;\n}\nconsole.log(f(9), f(9, undefined), f(9, null));\n```","options":["`undefined`","`16 16 16`","`NaN`","`16 16 9`"],"answer":3,"explanation":"It logs `16 16 9`."}]
---
# Predict the Output: Functions and return values #19

A function without a `return` returns `undefined`. Arrow functions with braces need an explicit `return`; without braces they return the expression.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
