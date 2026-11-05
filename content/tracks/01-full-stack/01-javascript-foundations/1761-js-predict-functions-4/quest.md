---
slug: "js-predict-functions-4"
title: "Predict the Output: Functions and return values #4"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst f = (x) => { x * 4; };\nconsole.log(f(6));\n```","options":["`TypeError`","`NaN`","`24`","`undefined`"],"answer":3,"explanation":"It logs `undefined`."},{"prompt":"What does this log?\n\n```js\nconst f = (x) => { x * 3; };\nconsole.log(f(3));\n```","options":["`9`","`TypeError`","`NaN`","`undefined`"],"answer":3,"explanation":"It logs `undefined`."},{"prompt":"What does this log?\n\n```js\nconst f = (x) => ({ value: x * 9 });\nconsole.log(f(4).value);\n```","options":["`TypeError`","`undefined`","`36`","`NaN`"],"answer":2,"explanation":"It logs `36`."},{"prompt":"What does this log?\n\n```js\nconst f = (x) => { x * 9; };\nconsole.log(f(2));\n```","options":["`NaN`","`TypeError`","`undefined`","`18`"],"answer":2,"explanation":"It logs `undefined`."},{"prompt":"What does this log?\n\n```js\nfunction f(x, y = 8) {\n  return x + y;\n}\nconsole.log(f(4), f(4, undefined), f(4, null));\n```","options":["`undefined`","`12 12 4`","`12 12 12`","`NaN`"],"answer":1,"explanation":"It logs `12 12 4`."}]
---
# Predict the Output: Functions and return values #4

A function without a `return` returns `undefined`. Arrow functions with braces need an explicit `return`; without braces they return the expression.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
