---
slug: "async-predict-spread-rest-2"
title: "Predict the Output: Spread and rest #2"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst xs = [5, 4, 1, 2];\nconsole.log(Math.max(...xs), Math.max(xs));\n```","options":["`5 NaN`","`NaN`","`NaN NaN`","`undefined`"],"answer":0,"explanation":"It logs `5 NaN`."},{"prompt":"What does this log?\n\n```js\nconst xs = [4, 7, 6, 2];\nconsole.log(Math.max(...xs), Math.max(xs));\n```","options":["`undefined`","`7 NaN`","`NaN`","`NaN NaN`"],"answer":1,"explanation":"It logs `7 NaN`."},{"prompt":"What does this log?\n\n```js\nfunction f(a, ...rest) {\n  return rest.length;\n}\nconsole.log(f(...[4, 1, 3, 9]));\n```","options":["`undefined`","`TypeError`","`3`","`NaN`"],"answer":2,"explanation":"It logs `3`."},{"prompt":"What does this log?\n\n```js\nconst a = [1, 8];\nconst b = [...a, ...a];\nconsole.log(b.length, b);\n```","options":["`4 [ 1, 8, 1, 8 ]`","`NaN`","`3 [ [ 1, 8 ], 1, 8 ]`","`undefined`"],"answer":0,"explanation":"It logs `4 [ 1, 8, 1, 8 ]`."},{"prompt":"What does this log?\n\n```js\nconst a = [6, 2];\nconst b = [...a, ...a];\nconsole.log(b.length, b);\n```","options":["`4 [ 6, 2, 6, 2 ]`","`NaN`","`3 [ [ 6, 2 ], 6, 2 ]`","`undefined`"],"answer":0,"explanation":"It logs `4 [ 6, 2, 6, 2 ]`."}]
---
# Predict the Output: Spread and rest #2

Rest parameters collect the remaining arguments into an array. Spread expands an array (or object) into individual items.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
