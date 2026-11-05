---
slug: "async-predict-json-7"
title: "Predict the Output: JSON round trips #7"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(JSON.stringify({ b: 1, a: [4] }, null, 0));\n```","options":["`TypeError`","`undefined`","`{\"b\":1,\"a\":[4]}`","`object`"],"answer":2,"explanation":"It logs `{\"b\":1,\"a\":[4]}`."},{"prompt":"What does this log?\n\n```js\nconsole.log(JSON.stringify({ b: 1, a: [3] }, null, 0));\n```","options":["`object`","`{\"b\":1,\"a\":[3]}`","`undefined`","`TypeError`"],"answer":1,"explanation":"It logs `{\"b\":1,\"a\":[3]}`."},{"prompt":"What does this log?\n\n```js\nconsole.log(JSON.stringify([2, undefined, NaN]));\n```","options":["`[2,null,0]`","`undefined`","`[2,null,null]`","`object`"],"answer":2,"explanation":"It logs `[2,null,null]`."},{"prompt":"What does this log?\n\n```js\nconsole.log(JSON.parse(\"6\") + 1, JSON.parse('\"6\"') + 1);\n```","options":["`undefined`","`7 61`","`object`","`TypeError`"],"answer":1,"explanation":"It logs `7 61`."},{"prompt":"What does this log?\n\n```js\nconsole.log(JSON.stringify([7, undefined, NaN]));\n```","options":["`object`","`undefined`","`[7,null,0]`","`[7,null,null]`"],"answer":3,"explanation":"It logs `[7,null,null]`."}]
---
# Predict the Output: JSON round trips #7

`JSON.stringify` drops `undefined` and functions, turns `NaN` into `null`, and Dates into ISO strings. Parsing gives plain objects back.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
