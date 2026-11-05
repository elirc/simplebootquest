---
slug: "async-predict-spread-rest-18"
title: "Predict the Output: Spread and rest #18"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst xs = [2, 4, 6, 2];\nconsole.log(Math.max(...xs), Math.max(xs));\n```","options":["`undefined`","`6 NaN`","`NaN`","`NaN NaN`"],"answer":1,"explanation":"It logs `6 NaN`."},{"prompt":"What does this log?\n\n```js\nfunction f(...args) {\n  return args.reduce((s, x) => s + x, 0);\n}\nconsole.log(f(3, 3, 2, 8));\n```","options":["`16`","`undefined`","`NaN`","`TypeError`"],"answer":0,"explanation":"It logs `16`."},{"prompt":"What does this log?\n\n```js\nconst a = [8, 1];\nconst b = [...a, ...a];\nconsole.log(b.length, b);\n```","options":["`undefined`","`NaN`","`3 [ [ 8, 1 ], 8, 1 ]`","`4 [ 8, 1, 8, 1 ]`"],"answer":3,"explanation":"It logs `4 [ 8, 1, 8, 1 ]`."},{"prompt":"What does this log?\n\n```js\nfunction f(a, ...rest) {\n  return rest.length;\n}\nconsole.log(f(...[1, 3, 9, 9]));\n```","options":["`TypeError`","`3`","`undefined`","`NaN`"],"answer":1,"explanation":"It logs `3`."},{"prompt":"What does this log?\n\n```js\nconst [x, ...others] = \"javascript\";\nconsole.log(x, others.length);\n```","options":["`j 1`","`j 9`","`undefined`","`NaN`"],"answer":1,"explanation":"It logs `j 9`."}]
---
# Predict the Output: Spread and rest #18

Rest parameters collect the remaining arguments into an array. Spread expands an array (or object) into individual items.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
