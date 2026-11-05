---
slug: "async-predict-spread-rest-20"
title: "Predict the Output: Spread and rest #20"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst xs = [2, 7, 4, 2];\nconsole.log(Math.max(...xs), Math.max(xs));\n```","options":["`NaN NaN`","`undefined`","`NaN`","`7 NaN`"],"answer":3,"explanation":"It logs `7 NaN`."},{"prompt":"What does this log?\n\n```js\nconst [x, ...others] = \"database\";\nconsole.log(x, others.length);\n```","options":["`d 7`","`d 1`","`undefined`","`NaN`"],"answer":0,"explanation":"It logs `d 7`."},{"prompt":"What does this log?\n\n```js\nfunction f(...args) {\n  return args.reduce((s, x) => s + x, 0);\n}\nconsole.log(f(2, 2, 2, 6));\n```","options":["`undefined`","`TypeError`","`NaN`","`12`"],"answer":3,"explanation":"It logs `12`."},{"prompt":"What does this log?\n\n```js\nfunction f(a, ...rest) {\n  return rest.length;\n}\nconsole.log(f(...[8, 3, 2, 9]));\n```","options":["`NaN`","`undefined`","`3`","`TypeError`"],"answer":2,"explanation":"It logs `3`."},{"prompt":"What does this log?\n\n```js\nfunction f(a, ...rest) {\n  return rest.length;\n}\nconsole.log(f(...[5, 6, 7, 2]));\n```","options":["`NaN`","`undefined`","`TypeError`","`3`"],"answer":3,"explanation":"It logs `3`."}]
---
# Predict the Output: Spread and rest #20

Rest parameters collect the remaining arguments into an array. Spread expands an array (or object) into individual items.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
