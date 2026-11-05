---
slug: "async-predict-spread-rest-15"
title: "Predict the Output: Spread and rest #15"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nfunction f(...args) {\n  return args.reduce((s, x) => s + x, 0);\n}\nconsole.log(f(4, 2, 1, 9));\n```","options":["`NaN`","`TypeError`","`16`","`undefined`"],"answer":2,"explanation":"It logs `16`."},{"prompt":"What does this log?\n\n```js\nfunction f(...args) {\n  return args.reduce((s, x) => s + x, 0);\n}\nconsole.log(f(6, 3, 4, 1));\n```","options":["`14`","`TypeError`","`NaN`","`undefined`"],"answer":0,"explanation":"It logs `14`."},{"prompt":"What does this log?\n\n```js\nconst a = [4, 3];\nconst b = [...a, ...a];\nconsole.log(b.length, b);\n```","options":["`3 [ [ 4, 3 ], 4, 3 ]`","`4 [ 4, 3, 4, 3 ]`","`NaN`","`undefined`"],"answer":1,"explanation":"It logs `4 [ 4, 3, 4, 3 ]`."},{"prompt":"What does this log?\n\n```js\nfunction f(...args) {\n  return args.reduce((s, x) => s + x, 0);\n}\nconsole.log(f(8, 3, 3, 1));\n```","options":["`TypeError`","`15`","`NaN`","`undefined`"],"answer":1,"explanation":"It logs `15`."},{"prompt":"What does this log?\n\n```js\nfunction f(...args) {\n  return args.reduce((s, x) => s + x, 0);\n}\nconsole.log(f(5, 6, 8, 9));\n```","options":["`TypeError`","`28`","`NaN`","`undefined`"],"answer":1,"explanation":"It logs `28`."}]
---
# Predict the Output: Spread and rest #15

Rest parameters collect the remaining arguments into an array. Spread expands an array (or object) into individual items.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
