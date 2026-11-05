---
slug: "async-predict-spread-rest-8"
title: "Predict the Output: Spread and rest #8"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst [x, ...others] = \"express\";\nconsole.log(x, others.length);\n```","options":["`undefined`","`e 1`","`e 6`","`NaN`"],"answer":2,"explanation":"It logs `e 6`."},{"prompt":"What does this log?\n\n```js\nconst a = [5, 1];\nconst b = [...a, ...a];\nconsole.log(b.length, b);\n```","options":["`3 [ [ 5, 1 ], 5, 1 ]`","`NaN`","`4 [ 5, 1, 5, 1 ]`","`undefined`"],"answer":2,"explanation":"It logs `4 [ 5, 1, 5, 1 ]`."},{"prompt":"What does this log?\n\n```js\nfunction f(a, ...rest) {\n  return rest.length;\n}\nconsole.log(f(...[1, 7, 2, 2]));\n```","options":["`TypeError`","`undefined`","`3`","`NaN`"],"answer":2,"explanation":"It logs `3`."},{"prompt":"What does this log?\n\n```js\nconst xs = [2, 7, 8, 3];\nconsole.log(Math.max(...xs), Math.max(xs));\n```","options":["`8 NaN`","`NaN NaN`","`NaN`","`undefined`"],"answer":0,"explanation":"It logs `8 NaN`."},{"prompt":"What does this log?\n\n```js\nfunction f(a, ...rest) {\n  return rest.length;\n}\nconsole.log(f(...[5, 2, 6, 1]));\n```","options":["`3`","`NaN`","`TypeError`","`undefined`"],"answer":0,"explanation":"It logs `3`."}]
---
# Predict the Output: Spread and rest #8

Rest parameters collect the remaining arguments into an array. Spread expands an array (or object) into individual items.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
