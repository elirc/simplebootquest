---
slug: "js-predict-typeof-14"
title: "Predict the Output: typeof #14"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(typeof [], typeof null, typeof Symbol(\"x\"));\n```","options":["`object null symbol`","`object object symbol`","`string string string`","`array object symbol`"],"answer":1,"explanation":"It logs `object object symbol`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof NaN, typeof null, typeof Symbol(\"x\"));\n```","options":["`number null symbol`","`number object symbol`","`TypeError`","`string string string`"],"answer":1,"explanation":"It logs `number object symbol`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof new Date(), typeof {}, typeof null);\n```","options":["`TypeError`","`object object null`","`string string string`","`object object object`"],"answer":3,"explanation":"It logs `object object object`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof Symbol(\"x\"), typeof [], typeof true);\n```","options":["`TypeError`","`string string string`","`symbol array boolean`","`symbol object boolean`"],"answer":3,"explanation":"It logs `symbol object boolean`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof [], typeof 10n, typeof new Date());\n```","options":["`string string string`","`TypeError`","`array bigint object`","`object bigint object`"],"answer":3,"explanation":"It logs `object bigint object`."}]
---
# Predict the Output: typeof #14

`typeof` returns a string. Famous quirks: `typeof null` is `"object"`, arrays are `"object"` (use `Array.isArray`), and `typeof NaN` is `"number"`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
