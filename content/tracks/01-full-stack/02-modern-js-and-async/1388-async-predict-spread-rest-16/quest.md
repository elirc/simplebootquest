---
slug: "async-predict-spread-rest-16"
title: "Predict the Output: Spread and rest #16"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nfunction f(a, ...rest) {\n  return rest.length;\n}\nconsole.log(f(...[2, 1, 1, 7]));\n```","options":["`TypeError`","`undefined`","`3`","`NaN`"],"answer":2,"explanation":"It logs `3`."},{"prompt":"What does this log?\n\n```js\nconst a = [4, 9];\nconst b = [...a, ...a];\nconsole.log(b.length, b);\n```","options":["`NaN`","`3 [ [ 4, 9 ], 4, 9 ]`","`4 [ 4, 9, 4, 9 ]`","`undefined`"],"answer":2,"explanation":"It logs `4 [ 4, 9, 4, 9 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [8, 6];\nconst b = [...a, ...a];\nconsole.log(b.length, b);\n```","options":["`undefined`","`4 [ 8, 6, 8, 6 ]`","`NaN`","`3 [ [ 8, 6 ], 8, 6 ]`"],"answer":1,"explanation":"It logs `4 [ 8, 6, 8, 6 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [9, 3];\nconst b = [...a, ...a];\nconsole.log(b.length, b);\n```","options":["`undefined`","`NaN`","`3 [ [ 9, 3 ], 9, 3 ]`","`4 [ 9, 3, 9, 3 ]`"],"answer":3,"explanation":"It logs `4 [ 9, 3, 9, 3 ]`."},{"prompt":"What does this log?\n\n```js\nfunction f(...args) {\n  return args.reduce((s, x) => s + x, 0);\n}\nconsole.log(f(1, 9, 4, 9));\n```","options":["`undefined`","`23`","`NaN`","`TypeError`"],"answer":1,"explanation":"It logs `23`."}]
---
# Predict the Output: Spread and rest #16

Rest parameters collect the remaining arguments into an array. Spread expands an array (or object) into individual items.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
