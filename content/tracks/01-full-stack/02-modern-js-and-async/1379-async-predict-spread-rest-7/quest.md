---
slug: "async-predict-spread-rest-7"
title: "Predict the Output: Spread and rest #7"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst a = [6, 5];\nconst b = [...a, ...a];\nconsole.log(b.length, b);\n```","options":["`undefined`","`3 [ [ 6, 5 ], 6, 5 ]`","`4 [ 6, 5, 6, 5 ]`","`NaN`"],"answer":2,"explanation":"It logs `4 [ 6, 5, 6, 5 ]`."},{"prompt":"What does this log?\n\n```js\nfunction f(...args) {\n  return args.reduce((s, x) => s + x, 0);\n}\nconsole.log(f(1, 6, 6, 7));\n```","options":["`undefined`","`20`","`NaN`","`TypeError`"],"answer":1,"explanation":"It logs `20`."},{"prompt":"What does this log?\n\n```js\nconst a = [4, 1];\nconst b = [...a, ...a];\nconsole.log(b.length, b);\n```","options":["`4 [ 4, 1, 4, 1 ]`","`NaN`","`undefined`","`3 [ [ 4, 1 ], 4, 1 ]`"],"answer":0,"explanation":"It logs `4 [ 4, 1, 4, 1 ]`."},{"prompt":"What does this log?\n\n```js\nfunction f(...args) {\n  return args.reduce((s, x) => s + x, 0);\n}\nconsole.log(f(5, 8, 8, 2));\n```","options":["`undefined`","`NaN`","`TypeError`","`23`"],"answer":3,"explanation":"It logs `23`."},{"prompt":"What does this log?\n\n```js\nfunction f(...args) {\n  return args.reduce((s, x) => s + x, 0);\n}\nconsole.log(f(9, 1, 9, 8));\n```","options":["`27`","`NaN`","`TypeError`","`undefined`"],"answer":0,"explanation":"It logs `27`."}]
---
# Predict the Output: Spread and rest #7

Rest parameters collect the remaining arguments into an array. Spread expands an array (or object) into individual items.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
