---
slug: "async-predict-json-1"
title: "Predict the Output: JSON round trips #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(JSON.stringify([3, undefined, NaN]));\n```","options":["`object`","`undefined`","`[3,null,0]`","`[3,null,null]`"],"answer":3,"explanation":"It logs `[3,null,null]`."},{"prompt":"What does this log?\n\n```js\nconsole.log(JSON.stringify({ b: 1, a: [9] }, null, 0));\n```","options":["`{\"b\":1,\"a\":[9]}`","`TypeError`","`object`","`undefined`"],"answer":0,"explanation":"It logs `{\"b\":1,\"a\":[9]}`."},{"prompt":"What does this log?\n\n```js\nconsole.log(JSON.stringify([6, undefined, NaN]));\n```","options":["`[6,null,0]`","`[6,null,null]`","`undefined`","`object`"],"answer":1,"explanation":"It logs `[6,null,null]`."},{"prompt":"What does this log?\n\n```js\nconsole.log(JSON.stringify([9, undefined, NaN]));\n```","options":["`object`","`[9,null,null]`","`undefined`","`[9,null,0]`"],"answer":1,"explanation":"It logs `[9,null,null]`."},{"prompt":"What does this log?\n\n```js\nconsole.log(JSON.stringify([5, undefined, NaN]));\n```","options":["`undefined`","`[5,null,0]`","`[5,null,null]`","`object`"],"answer":2,"explanation":"It logs `[5,null,null]`."}]
---
# Predict the Output: JSON round trips #1

`JSON.stringify` drops `undefined` and functions, turns `NaN` into `null`, and Dates into ISO strings. Parsing gives plain objects back.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
