---
slug: "js-predict-typeof-19"
title: "Predict the Output: typeof #19"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(typeof new Date(), typeof 10n, typeof null);\n```","options":["`object bigint object`","`TypeError`","`object bigint null`","`string string string`"],"answer":0,"explanation":"It logs `object bigint object`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof [], typeof {}, typeof new Date());\n```","options":["`object object object`","`TypeError`","`array object object`","`string string string`"],"answer":0,"explanation":"It logs `object object object`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof () => {}, typeof null, typeof true);\n```","options":["`SyntaxError`","`SyntaxError: Malformed arrow function parameter list`","`TypeError`","`string string string`"],"answer":1,"explanation":"It logs `SyntaxError: Malformed arrow function parameter list`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof new Date(), typeof [], typeof true);\n```","options":["`string string string`","`object array boolean`","`object object boolean`","`TypeError`"],"answer":2,"explanation":"It logs `object object boolean`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof undefined, typeof [], typeof true);\n```","options":["`undefined array boolean`","`TypeError`","`string string string`","`undefined object boolean`"],"answer":3,"explanation":"It logs `undefined object boolean`."}]
---
# Predict the Output: typeof #19

`typeof` returns a string. Famous quirks: `typeof null` is `"object"`, arrays are `"object"` (use `Array.isArray`), and `typeof NaN` is `"number"`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
