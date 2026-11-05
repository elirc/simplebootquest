---
slug: "js-predict-functions-21"
title: "Predict the Output: Functions and return values #21"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst f = (x) => ({ value: x * 6 });\nconsole.log(f(3).value);\n```","options":["`18`","`undefined`","`TypeError`","`NaN`"],"answer":0,"explanation":"It logs `18`."},{"prompt":"What does this log?\n\n```js\nconst f = (x) => ({ value: x * 2 });\nconsole.log(f(7).value);\n```","options":["`undefined`","`NaN`","`TypeError`","`14`"],"answer":3,"explanation":"It logs `14`."},{"prompt":"What does this log?\n\n```js\nconst f = (x) => ({ value: x * 5 });\nconsole.log(f(2).value);\n```","options":["`NaN`","`10`","`TypeError`","`undefined`"],"answer":1,"explanation":"It logs `10`."},{"prompt":"What does this log?\n\n```js\nconst f = (x) => ({ value: x * 3 });\nconsole.log(f(2).value);\n```","options":["`NaN`","`undefined`","`TypeError`","`6`"],"answer":3,"explanation":"It logs `6`."},{"prompt":"What does this log?\n\n```js\nconst f = (x) => { x * 8; };\nconsole.log(f(6));\n```","options":["`NaN`","`TypeError`","`48`","`undefined`"],"answer":3,"explanation":"It logs `undefined`."}]
---
# Predict the Output: Functions and return values #21

A function without a `return` returns `undefined`. Arrow functions with braces need an explicit `return`; without braces they return the expression.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
