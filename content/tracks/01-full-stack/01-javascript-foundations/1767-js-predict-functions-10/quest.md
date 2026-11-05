---
slug: "js-predict-functions-10"
title: "Predict the Output: Functions and return values #10"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nfunction f(x, y = 2) {\n  return x + y;\n}\nconsole.log(f(4), f(4, undefined), f(4, null));\n```","options":["`6 6 6`","`NaN`","`undefined`","`6 6 4`"],"answer":3,"explanation":"It logs `6 6 4`."},{"prompt":"What does this log?\n\n```js\nconst f = (x) => ({ value: x * 3 });\nconsole.log(f(5).value);\n```","options":["`NaN`","`15`","`TypeError`","`undefined`"],"answer":1,"explanation":"It logs `15`."},{"prompt":"What does this log?\n\n```js\nconst f = (x) => { x * 6; };\nconsole.log(f(2));\n```","options":["`undefined`","`NaN`","`TypeError`","`12`"],"answer":0,"explanation":"It logs `undefined`."},{"prompt":"What does this log?\n\n```js\nconst f = (x) => ({ value: x * 6 });\nconsole.log(f(7).value);\n```","options":["`42`","`undefined`","`NaN`","`TypeError`"],"answer":0,"explanation":"It logs `42`."},{"prompt":"What does this log?\n\n```js\nconst f = (x) => { x * 6; };\nconsole.log(f(8));\n```","options":["`48`","`undefined`","`NaN`","`TypeError`"],"answer":1,"explanation":"It logs `undefined`."}]
---
# Predict the Output: Functions and return values #10

A function without a `return` returns `undefined`. Arrow functions with braces need an explicit `return`; without braces they return the expression.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
