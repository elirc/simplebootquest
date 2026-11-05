---
slug: "async-predict-spread-rest-22"
title: "Predict the Output: Spread and rest #22"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst xs = [7, 8, 6, 9];\nconsole.log(Math.max(...xs), Math.max(xs));\n```","options":["`9 NaN`","`NaN NaN`","`undefined`","`NaN`"],"answer":0,"explanation":"It logs `9 NaN`."},{"prompt":"What does this log?\n\n```js\nconst xs = [4, 8, 6, 7];\nconsole.log(Math.max(...xs), Math.max(xs));\n```","options":["`NaN NaN`","`undefined`","`8 NaN`","`NaN`"],"answer":2,"explanation":"It logs `8 NaN`."},{"prompt":"What does this log?\n\n```js\nconst xs = [2, 1, 9, 4];\nconsole.log(Math.max(...xs), Math.max(xs));\n```","options":["`NaN NaN`","`undefined`","`NaN`","`9 NaN`"],"answer":3,"explanation":"It logs `9 NaN`."},{"prompt":"What does this log?\n\n```js\nconst a = [7, 7];\nconst b = [...a, ...a];\nconsole.log(b.length, b);\n```","options":["`4 [ 7, 7, 7, 7 ]`","`undefined`","`NaN`","`3 [ [ 7, 7 ], 7, 7 ]`"],"answer":0,"explanation":"It logs `4 [ 7, 7, 7, 7 ]`."},{"prompt":"What does this log?\n\n```js\nconst [x, ...others] = \"promise\";\nconsole.log(x, others.length);\n```","options":["`NaN`","`p 6`","`undefined`","`p 1`"],"answer":1,"explanation":"It logs `p 6`."}]
---
# Predict the Output: Spread and rest #22

Rest parameters collect the remaining arguments into an array. Spread expands an array (or object) into individual items.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
