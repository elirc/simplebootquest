---
slug: "async-predict-json-4"
title: "Predict the Output: JSON round trips #4"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(JSON.parse(\"5\") + 1, JSON.parse('\"5\"') + 1);\n```","options":["`object`","`undefined`","`TypeError`","`6 51`"],"answer":3,"explanation":"It logs `6 51`."},{"prompt":"What does this log?\n\n```js\nconsole.log(JSON.stringify([1, undefined, NaN]));\n```","options":["`[1,null,0]`","`undefined`","`object`","`[1,null,null]`"],"answer":3,"explanation":"It logs `[1,null,null]`."},{"prompt":"What does this log?\n\n```js\nconsole.log(JSON.stringify({ a: 1, b: undefined, c: () => 1 }));\n```","options":["`{\"a\":1}`","`{\"a\":1,\"b\":null}`","`object`","`undefined`"],"answer":0,"explanation":"It logs `{\"a\":1}`."},{"prompt":"What does this log?\n\n```js\nconsole.log(JSON.stringify({ a: 3, b: undefined, c: () => 1 }));\n```","options":["`{\"a\":3,\"b\":null}`","`undefined`","`{\"a\":3}`","`object`"],"answer":2,"explanation":"It logs `{\"a\":3}`."},{"prompt":"What does this log?\n\n```js\nconsole.log(JSON.stringify([4, undefined, NaN]));\n```","options":["`undefined`","`object`","`[4,null,null]`","`[4,null,0]`"],"answer":2,"explanation":"It logs `[4,null,null]`."}]
---
# Predict the Output: JSON round trips #4

`JSON.stringify` drops `undefined` and functions, turns `NaN` into `null`, and Dates into ISO strings. Parsing gives plain objects back.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
