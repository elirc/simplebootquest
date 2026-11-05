---
slug: "js-predict-typeof-7"
title: "Predict the Output: typeof #7"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(typeof () => {}, typeof {}, typeof 10n);\n```","options":["`TypeError`","`SyntaxError`","`SyntaxError: Malformed arrow function parameter list`","`string string string`"],"answer":2,"explanation":"It logs `SyntaxError: Malformed arrow function parameter list`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof \"5\", typeof {}, typeof () => {});\n```","options":["`SyntaxError`","`SyntaxError: Malformed arrow function parameter list`","`string string string`","`TypeError`"],"answer":1,"explanation":"It logs `SyntaxError: Malformed arrow function parameter list`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof null, typeof 10n, typeof undefined);\n```","options":["`null bigint undefined`","`string string string`","`TypeError`","`object bigint undefined`"],"answer":3,"explanation":"It logs `object bigint undefined`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof undefined, typeof 10n, typeof () => {});\n```","options":["`SyntaxError`","`string string string`","`TypeError`","`SyntaxError: Malformed arrow function parameter list`"],"answer":3,"explanation":"It logs `SyntaxError: Malformed arrow function parameter list`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof null, typeof undefined, typeof 10n);\n```","options":["`string string string`","`null undefined bigint`","`object undefined bigint`","`TypeError`"],"answer":2,"explanation":"It logs `object undefined bigint`."}]
---
# Predict the Output: typeof #7

`typeof` returns a string. Famous quirks: `typeof null` is `"object"`, arrays are `"object"` (use `Array.isArray`), and `typeof NaN` is `"number"`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
