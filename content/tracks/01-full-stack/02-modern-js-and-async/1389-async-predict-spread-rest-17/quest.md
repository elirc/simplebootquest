---
slug: "async-predict-spread-rest-17"
title: "Predict the Output: Spread and rest #17"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nfunction f(...args) {\n  return args.reduce((s, x) => s + x, 0);\n}\nconsole.log(f(3, 8, 4, 9));\n```","options":["`TypeError`","`24`","`undefined`","`NaN`"],"answer":1,"explanation":"It logs `24`."},{"prompt":"What does this log?\n\n```js\nconst a = [9, 9];\nconst b = [...a, ...a];\nconsole.log(b.length, b);\n```","options":["`4 [ 9, 9, 9, 9 ]`","`NaN`","`3 [ [ 9, 9 ], 9, 9 ]`","`undefined`"],"answer":0,"explanation":"It logs `4 [ 9, 9, 9, 9 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [5, 3, 5, 5];\nconsole.log(Math.max(...xs), Math.max(xs));\n```","options":["`NaN NaN`","`NaN`","`undefined`","`5 NaN`"],"answer":3,"explanation":"It logs `5 NaN`."},{"prompt":"What does this log?\n\n```js\nfunction f(...args) {\n  return args.reduce((s, x) => s + x, 0);\n}\nconsole.log(f(8, 1, 2, 5));\n```","options":["`NaN`","`16`","`undefined`","`TypeError`"],"answer":1,"explanation":"It logs `16`."},{"prompt":"What does this log?\n\n```js\nfunction f(...args) {\n  return args.reduce((s, x) => s + x, 0);\n}\nconsole.log(f(1, 5, 7, 2));\n```","options":["`undefined`","`15`","`TypeError`","`NaN`"],"answer":1,"explanation":"It logs `15`."}]
---
# Predict the Output: Spread and rest #17

Rest parameters collect the remaining arguments into an array. Spread expands an array (or object) into individual items.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
