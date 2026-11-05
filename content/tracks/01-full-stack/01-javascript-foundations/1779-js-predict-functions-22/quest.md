---
slug: "js-predict-functions-22"
title: "Predict the Output: Functions and return values #22"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst f = (x) => ({ value: x * 5 });\nconsole.log(f(6).value);\n```","options":["`TypeError`","`undefined`","`30`","`NaN`"],"answer":2,"explanation":"It logs `30`."},{"prompt":"What does this log?\n\n```js\nconst f = (x) => { x * 4; };\nconsole.log(f(2));\n```","options":["`undefined`","`8`","`NaN`","`TypeError`"],"answer":0,"explanation":"It logs `undefined`."},{"prompt":"What does this log?\n\n```js\nconst f = (x) => ({ value: x * 4 });\nconsole.log(f(6).value);\n```","options":["`TypeError`","`24`","`NaN`","`undefined`"],"answer":1,"explanation":"It logs `24`."},{"prompt":"What does this log?\n\n```js\nconst f = (x) => ({ value: x * 8 });\nconsole.log(f(5).value);\n```","options":["`40`","`NaN`","`TypeError`","`undefined`"],"answer":0,"explanation":"It logs `40`."},{"prompt":"What does this log?\n\n```js\nconst f = (x) => { x * 2; };\nconsole.log(f(3));\n```","options":["`6`","`TypeError`","`undefined`","`NaN`"],"answer":2,"explanation":"It logs `undefined`."}]
---
# Predict the Output: Functions and return values #22

A function without a `return` returns `undefined`. Arrow functions with braces need an explicit `return`; without braces they return the expression.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
