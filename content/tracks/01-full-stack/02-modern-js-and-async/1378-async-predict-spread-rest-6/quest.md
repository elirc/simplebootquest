---
slug: "async-predict-spread-rest-6"
title: "Predict the Output: Spread and rest #6"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nfunction f(a, ...rest) {\n  return rest.length;\n}\nconsole.log(f(...[2, 2, 6, 2]));\n```","options":["`3`","`NaN`","`undefined`","`TypeError`"],"answer":0,"explanation":"It logs `3`."},{"prompt":"What does this log?\n\n```js\nfunction f(a, ...rest) {\n  return rest.length;\n}\nconsole.log(f(...[1, 5, 9, 7]));\n```","options":["`undefined`","`NaN`","`TypeError`","`3`"],"answer":3,"explanation":"It logs `3`."},{"prompt":"What does this log?\n\n```js\nfunction f(...args) {\n  return args.reduce((s, x) => s + x, 0);\n}\nconsole.log(f(1, 1, 6, 7));\n```","options":["`15`","`NaN`","`TypeError`","`undefined`"],"answer":0,"explanation":"It logs `15`."},{"prompt":"What does this log?\n\n```js\nfunction f(...args) {\n  return args.reduce((s, x) => s + x, 0);\n}\nconsole.log(f(7, 1, 1, 4));\n```","options":["`undefined`","`13`","`TypeError`","`NaN`"],"answer":1,"explanation":"It logs `13`."},{"prompt":"What does this log?\n\n```js\nconst a = [2, 1];\nconst b = [...a, ...a];\nconsole.log(b.length, b);\n```","options":["`undefined`","`4 [ 2, 1, 2, 1 ]`","`NaN`","`3 [ [ 2, 1 ], 2, 1 ]`"],"answer":1,"explanation":"It logs `4 [ 2, 1, 2, 1 ]`."}]
---
# Predict the Output: Spread and rest #6

Rest parameters collect the remaining arguments into an array. Spread expands an array (or object) into individual items.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
