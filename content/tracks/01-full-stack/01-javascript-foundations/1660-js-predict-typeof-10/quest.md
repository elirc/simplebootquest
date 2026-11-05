---
slug: "js-predict-typeof-10"
title: "Predict the Output: typeof #10"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(typeof true, typeof NaN, typeof () => {});\n```","options":["`string string string`","`SyntaxError: Malformed arrow function parameter list`","`SyntaxError`","`TypeError`"],"answer":1,"explanation":"It logs `SyntaxError: Malformed arrow function parameter list`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof 5, typeof null, typeof () => {});\n```","options":["`TypeError`","`string string string`","`SyntaxError`","`SyntaxError: Malformed arrow function parameter list`"],"answer":3,"explanation":"It logs `SyntaxError: Malformed arrow function parameter list`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof {}, typeof NaN, typeof []);\n```","options":["`object number array`","`TypeError`","`string string string`","`object number object`"],"answer":3,"explanation":"It logs `object number object`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof NaN, typeof true, typeof () => {});\n```","options":["`TypeError`","`SyntaxError: Malformed arrow function parameter list`","`string string string`","`SyntaxError`"],"answer":1,"explanation":"It logs `SyntaxError: Malformed arrow function parameter list`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof null, typeof undefined, typeof new Date());\n```","options":["`null undefined object`","`string string string`","`object undefined object`","`TypeError`"],"answer":2,"explanation":"It logs `object undefined object`."}]
---
# Predict the Output: typeof #10

`typeof` returns a string. Famous quirks: `typeof null` is `"object"`, arrays are `"object"` (use `Array.isArray`), and `typeof NaN` is `"number"`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
