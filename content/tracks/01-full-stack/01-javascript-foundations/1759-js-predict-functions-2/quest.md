---
slug: "js-predict-functions-2"
title: "Predict the Output: Functions and return values #2"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst f = (x) => { x * 3; };\nconsole.log(f(9));\n```","options":["`NaN`","`27`","`undefined`","`TypeError`"],"answer":2,"explanation":"It logs `undefined`."},{"prompt":"What does this log?\n\n```js\nconst f = (x) => ({ value: x * 2 });\nconsole.log(f(8).value);\n```","options":["`16`","`NaN`","`undefined`","`TypeError`"],"answer":0,"explanation":"It logs `16`."},{"prompt":"What does this log?\n\n```js\nconst f = (x) => { x * 6; };\nconsole.log(f(9));\n```","options":["`undefined`","`54`","`NaN`","`TypeError`"],"answer":0,"explanation":"It logs `undefined`."},{"prompt":"What does this log?\n\n```js\nconst f = (x) => { x * 7; };\nconsole.log(f(9));\n```","options":["`NaN`","`TypeError`","`63`","`undefined`"],"answer":3,"explanation":"It logs `undefined`."},{"prompt":"What does this log?\n\n```js\nconst f = (x) => { x * 6; };\nconsole.log(f(7));\n```","options":["`NaN`","`undefined`","`TypeError`","`42`"],"answer":1,"explanation":"It logs `undefined`."}]
---
# Predict the Output: Functions and return values #2

A function without a `return` returns `undefined`. Arrow functions with braces need an explicit `return`; without braces they return the expression.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
