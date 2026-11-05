---
slug: "async-predict-spread-rest-14"
title: "Predict the Output: Spread and rest #14"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconst xs = [5, 8, 8, 5];\nconsole.log(Math.max(...xs), Math.max(xs));\n```","options":["`NaN NaN`","`undefined`","`NaN`","`8 NaN`"],"answer":3,"explanation":"It logs `8 NaN`."},{"prompt":"What does this log?\n\n```js\nconst xs = [8, 5, 7, 8];\nconsole.log(Math.max(...xs), Math.max(xs));\n```","options":["`8 NaN`","`undefined`","`NaN`","`NaN NaN`"],"answer":0,"explanation":"It logs `8 NaN`."},{"prompt":"What does this log?\n\n```js\nconst [x, ...others] = \"react\";\nconsole.log(x, others.length);\n```","options":["`undefined`","`NaN`","`r 4`","`r 1`"],"answer":2,"explanation":"It logs `r 4`."},{"prompt":"What does this log?\n\n```js\nconst xs = [8, 5, 5, 2];\nconsole.log(Math.max(...xs), Math.max(xs));\n```","options":["`NaN`","`8 NaN`","`undefined`","`NaN NaN`"],"answer":1,"explanation":"It logs `8 NaN`."},{"prompt":"What does this log?\n\n```js\nconst xs = [8, 8, 2, 7];\nconsole.log(Math.max(...xs), Math.max(xs));\n```","options":["`undefined`","`NaN`","`NaN NaN`","`8 NaN`"],"answer":3,"explanation":"It logs `8 NaN`."}]
---
# Predict the Output: Spread and rest #14

Rest parameters collect the remaining arguments into an array. Spread expands an array (or object) into individual items.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
