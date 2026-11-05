---
slug: "async-predict-spread-rest-21"
title: "Predict the Output: Spread and rest #21"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nfunction f(a, ...rest) {\n  return rest.length;\n}\nconsole.log(f(...[5, 1, 2, 2]));\n```","options":["`NaN`","`undefined`","`TypeError`","`3`"],"answer":3,"explanation":"It logs `3`."},{"prompt":"What does this log?\n\n```js\nfunction f(...args) {\n  return args.reduce((s, x) => s + x, 0);\n}\nconsole.log(f(7, 9, 3, 6));\n```","options":["`25`","`undefined`","`NaN`","`TypeError`"],"answer":0,"explanation":"It logs `25`."},{"prompt":"What does this log?\n\n```js\nfunction f(...args) {\n  return args.reduce((s, x) => s + x, 0);\n}\nconsole.log(f(4, 8, 3, 5));\n```","options":["`undefined`","`NaN`","`TypeError`","`20`"],"answer":3,"explanation":"It logs `20`."},{"prompt":"What does this log?\n\n```js\nfunction f(a, ...rest) {\n  return rest.length;\n}\nconsole.log(f(...[6, 3, 2, 9]));\n```","options":["`TypeError`","`NaN`","`3`","`undefined`"],"answer":2,"explanation":"It logs `3`."},{"prompt":"What does this log?\n\n```js\nconst xs = [4, 5, 6, 6];\nconsole.log(Math.max(...xs), Math.max(xs));\n```","options":["`NaN NaN`","`NaN`","`undefined`","`6 NaN`"],"answer":3,"explanation":"It logs `6 NaN`."}]
---
# Predict the Output: Spread and rest #21

Rest parameters collect the remaining arguments into an array. Spread expands an array (or object) into individual items.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
