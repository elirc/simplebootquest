---
slug: "js-predict-functions-8"
title: "Predict the Output: Functions and return values #8"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nfunction f(x, y = 5) {\n  return x + y;\n}\nconsole.log(f(2), f(2, undefined), f(2, null));\n```","options":["`NaN`","`undefined`","`7 7 2`","`7 7 7`"],"answer":2,"explanation":"It logs `7 7 2`."},{"prompt":"What does this log?\n\n```js\nconst f = (x) => ({ value: x * 6 });\nconsole.log(f(8).value);\n```","options":["`NaN`","`undefined`","`48`","`TypeError`"],"answer":2,"explanation":"It logs `48`."},{"prompt":"What does this log?\n\n```js\nconst f = (x) => ({ value: x * 4 });\nconsole.log(f(7).value);\n```","options":["`28`","`undefined`","`NaN`","`TypeError`"],"answer":0,"explanation":"It logs `28`."},{"prompt":"What does this log?\n\n```js\nfunction f(x, y = 4) {\n  return x + y;\n}\nconsole.log(f(4), f(4, undefined), f(4, null));\n```","options":["`8 8 8`","`undefined`","`NaN`","`8 8 4`"],"answer":3,"explanation":"It logs `8 8 4`."},{"prompt":"What does this log?\n\n```js\nconst f = (x) => { x * 2; };\nconsole.log(f(7));\n```","options":["`TypeError`","`NaN`","`undefined`","`14`"],"answer":2,"explanation":"It logs `undefined`."}]
---
# Predict the Output: Functions and return values #8

A function without a `return` returns `undefined`. Arrow functions with braces need an explicit `return`; without braces they return the expression.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
