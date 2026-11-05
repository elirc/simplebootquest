---
slug: "js-predict-typeof-12"
title: "Predict the Output: typeof #12"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(typeof true, typeof Symbol(\"x\"), typeof null);\n```","options":["`boolean symbol object`","`boolean symbol null`","`string string string`","`TypeError`"],"answer":0,"explanation":"It logs `boolean symbol object`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof null, typeof true, typeof \"5\");\n```","options":["`null boolean string`","`string string string`","`TypeError`","`object boolean string`"],"answer":3,"explanation":"It logs `object boolean string`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof \"5\", typeof [], typeof 10n);\n```","options":["`string object bigint`","`string string string`","`TypeError`","`string array bigint`"],"answer":0,"explanation":"It logs `string object bigint`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof new Date(), typeof [], typeof () => {});\n```","options":["`SyntaxError: Malformed arrow function parameter list`","`TypeError`","`string string string`","`SyntaxError`"],"answer":0,"explanation":"It logs `SyntaxError: Malformed arrow function parameter list`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof () => {}, typeof null, typeof undefined);\n```","options":["`string string string`","`TypeError`","`SyntaxError: Malformed arrow function parameter list`","`SyntaxError`"],"answer":2,"explanation":"It logs `SyntaxError: Malformed arrow function parameter list`."}]
---
# Predict the Output: typeof #12

`typeof` returns a string. Famous quirks: `typeof null` is `"object"`, arrays are `"object"` (use `Array.isArray`), and `typeof NaN` is `"number"`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
