---
slug: "async-predict-json-5"
title: "Predict the Output: JSON round trips #5"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(JSON.parse(\"9\") + 1, JSON.parse('\"9\"') + 1);\n```","options":["`TypeError`","`object`","`10 91`","`undefined`"],"answer":2,"explanation":"It logs `10 91`."},{"prompt":"What does this log?\n\n```js\nconsole.log(JSON.stringify({ b: 1, a: [1] }, null, 0));\n```","options":["`undefined`","`TypeError`","`{\"b\":1,\"a\":[1]}`","`object`"],"answer":2,"explanation":"It logs `{\"b\":1,\"a\":[1]}`."},{"prompt":"What does this log?\n\n```js\nconsole.log(JSON.stringify({ a: 2, b: undefined, c: () => 1 }));\n```","options":["`object`","`{\"a\":2,\"b\":null}`","`undefined`","`{\"a\":2}`"],"answer":3,"explanation":"It logs `{\"a\":2}`."},{"prompt":"What does this log?\n\n```js\nconsole.log(JSON.parse(\"3\") + 1, JSON.parse('\"3\"') + 1);\n```","options":["`object`","`4 31`","`TypeError`","`undefined`"],"answer":1,"explanation":"It logs `4 31`."},{"prompt":"What does this log?\n\n```js\nconsole.log(JSON.stringify({ b: 1, a: [6] }, null, 0));\n```","options":["`{\"b\":1,\"a\":[6]}`","`object`","`TypeError`","`undefined`"],"answer":0,"explanation":"It logs `{\"b\":1,\"a\":[6]}`."}]
---
# Predict the Output: JSON round trips #5

`JSON.stringify` drops `undefined` and functions, turns `NaN` into `null`, and Dates into ISO strings. Parsing gives plain objects back.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
