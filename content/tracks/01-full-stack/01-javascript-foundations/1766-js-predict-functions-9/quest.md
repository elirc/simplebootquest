---
slug: "js-predict-functions-9"
title: "Predict the Output: Functions and return values #9"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst f = (x) => { x * 7; };\nconsole.log(f(4));\n```","options":["`28`","`undefined`","`NaN`","`TypeError`"],"answer":1,"explanation":"It logs `undefined`."},{"prompt":"What does this log?\n\n```js\nconst f = (x) => { x * 4; };\nconsole.log(f(7));\n```","options":["`undefined`","`TypeError`","`NaN`","`28`"],"answer":0,"explanation":"It logs `undefined`."},{"prompt":"What does this log?\n\n```js\nfunction f(x, y = 7) {\n  return x + y;\n}\nconsole.log(f(7), f(7, undefined), f(7, null));\n```","options":["`NaN`","`14 14 14`","`undefined`","`14 14 7`"],"answer":3,"explanation":"It logs `14 14 7`."},{"prompt":"What does this log?\n\n```js\nconst f = (x) => { x * 2; };\nconsole.log(f(6));\n```","options":["`undefined`","`TypeError`","`NaN`","`12`"],"answer":0,"explanation":"It logs `undefined`."},{"prompt":"What does this log?\n\n```js\nfunction f(x, y = 6) {\n  return x + y;\n}\nconsole.log(f(4), f(4, undefined), f(4, null));\n```","options":["`NaN`","`10 10 4`","`undefined`","`10 10 10`"],"answer":1,"explanation":"It logs `10 10 4`."}]
---
# Predict the Output: Functions and return values #9

A function without a `return` returns `undefined`. Arrow functions with braces need an explicit `return`; without braces they return the expression.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
