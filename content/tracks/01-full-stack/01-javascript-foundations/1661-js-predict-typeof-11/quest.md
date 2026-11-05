---
slug: "js-predict-typeof-11"
title: "Predict the Output: typeof #11"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(typeof 5, typeof null, typeof 10n);\n```","options":["`number object bigint`","`string string string`","`number null bigint`","`TypeError`"],"answer":0,"explanation":"It logs `number object bigint`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof 10n, typeof Symbol(\"x\"), typeof null);\n```","options":["`string string string`","`bigint symbol null`","`TypeError`","`bigint symbol object`"],"answer":3,"explanation":"It logs `bigint symbol object`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof new Date(), typeof () => {}, typeof \"5\");\n```","options":["`string string string`","`TypeError`","`SyntaxError: Malformed arrow function parameter list`","`SyntaxError`"],"answer":2,"explanation":"It logs `SyntaxError: Malformed arrow function parameter list`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof new Date(), typeof () => {}, typeof null);\n```","options":["`TypeError`","`string string string`","`SyntaxError: Malformed arrow function parameter list`","`SyntaxError`"],"answer":2,"explanation":"It logs `SyntaxError: Malformed arrow function parameter list`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof {}, typeof [], typeof true);\n```","options":["`TypeError`","`object object boolean`","`object array boolean`","`string string string`"],"answer":1,"explanation":"It logs `object object boolean`."}]
---
# Predict the Output: typeof #11

`typeof` returns a string. Famous quirks: `typeof null` is `"object"`, arrays are `"object"` (use `Array.isArray`), and `typeof NaN` is `"number"`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
