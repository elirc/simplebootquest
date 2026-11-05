---
slug: "async-predict-spread-rest-4"
title: "Predict the Output: Spread and rest #4"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst [x, ...others] = \"closure\";\nconsole.log(x, others.length);\n```","options":["`c 1`","`undefined`","`NaN`","`c 6`"],"answer":3,"explanation":"It logs `c 6`."},{"prompt":"What does this log?\n\n```js\nfunction f(a, ...rest) {\n  return rest.length;\n}\nconsole.log(f(...[3, 7, 8, 5]));\n```","options":["`TypeError`","`3`","`NaN`","`undefined`"],"answer":1,"explanation":"It logs `3`."},{"prompt":"What does this log?\n\n```js\nconst [x, ...others] = \"postgres\";\nconsole.log(x, others.length);\n```","options":["`undefined`","`p 1`","`p 7`","`NaN`"],"answer":2,"explanation":"It logs `p 7`."},{"prompt":"What does this log?\n\n```js\nfunction f(...args) {\n  return args.reduce((s, x) => s + x, 0);\n}\nconsole.log(f(5, 9, 7, 2));\n```","options":["`23`","`NaN`","`undefined`","`TypeError`"],"answer":0,"explanation":"It logs `23`."},{"prompt":"What does this log?\n\n```js\nfunction f(a, ...rest) {\n  return rest.length;\n}\nconsole.log(f(...[4, 5, 5, 5]));\n```","options":["`undefined`","`3`","`NaN`","`TypeError`"],"answer":1,"explanation":"It logs `3`."}]
---
# Predict the Output: Spread and rest #4

Rest parameters collect the remaining arguments into an array. Spread expands an array (or object) into individual items.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
