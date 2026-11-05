---
slug: "async-predict-spread-rest-9"
title: "Predict the Output: Spread and rest #9"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nfunction f(...args) {\n  return args.reduce((s, x) => s + x, 0);\n}\nconsole.log(f(9, 9, 7, 8));\n```","options":["`TypeError`","`undefined`","`33`","`NaN`"],"answer":2,"explanation":"It logs `33`."},{"prompt":"What does this log?\n\n```js\nfunction f(a, ...rest) {\n  return rest.length;\n}\nconsole.log(f(...[8, 9, 2, 6]));\n```","options":["`undefined`","`NaN`","`TypeError`","`3`"],"answer":3,"explanation":"It logs `3`."},{"prompt":"What does this log?\n\n```js\nconst xs = [2, 6, 6, 1];\nconsole.log(Math.max(...xs), Math.max(xs));\n```","options":["`NaN`","`NaN NaN`","`6 NaN`","`undefined`"],"answer":2,"explanation":"It logs `6 NaN`."},{"prompt":"What does this log?\n\n```js\nfunction f(...args) {\n  return args.reduce((s, x) => s + x, 0);\n}\nconsole.log(f(4, 8, 6, 9));\n```","options":["`undefined`","`27`","`TypeError`","`NaN`"],"answer":1,"explanation":"It logs `27`."},{"prompt":"What does this log?\n\n```js\nfunction f(a, ...rest) {\n  return rest.length;\n}\nconsole.log(f(...[6, 2, 6, 3]));\n```","options":["`TypeError`","`NaN`","`undefined`","`3`"],"answer":3,"explanation":"It logs `3`."}]
---
# Predict the Output: Spread and rest #9

Rest parameters collect the remaining arguments into an array. Spread expands an array (or object) into individual items.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
