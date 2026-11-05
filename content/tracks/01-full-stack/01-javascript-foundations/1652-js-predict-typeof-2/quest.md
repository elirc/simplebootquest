---
slug: "js-predict-typeof-2"
title: "Predict the Output: typeof #2"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(typeof NaN, typeof null, typeof \"5\");\n```","options":["`string string string`","`number null string`","`number object string`","`TypeError`"],"answer":2,"explanation":"It logs `number object string`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof 10n, typeof () => {}, typeof \"5\");\n```","options":["`TypeError`","`SyntaxError`","`SyntaxError: Malformed arrow function parameter list`","`string string string`"],"answer":2,"explanation":"It logs `SyntaxError: Malformed arrow function parameter list`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof NaN, typeof null, typeof true);\n```","options":["`number null boolean`","`number object boolean`","`TypeError`","`string string string`"],"answer":1,"explanation":"It logs `number object boolean`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof null, typeof [], typeof \"5\");\n```","options":["`object array string`","`null object string`","`string string string`","`object object string`"],"answer":3,"explanation":"It logs `object object string`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof undefined, typeof null, typeof 5);\n```","options":["`undefined null number`","`TypeError`","`undefined object number`","`string string string`"],"answer":2,"explanation":"It logs `undefined object number`."}]
---
# Predict the Output: typeof #2

`typeof` returns a string. Famous quirks: `typeof null` is `"object"`, arrays are `"object"` (use `Array.isArray`), and `typeof NaN` is `"number"`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
