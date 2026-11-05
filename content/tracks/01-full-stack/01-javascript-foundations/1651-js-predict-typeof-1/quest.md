---
slug: "js-predict-typeof-1"
title: "Predict the Output: typeof #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(typeof \"5\", typeof 5, typeof []);\n```","options":["`string number array`","`TypeError`","`string string string`","`string number object`"],"answer":3,"explanation":"It logs `string number object`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof new Date(), typeof () => {}, typeof NaN);\n```","options":["`string string string`","`TypeError`","`SyntaxError: Malformed arrow function parameter list`","`SyntaxError`"],"answer":2,"explanation":"It logs `SyntaxError: Malformed arrow function parameter list`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof undefined, typeof 10n, typeof null);\n```","options":["`undefined bigint null`","`TypeError`","`string string string`","`undefined bigint object`"],"answer":3,"explanation":"It logs `undefined bigint object`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof new Date(), typeof null, typeof undefined);\n```","options":["`TypeError`","`object null undefined`","`string string string`","`object object undefined`"],"answer":3,"explanation":"It logs `object object undefined`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof NaN, typeof null, typeof () => {});\n```","options":["`SyntaxError: Malformed arrow function parameter list`","`SyntaxError`","`TypeError`","`string string string`"],"answer":0,"explanation":"It logs `SyntaxError: Malformed arrow function parameter list`."}]
---
# Predict the Output: typeof #1

`typeof` returns a string. Famous quirks: `typeof null` is `"object"`, arrays are `"object"` (use `Array.isArray`), and `typeof NaN` is `"number"`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
