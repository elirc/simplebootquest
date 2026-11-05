---
slug: "async-predict-spread-rest-19"
title: "Predict the Output: Spread and rest #19"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nfunction f(a, ...rest) {\n  return rest.length;\n}\nconsole.log(f(...[5, 2, 5, 9]));\n```","options":["`TypeError`","`undefined`","`NaN`","`3`"],"answer":3,"explanation":"It logs `3`."},{"prompt":"What does this log?\n\n```js\nconst xs = [8, 9, 4, 6];\nconsole.log(Math.max(...xs), Math.max(xs));\n```","options":["`NaN`","`NaN NaN`","`9 NaN`","`undefined`"],"answer":2,"explanation":"It logs `9 NaN`."},{"prompt":"What does this log?\n\n```js\nconst a = [7, 9];\nconst b = [...a, ...a];\nconsole.log(b.length, b);\n```","options":["`3 [ [ 7, 9 ], 7, 9 ]`","`4 [ 7, 9, 7, 9 ]`","`undefined`","`NaN`"],"answer":1,"explanation":"It logs `4 [ 7, 9, 7, 9 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [6, 7];\nconst b = [...a, ...a];\nconsole.log(b.length, b);\n```","options":["`4 [ 6, 7, 6, 7 ]`","`3 [ [ 6, 7 ], 6, 7 ]`","`NaN`","`undefined`"],"answer":0,"explanation":"It logs `4 [ 6, 7, 6, 7 ]`."},{"prompt":"What does this log?\n\n```js\nfunction f(a, ...rest) {\n  return rest.length;\n}\nconsole.log(f(...[2, 5, 4, 1]));\n```","options":["`TypeError`","`NaN`","`3`","`undefined`"],"answer":2,"explanation":"It logs `3`."}]
---
# Predict the Output: Spread and rest #19

Rest parameters collect the remaining arguments into an array. Spread expands an array (or object) into individual items.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
