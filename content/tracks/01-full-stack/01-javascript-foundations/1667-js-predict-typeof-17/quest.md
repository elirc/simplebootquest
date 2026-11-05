---
slug: "js-predict-typeof-17"
title: "Predict the Output: typeof #17"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(typeof () => {}, typeof 10n, typeof Symbol(\"x\"));\n```","options":["`TypeError`","`SyntaxError: Malformed arrow function parameter list`","`string string string`","`SyntaxError`"],"answer":1,"explanation":"It logs `SyntaxError: Malformed arrow function parameter list`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof Symbol(\"x\"), typeof 10n, typeof () => {});\n```","options":["`string string string`","`SyntaxError: Malformed arrow function parameter list`","`TypeError`","`SyntaxError`"],"answer":1,"explanation":"It logs `SyntaxError: Malformed arrow function parameter list`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof NaN, typeof null, typeof undefined);\n```","options":["`string string string`","`TypeError`","`number object undefined`","`number null undefined`"],"answer":2,"explanation":"It logs `number object undefined`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof true, typeof () => {}, typeof NaN);\n```","options":["`SyntaxError`","`string string string`","`TypeError`","`SyntaxError: Malformed arrow function parameter list`"],"answer":3,"explanation":"It logs `SyntaxError: Malformed arrow function parameter list`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof Symbol(\"x\"), typeof () => {}, typeof null);\n```","options":["`TypeError`","`SyntaxError: Malformed arrow function parameter list`","`SyntaxError`","`string string string`"],"answer":1,"explanation":"It logs `SyntaxError: Malformed arrow function parameter list`."}]
---
# Predict the Output: typeof #17

`typeof` returns a string. Famous quirks: `typeof null` is `"object"`, arrays are `"object"` (use `Array.isArray`), and `typeof NaN` is `"number"`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
