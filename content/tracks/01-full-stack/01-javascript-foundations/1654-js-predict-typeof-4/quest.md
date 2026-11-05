---
slug: "js-predict-typeof-4"
title: "Predict the Output: typeof #4"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(typeof [], typeof new Date(), typeof undefined);\n```","options":["`object object undefined`","`array object undefined`","`string string string`","`TypeError`"],"answer":0,"explanation":"It logs `object object undefined`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof undefined, typeof null, typeof \"5\");\n```","options":["`undefined null string`","`undefined object string`","`string string string`","`TypeError`"],"answer":1,"explanation":"It logs `undefined object string`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof NaN, typeof () => {}, typeof 5);\n```","options":["`SyntaxError: Malformed arrow function parameter list`","`TypeError`","`SyntaxError`","`string string string`"],"answer":0,"explanation":"It logs `SyntaxError: Malformed arrow function parameter list`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof 5, typeof NaN, typeof () => {});\n```","options":["`SyntaxError: Malformed arrow function parameter list`","`string string string`","`TypeError`","`SyntaxError`"],"answer":0,"explanation":"It logs `SyntaxError: Malformed arrow function parameter list`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof {}, typeof null, typeof true);\n```","options":["`object null boolean`","`string string string`","`TypeError`","`object object boolean`"],"answer":3,"explanation":"It logs `object object boolean`."}]
---
# Predict the Output: typeof #4

`typeof` returns a string. Famous quirks: `typeof null` is `"object"`, arrays are `"object"` (use `Array.isArray`), and `typeof NaN` is `"number"`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
