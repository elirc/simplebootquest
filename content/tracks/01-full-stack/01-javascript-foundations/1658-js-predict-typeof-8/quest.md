---
slug: "js-predict-typeof-8"
title: "Predict the Output: typeof #8"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(typeof [], typeof NaN, typeof 5);\n```","options":["`array number number`","`object number number`","`string string string`","`TypeError`"],"answer":1,"explanation":"It logs `object number number`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof 5, typeof undefined, typeof () => {});\n```","options":["`TypeError`","`SyntaxError: Malformed arrow function parameter list`","`string string string`","`SyntaxError`"],"answer":1,"explanation":"It logs `SyntaxError: Malformed arrow function parameter list`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof null, typeof {}, typeof 10n);\n```","options":["`null object bigint`","`TypeError`","`string string string`","`object object bigint`"],"answer":3,"explanation":"It logs `object object bigint`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof new Date(), typeof undefined, typeof []);\n```","options":["`object undefined object`","`string string string`","`TypeError`","`object undefined array`"],"answer":0,"explanation":"It logs `object undefined object`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof \"5\", typeof true, typeof []);\n```","options":["`string boolean object`","`string boolean array`","`TypeError`","`string string string`"],"answer":0,"explanation":"It logs `string boolean object`."}]
---
# Predict the Output: typeof #8

`typeof` returns a string. Famous quirks: `typeof null` is `"object"`, arrays are `"object"` (use `Array.isArray`), and `typeof NaN` is `"number"`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
