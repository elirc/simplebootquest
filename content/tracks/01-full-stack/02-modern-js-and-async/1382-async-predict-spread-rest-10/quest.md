---
slug: "async-predict-spread-rest-10"
title: "Predict the Output: Spread and rest #10"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nfunction f(...args) {\n  return args.reduce((s, x) => s + x, 0);\n}\nconsole.log(f(8, 8, 2, 9));\n```","options":["`27`","`TypeError`","`NaN`","`undefined`"],"answer":0,"explanation":"It logs `27`."},{"prompt":"What does this log?\n\n```js\nfunction f(...args) {\n  return args.reduce((s, x) => s + x, 0);\n}\nconsole.log(f(6, 5, 6, 2));\n```","options":["`undefined`","`19`","`NaN`","`TypeError`"],"answer":1,"explanation":"It logs `19`."},{"prompt":"What does this log?\n\n```js\nfunction f(...args) {\n  return args.reduce((s, x) => s + x, 0);\n}\nconsole.log(f(9, 6, 5, 1));\n```","options":["`21`","`TypeError`","`NaN`","`undefined`"],"answer":0,"explanation":"It logs `21`."},{"prompt":"What does this log?\n\n```js\nfunction f(...args) {\n  return args.reduce((s, x) => s + x, 0);\n}\nconsole.log(f(3, 7, 8, 6));\n```","options":["`NaN`","`TypeError`","`undefined`","`24`"],"answer":3,"explanation":"It logs `24`."},{"prompt":"What does this log?\n\n```js\nfunction f(a, ...rest) {\n  return rest.length;\n}\nconsole.log(f(...[7, 8, 8, 9]));\n```","options":["`NaN`","`undefined`","`3`","`TypeError`"],"answer":2,"explanation":"It logs `3`."}]
---
# Predict the Output: Spread and rest #10

Rest parameters collect the remaining arguments into an array. Spread expands an array (or object) into individual items.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
