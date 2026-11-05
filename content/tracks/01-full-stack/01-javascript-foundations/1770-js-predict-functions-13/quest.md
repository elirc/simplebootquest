---
slug: "js-predict-functions-13"
title: "Predict the Output: Functions and return values #13"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nfunction f(x, y = 5) {\n  return x + y;\n}\nconsole.log(f(4), f(4, undefined), f(4, null));\n```","options":["`NaN`","`undefined`","`9 9 4`","`9 9 9`"],"answer":2,"explanation":"It logs `9 9 4`."},{"prompt":"What does this log?\n\n```js\nconst f = (x) => { x * 7; };\nconsole.log(f(7));\n```","options":["`NaN`","`49`","`undefined`","`TypeError`"],"answer":2,"explanation":"It logs `undefined`."},{"prompt":"What does this log?\n\n```js\nfunction f(x, y = 5) {\n  return x + y;\n}\nconsole.log(f(9), f(9, undefined), f(9, null));\n```","options":["`undefined`","`14 14 14`","`NaN`","`14 14 9`"],"answer":3,"explanation":"It logs `14 14 9`."},{"prompt":"What does this log?\n\n```js\nconst f = (x) => ({ value: x * 6 });\nconsole.log(f(9).value);\n```","options":["`undefined`","`TypeError`","`54`","`NaN`"],"answer":2,"explanation":"It logs `54`."},{"prompt":"What does this log?\n\n```js\nconst f = (x) => { x * 2; };\nconsole.log(f(4));\n```","options":["`8`","`undefined`","`TypeError`","`NaN`"],"answer":1,"explanation":"It logs `undefined`."}]
---
# Predict the Output: Functions and return values #13

A function without a `return` returns `undefined`. Arrow functions with braces need an explicit `return`; without braces they return the expression.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
