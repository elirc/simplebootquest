---
slug: "async-predict-json-2"
title: "Predict the Output: JSON round trips #2"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(JSON.stringify({ b: 1, a: [8] }, null, 0));\n```","options":["`undefined`","`{\"b\":1,\"a\":[8]}`","`TypeError`","`object`"],"answer":1,"explanation":"It logs `{\"b\":1,\"a\":[8]}`."},{"prompt":"What does this log?\n\n```js\nconst copy = JSON.parse(JSON.stringify({ when: new Date(0) }));\nconsole.log(typeof copy.when);\n```","options":["`TypeError`","`object`","`string`","`undefined`"],"answer":2,"explanation":"It logs `string`."},{"prompt":"What does this log?\n\n```js\nconsole.log(JSON.stringify({ b: 1, a: [7] }, null, 0));\n```","options":["`object`","`undefined`","`TypeError`","`{\"b\":1,\"a\":[7]}`"],"answer":3,"explanation":"It logs `{\"b\":1,\"a\":[7]}`."},{"prompt":"What does this log?\n\n```js\nconsole.log(JSON.stringify({ a: 5, b: undefined, c: () => 1 }));\n```","options":["`{\"a\":5,\"b\":null}`","`undefined`","`object`","`{\"a\":5}`"],"answer":3,"explanation":"It logs `{\"a\":5}`."},{"prompt":"What does this log?\n\n```js\nconsole.log(JSON.stringify({ a: 7, b: undefined, c: () => 1 }));\n```","options":["`undefined`","`{\"a\":7,\"b\":null}`","`object`","`{\"a\":7}`"],"answer":3,"explanation":"It logs `{\"a\":7}`."}]
---
# Predict the Output: JSON round trips #2

`JSON.stringify` drops `undefined` and functions, turns `NaN` into `null`, and Dates into ISO strings. Parsing gives plain objects back.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
