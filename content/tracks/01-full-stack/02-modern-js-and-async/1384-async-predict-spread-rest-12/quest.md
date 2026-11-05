---
slug: "async-predict-spread-rest-12"
title: "Predict the Output: Spread and rest #12"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nfunction f(a, ...rest) {\n  return rest.length;\n}\nconsole.log(f(...[9, 6, 6, 8]));\n```","options":["`3`","`TypeError`","`NaN`","`undefined`"],"answer":0,"explanation":"It logs `3`."},{"prompt":"What does this log?\n\n```js\nfunction f(...args) {\n  return args.reduce((s, x) => s + x, 0);\n}\nconsole.log(f(4, 7, 7, 1));\n```","options":["`TypeError`","`19`","`undefined`","`NaN`"],"answer":1,"explanation":"It logs `19`."},{"prompt":"What does this log?\n\n```js\nfunction f(a, ...rest) {\n  return rest.length;\n}\nconsole.log(f(...[9, 9, 6, 4]));\n```","options":["`undefined`","`3`","`TypeError`","`NaN`"],"answer":1,"explanation":"It logs `3`."},{"prompt":"What does this log?\n\n```js\nconst a = [3, 5];\nconst b = [...a, ...a];\nconsole.log(b.length, b);\n```","options":["`NaN`","`4 [ 3, 5, 3, 5 ]`","`undefined`","`3 [ [ 3, 5 ], 3, 5 ]`"],"answer":1,"explanation":"It logs `4 [ 3, 5, 3, 5 ]`."},{"prompt":"What does this log?\n\n```js\nconst xs = [5, 8, 6, 5];\nconsole.log(Math.max(...xs), Math.max(xs));\n```","options":["`undefined`","`NaN NaN`","`NaN`","`8 NaN`"],"answer":3,"explanation":"It logs `8 NaN`."}]
---
# Predict the Output: Spread and rest #12

Rest parameters collect the remaining arguments into an array. Spread expands an array (or object) into individual items.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
