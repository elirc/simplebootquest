---
slug: "async-predict-spread-rest-5"
title: "Predict the Output: Spread and rest #5"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst a = [5, 2];\nconst b = [...a, ...a];\nconsole.log(b.length, b);\n```","options":["`3 [ [ 5, 2 ], 5, 2 ]`","`undefined`","`NaN`","`4 [ 5, 2, 5, 2 ]`"],"answer":3,"explanation":"It logs `4 [ 5, 2, 5, 2 ]`."},{"prompt":"What does this log?\n\n```js\nfunction f(...args) {\n  return args.reduce((s, x) => s + x, 0);\n}\nconsole.log(f(6, 1, 9, 7));\n```","options":["`TypeError`","`NaN`","`undefined`","`23`"],"answer":3,"explanation":"It logs `23`."},{"prompt":"What does this log?\n\n```js\nconst [x, ...others] = \"frontend\";\nconsole.log(x, others.length);\n```","options":["`f 1`","`NaN`","`undefined`","`f 7`"],"answer":3,"explanation":"It logs `f 7`."},{"prompt":"What does this log?\n\n```js\nconst [x, ...others] = \"network\";\nconsole.log(x, others.length);\n```","options":["`undefined`","`NaN`","`n 6`","`n 1`"],"answer":2,"explanation":"It logs `n 6`."},{"prompt":"What does this log?\n\n```js\nfunction f(a, ...rest) {\n  return rest.length;\n}\nconsole.log(f(...[4, 6, 6, 5]));\n```","options":["`undefined`","`TypeError`","`3`","`NaN`"],"answer":2,"explanation":"It logs `3`."}]
---
# Predict the Output: Spread and rest #5

Rest parameters collect the remaining arguments into an array. Spread expands an array (or object) into individual items.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
