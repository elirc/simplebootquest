---
slug: "async-predict-json-6"
title: "Predict the Output: JSON round trips #6"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(JSON.stringify({ b: 1, a: [2] }, null, 0));\n```","options":["`object`","`{\"b\":1,\"a\":[2]}`","`undefined`","`TypeError`"],"answer":1,"explanation":"It logs `{\"b\":1,\"a\":[2]}`."},{"prompt":"What does this log?\n\n```js\nconsole.log(JSON.stringify({ a: 9, b: undefined, c: () => 1 }));\n```","options":["`{\"a\":9}`","`object`","`undefined`","`{\"a\":9,\"b\":null}`"],"answer":0,"explanation":"It logs `{\"a\":9}`."},{"prompt":"What does this log?\n\n```js\nconsole.log(JSON.stringify([8, undefined, NaN]));\n```","options":["`undefined`","`object`","`[8,null,0]`","`[8,null,null]`"],"answer":3,"explanation":"It logs `[8,null,null]`."},{"prompt":"What does this log?\n\n```js\nconsole.log(JSON.parse(\"7\") + 1, JSON.parse('\"7\"') + 1);\n```","options":["`object`","`undefined`","`8 71`","`TypeError`"],"answer":2,"explanation":"It logs `8 71`."},{"prompt":"What does this log?\n\n```js\nconsole.log(JSON.parse(\"2\") + 1, JSON.parse('\"2\"') + 1);\n```","options":["`object`","`undefined`","`TypeError`","`3 21`"],"answer":3,"explanation":"It logs `3 21`."}]
---
# Predict the Output: JSON round trips #6

`JSON.stringify` drops `undefined` and functions, turns `NaN` into `null`, and Dates into ISO strings. Parsing gives plain objects back.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
