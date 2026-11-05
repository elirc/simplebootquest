---
slug: "js-predict-functions-18"
title: "Predict the Output: Functions and return values #18"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst f = (x) => ({ value: x * 7 });\nconsole.log(f(9).value);\n```","options":["`undefined`","`TypeError`","`63`","`NaN`"],"answer":2,"explanation":"It logs `63`."},{"prompt":"What does this log?\n\n```js\nconst f = (x) => { x * 3; };\nconsole.log(f(8));\n```","options":["`24`","`TypeError`","`undefined`","`NaN`"],"answer":2,"explanation":"It logs `undefined`."},{"prompt":"What does this log?\n\n```js\nfunction f(x, y = 2) {\n  return x + y;\n}\nconsole.log(f(7), f(7, undefined), f(7, null));\n```","options":["`9 9 7`","`undefined`","`NaN`","`9 9 9`"],"answer":0,"explanation":"It logs `9 9 7`."},{"prompt":"What does this log?\n\n```js\nconst f = (x) => { x * 8; };\nconsole.log(f(4));\n```","options":["`TypeError`","`32`","`NaN`","`undefined`"],"answer":3,"explanation":"It logs `undefined`."},{"prompt":"What does this log?\n\n```js\nconst f = (x) => ({ value: x * 9 });\nconsole.log(f(2).value);\n```","options":["`18`","`undefined`","`TypeError`","`NaN`"],"answer":0,"explanation":"It logs `18`."}]
---
# Predict the Output: Functions and return values #18

A function without a `return` returns `undefined`. Arrow functions with braces need an explicit `return`; without braces they return the expression.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
