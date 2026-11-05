---
slug: "async-predict-json-3"
title: "Predict the Output: JSON round trips #3"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(JSON.stringify({ a: 8, b: undefined, c: () => 1 }));\n```","options":["`object`","`undefined`","`{\"a\":8,\"b\":null}`","`{\"a\":8}`"],"answer":3,"explanation":"It logs `{\"a\":8}`."},{"prompt":"What does this log?\n\n```js\nconsole.log(JSON.parse(\"8\") + 1, JSON.parse('\"8\"') + 1);\n```","options":["`undefined`","`object`","`TypeError`","`9 81`"],"answer":3,"explanation":"It logs `9 81`."},{"prompt":"What does this log?\n\n```js\nconsole.log(JSON.parse(\"4\") + 1, JSON.parse('\"4\"') + 1);\n```","options":["`undefined`","`5 41`","`object`","`TypeError`"],"answer":1,"explanation":"It logs `5 41`."},{"prompt":"What does this log?\n\n```js\nconsole.log(JSON.stringify({ b: 1, a: [5] }, null, 0));\n```","options":["`object`","`undefined`","`TypeError`","`{\"b\":1,\"a\":[5]}`"],"answer":3,"explanation":"It logs `{\"b\":1,\"a\":[5]}`."},{"prompt":"What does this log?\n\n```js\nconsole.log(JSON.stringify({ a: 4, b: undefined, c: () => 1 }));\n```","options":["`object`","`{\"a\":4,\"b\":null}`","`undefined`","`{\"a\":4}`"],"answer":3,"explanation":"It logs `{\"a\":4}`."}]
---
# Predict the Output: JSON round trips #3

`JSON.stringify` drops `undefined` and functions, turns `NaN` into `null`, and Dates into ISO strings. Parsing gives plain objects back.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
