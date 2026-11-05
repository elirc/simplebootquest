---
slug: "js-predict-functions-24"
title: "Predict the Output: Functions and return values #24"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst f = (x) => { x * 5; };\nconsole.log(f(2));\n```","options":["`NaN`","`10`","`undefined`","`TypeError`"],"answer":2,"explanation":"It logs `undefined`."},{"prompt":"What does this log?\n\n```js\nconst f = (x) => { x * 8; };\nconsole.log(f(5));\n```","options":["`TypeError`","`undefined`","`NaN`","`40`"],"answer":1,"explanation":"It logs `undefined`."},{"prompt":"What does this log?\n\n```js\nconst f = (x) => { x * 4; };\nconsole.log(f(9));\n```","options":["`36`","`NaN`","`undefined`","`TypeError`"],"answer":2,"explanation":"It logs `undefined`."},{"prompt":"What does this log?\n\n```js\nconst f = (x) => { x * 5; };\nconsole.log(f(8));\n```","options":["`undefined`","`NaN`","`TypeError`","`40`"],"answer":0,"explanation":"It logs `undefined`."},{"prompt":"What does this log?\n\n```js\nfunction f(x, y = 3) {\n  return x + y;\n}\nconsole.log(f(8), f(8, undefined), f(8, null));\n```","options":["`11 11 11`","`undefined`","`11 11 8`","`NaN`"],"answer":2,"explanation":"It logs `11 11 8`."}]
---
# Predict the Output: Functions and return values #24

A function without a `return` returns `undefined`. Arrow functions with braces need an explicit `return`; without braces they return the expression.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
