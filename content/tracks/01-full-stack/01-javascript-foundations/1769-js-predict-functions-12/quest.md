---
slug: "js-predict-functions-12"
title: "Predict the Output: Functions and return values #12"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nfunction f(x, y = 3) {\n  return x + y;\n}\nconsole.log(f(6), f(6, undefined), f(6, null));\n```","options":["`9 9 9`","`9 9 6`","`undefined`","`NaN`"],"answer":1,"explanation":"It logs `9 9 6`."},{"prompt":"What does this log?\n\n```js\nconst f = (x) => { x * 7; };\nconsole.log(f(5));\n```","options":["`TypeError`","`35`","`NaN`","`undefined`"],"answer":3,"explanation":"It logs `undefined`."},{"prompt":"What does this log?\n\n```js\nconst f = (x) => { x * 5; };\nconsole.log(f(4));\n```","options":["`20`","`TypeError`","`NaN`","`undefined`"],"answer":3,"explanation":"It logs `undefined`."},{"prompt":"What does this log?\n\n```js\nfunction f(x, y = 7) {\n  return x + y;\n}\nconsole.log(f(3), f(3, undefined), f(3, null));\n```","options":["`10 10 3`","`NaN`","`undefined`","`10 10 10`"],"answer":0,"explanation":"It logs `10 10 3`."},{"prompt":"What does this log?\n\n```js\nfunction f(x, y = 9) {\n  return x + y;\n}\nconsole.log(f(3), f(3, undefined), f(3, null));\n```","options":["`undefined`","`12 12 3`","`NaN`","`12 12 12`"],"answer":1,"explanation":"It logs `12 12 3`."}]
---
# Predict the Output: Functions and return values #12

A function without a `return` returns `undefined`. Arrow functions with braces need an explicit `return`; without braces they return the expression.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
