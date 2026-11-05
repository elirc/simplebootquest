---
slug: "js-predict-typeof-15"
title: "Predict the Output: typeof #15"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(typeof 10n, typeof () => {}, typeof undefined);\n```","options":["`TypeError`","`string string string`","`SyntaxError`","`SyntaxError: Malformed arrow function parameter list`"],"answer":3,"explanation":"It logs `SyntaxError: Malformed arrow function parameter list`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof null, typeof \"5\", typeof NaN);\n```","options":["`TypeError`","`null string number`","`string string string`","`object string number`"],"answer":3,"explanation":"It logs `object string number`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof NaN, typeof Symbol(\"x\"), typeof () => {});\n```","options":["`SyntaxError`","`TypeError`","`string string string`","`SyntaxError: Malformed arrow function parameter list`"],"answer":3,"explanation":"It logs `SyntaxError: Malformed arrow function parameter list`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof null, typeof new Date(), typeof Symbol(\"x\"));\n```","options":["`null object symbol`","`object object symbol`","`string string string`","`TypeError`"],"answer":1,"explanation":"It logs `object object symbol`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof true, typeof new Date(), typeof null);\n```","options":["`TypeError`","`boolean object null`","`boolean object object`","`string string string`"],"answer":2,"explanation":"It logs `boolean object object`."}]
---
# Predict the Output: typeof #15

`typeof` returns a string. Famous quirks: `typeof null` is `"object"`, arrays are `"object"` (use `Array.isArray`), and `typeof NaN` is `"number"`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
