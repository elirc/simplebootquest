---
slug: "async-predict-spread-rest-11"
title: "Predict the Output: Spread and rest #11"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nfunction f(...args) {\n  return args.reduce((s, x) => s + x, 0);\n}\nconsole.log(f(4, 4, 8, 3));\n```","options":["`TypeError`","`19`","`NaN`","`undefined`"],"answer":1,"explanation":"It logs `19`."},{"prompt":"What does this log?\n\n```js\nfunction f(a, ...rest) {\n  return rest.length;\n}\nconsole.log(f(...[4, 7, 9, 5]));\n```","options":["`NaN`","`TypeError`","`3`","`undefined`"],"answer":2,"explanation":"It logs `3`."},{"prompt":"What does this log?\n\n```js\nfunction f(...args) {\n  return args.reduce((s, x) => s + x, 0);\n}\nconsole.log(f(1, 7, 2, 3));\n```","options":["`undefined`","`NaN`","`TypeError`","`13`"],"answer":3,"explanation":"It logs `13`."},{"prompt":"What does this log?\n\n```js\nconst [x, ...others] = \"variable\";\nconsole.log(x, others.length);\n```","options":["`v 7`","`v 1`","`NaN`","`undefined`"],"answer":0,"explanation":"It logs `v 7`."},{"prompt":"What does this log?\n\n```js\nconst xs = [8, 2, 8, 4];\nconsole.log(Math.max(...xs), Math.max(xs));\n```","options":["`NaN`","`8 NaN`","`undefined`","`NaN NaN`"],"answer":1,"explanation":"It logs `8 NaN`."}]
---
# Predict the Output: Spread and rest #11

Rest parameters collect the remaining arguments into an array. Spread expands an array (or object) into individual items.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
