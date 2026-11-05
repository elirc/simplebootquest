---
slug: "async-predict-spread-rest-1"
title: "Predict the Output: Spread and rest #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst xs = [5, 5, 1, 1];\nconsole.log(Math.max(...xs), Math.max(xs));\n```","options":["`undefined`","`NaN NaN`","`5 NaN`","`NaN`"],"answer":2,"explanation":"It logs `5 NaN`."},{"prompt":"What does this log?\n\n```js\nconst a = [9, 4];\nconst b = [...a, ...a];\nconsole.log(b.length, b);\n```","options":["`undefined`","`3 [ [ 9, 4 ], 9, 4 ]`","`4 [ 9, 4, 9, 4 ]`","`NaN`"],"answer":2,"explanation":"It logs `4 [ 9, 4, 9, 4 ]`."},{"prompt":"What does this log?\n\n```js\nconst [x, ...others] = \"keyboard\";\nconsole.log(x, others.length);\n```","options":["`k 1`","`NaN`","`undefined`","`k 7`"],"answer":3,"explanation":"It logs `k 7`."},{"prompt":"What does this log?\n\n```js\nconst a = [8, 2];\nconst b = [...a, ...a];\nconsole.log(b.length, b);\n```","options":["`4 [ 8, 2, 8, 2 ]`","`NaN`","`3 [ [ 8, 2 ], 8, 2 ]`","`undefined`"],"answer":0,"explanation":"It logs `4 [ 8, 2, 8, 2 ]`."},{"prompt":"What does this log?\n\n```js\nfunction f(...args) {\n  return args.reduce((s, x) => s + x, 0);\n}\nconsole.log(f(7, 9, 4, 4));\n```","options":["`24`","`TypeError`","`NaN`","`undefined`"],"answer":0,"explanation":"It logs `24`."}]
---
# Predict the Output: Spread and rest #1

Rest parameters collect the remaining arguments into an array. Spread expands an array (or object) into individual items.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
