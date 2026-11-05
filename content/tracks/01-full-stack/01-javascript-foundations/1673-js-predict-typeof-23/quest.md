---
slug: "js-predict-typeof-23"
title: "Predict the Output: typeof #23"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(typeof null, typeof [], typeof true);\n```","options":["`null object boolean`","`object object boolean`","`object array boolean`","`string string string`"],"answer":1,"explanation":"It logs `object object boolean`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof new Date(), typeof 5, typeof () => {});\n```","options":["`SyntaxError: Malformed arrow function parameter list`","`TypeError`","`string string string`","`SyntaxError`"],"answer":0,"explanation":"It logs `SyntaxError: Malformed arrow function parameter list`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof 10n, typeof undefined, typeof []);\n```","options":["`bigint undefined array`","`TypeError`","`bigint undefined object`","`string string string`"],"answer":2,"explanation":"It logs `bigint undefined object`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof NaN, typeof [], typeof () => {});\n```","options":["`SyntaxError`","`SyntaxError: Malformed arrow function parameter list`","`string string string`","`TypeError`"],"answer":1,"explanation":"It logs `SyntaxError: Malformed arrow function parameter list`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof [], typeof () => {}, typeof 5);\n```","options":["`TypeError`","`string string string`","`SyntaxError`","`SyntaxError: Malformed arrow function parameter list`"],"answer":3,"explanation":"It logs `SyntaxError: Malformed arrow function parameter list`."}]
---
# Predict the Output: typeof #23

`typeof` returns a string. Famous quirks: `typeof null` is `"object"`, arrays are `"object"` (use `Array.isArray`), and `typeof NaN` is `"number"`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
