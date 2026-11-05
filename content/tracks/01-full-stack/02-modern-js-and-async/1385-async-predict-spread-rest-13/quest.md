---
slug: "async-predict-spread-rest-13"
title: "Predict the Output: Spread and rest #13"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst a = [7, 6];\nconst b = [...a, ...a];\nconsole.log(b.length, b);\n```","options":["`undefined`","`NaN`","`4 [ 7, 6, 7, 6 ]`","`3 [ [ 7, 6 ], 7, 6 ]`"],"answer":2,"explanation":"It logs `4 [ 7, 6, 7, 6 ]`."},{"prompt":"What does this log?\n\n```js\nfunction f(...args) {\n  return args.reduce((s, x) => s + x, 0);\n}\nconsole.log(f(1, 7, 7, 5));\n```","options":["`20`","`TypeError`","`NaN`","`undefined`"],"answer":0,"explanation":"It logs `20`."},{"prompt":"What does this log?\n\n```js\nfunction f(a, ...rest) {\n  return rest.length;\n}\nconsole.log(f(...[3, 5, 3, 2]));\n```","options":["`TypeError`","`3`","`undefined`","`NaN`"],"answer":1,"explanation":"It logs `3`."},{"prompt":"What does this log?\n\n```js\nfunction f(a, ...rest) {\n  return rest.length;\n}\nconsole.log(f(...[3, 5, 8, 3]));\n```","options":["`3`","`NaN`","`undefined`","`TypeError`"],"answer":0,"explanation":"It logs `3`."},{"prompt":"What does this log?\n\n```js\nfunction f(a, ...rest) {\n  return rest.length;\n}\nconsole.log(f(...[1, 1, 4, 5]));\n```","options":["`TypeError`","`NaN`","`3`","`undefined`"],"answer":2,"explanation":"It logs `3`."}]
---
# Predict the Output: Spread and rest #13

Rest parameters collect the remaining arguments into an array. Spread expands an array (or object) into individual items.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
