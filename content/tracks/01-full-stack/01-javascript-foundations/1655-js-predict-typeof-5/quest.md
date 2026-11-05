---
slug: "js-predict-typeof-5"
title: "Predict the Output: typeof #5"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(typeof {}, typeof () => {}, typeof 10n);\n```","options":["`SyntaxError`","`SyntaxError: Malformed arrow function parameter list`","`TypeError`","`string string string`"],"answer":1,"explanation":"It logs `SyntaxError: Malformed arrow function parameter list`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof null, typeof undefined, typeof 5);\n```","options":["`null undefined number`","`object undefined number`","`string string string`","`TypeError`"],"answer":1,"explanation":"It logs `object undefined number`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof null, typeof NaN, typeof undefined);\n```","options":["`null number undefined`","`TypeError`","`object number undefined`","`string string string`"],"answer":2,"explanation":"It logs `object number undefined`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof () => {}, typeof Symbol(\"x\"), typeof NaN);\n```","options":["`SyntaxError: Malformed arrow function parameter list`","`SyntaxError`","`string string string`","`TypeError`"],"answer":0,"explanation":"It logs `SyntaxError: Malformed arrow function parameter list`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof \"5\", typeof 5, typeof () => {});\n```","options":["`string string string`","`SyntaxError: Malformed arrow function parameter list`","`SyntaxError`","`TypeError`"],"answer":1,"explanation":"It logs `SyntaxError: Malformed arrow function parameter list`."}]
---
# Predict the Output: typeof #5

`typeof` returns a string. Famous quirks: `typeof null` is `"object"`, arrays are `"object"` (use `Array.isArray`), and `typeof NaN` is `"number"`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
