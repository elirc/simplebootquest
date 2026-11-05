---
slug: "js-predict-typeof-6"
title: "Predict the Output: typeof #6"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(typeof \"5\", typeof 10n, typeof null);\n```","options":["`string bigint null`","`string string string`","`string bigint object`","`TypeError`"],"answer":2,"explanation":"It logs `string bigint object`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof \"5\", typeof null, typeof new Date());\n```","options":["`string null object`","`string object object`","`string string string`","`TypeError`"],"answer":1,"explanation":"It logs `string object object`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof () => {}, typeof true, typeof null);\n```","options":["`TypeError`","`SyntaxError`","`string string string`","`SyntaxError: Malformed arrow function parameter list`"],"answer":3,"explanation":"It logs `SyntaxError: Malformed arrow function parameter list`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof 10n, typeof [], typeof 5);\n```","options":["`bigint object number`","`string string string`","`TypeError`","`bigint array number`"],"answer":0,"explanation":"It logs `bigint object number`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof () => {}, typeof NaN, typeof \"5\");\n```","options":["`TypeError`","`SyntaxError`","`string string string`","`SyntaxError: Malformed arrow function parameter list`"],"answer":3,"explanation":"It logs `SyntaxError: Malformed arrow function parameter list`."}]
---
# Predict the Output: typeof #6

`typeof` returns a string. Famous quirks: `typeof null` is `"object"`, arrays are `"object"` (use `Array.isArray`), and `typeof NaN` is `"number"`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
