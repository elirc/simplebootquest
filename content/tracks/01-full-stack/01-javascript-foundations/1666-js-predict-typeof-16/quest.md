---
slug: "js-predict-typeof-16"
title: "Predict the Output: typeof #16"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(typeof new Date(), typeof () => {}, typeof true);\n```","options":["`SyntaxError`","`TypeError`","`SyntaxError: Malformed arrow function parameter list`","`string string string`"],"answer":2,"explanation":"It logs `SyntaxError: Malformed arrow function parameter list`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof [], typeof undefined, typeof new Date());\n```","options":["`TypeError`","`array undefined object`","`object undefined object`","`string string string`"],"answer":2,"explanation":"It logs `object undefined object`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof [], typeof new Date(), typeof null);\n```","options":["`object object null`","`array object object`","`object object object`","`string string string`"],"answer":2,"explanation":"It logs `object object object`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof 10n, typeof () => {}, typeof null);\n```","options":["`SyntaxError`","`SyntaxError: Malformed arrow function parameter list`","`TypeError`","`string string string`"],"answer":1,"explanation":"It logs `SyntaxError: Malformed arrow function parameter list`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof 5, typeof true, typeof () => {});\n```","options":["`TypeError`","`string string string`","`SyntaxError`","`SyntaxError: Malformed arrow function parameter list`"],"answer":3,"explanation":"It logs `SyntaxError: Malformed arrow function parameter list`."}]
---
# Predict the Output: typeof #16

`typeof` returns a string. Famous quirks: `typeof null` is `"object"`, arrays are `"object"` (use `Array.isArray`), and `typeof NaN` is `"number"`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
