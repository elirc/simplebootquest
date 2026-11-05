---
slug: "js-predict-typeof-24"
title: "Predict the Output: typeof #24"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(typeof 10n, typeof null, typeof new Date());\n```","options":["`bigint object object`","`bigint null object`","`TypeError`","`string string string`"],"answer":0,"explanation":"It logs `bigint object object`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof {}, typeof null, typeof 10n);\n```","options":["`string string string`","`object object bigint`","`object null bigint`","`TypeError`"],"answer":1,"explanation":"It logs `object object bigint`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof new Date(), typeof () => {}, typeof {});\n```","options":["`string string string`","`TypeError`","`SyntaxError`","`SyntaxError: Malformed arrow function parameter list`"],"answer":3,"explanation":"It logs `SyntaxError: Malformed arrow function parameter list`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof new Date(), typeof [], typeof 5);\n```","options":["`TypeError`","`string string string`","`object object number`","`object array number`"],"answer":2,"explanation":"It logs `object object number`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof [], typeof Symbol(\"x\"), typeof true);\n```","options":["`string string string`","`object symbol boolean`","`TypeError`","`array symbol boolean`"],"answer":1,"explanation":"It logs `object symbol boolean`."}]
---
# Predict the Output: typeof #24

`typeof` returns a string. Famous quirks: `typeof null` is `"object"`, arrays are `"object"` (use `Array.isArray`), and `typeof NaN` is `"number"`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
