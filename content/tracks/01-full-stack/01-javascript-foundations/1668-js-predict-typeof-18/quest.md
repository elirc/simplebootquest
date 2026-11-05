---
slug: "js-predict-typeof-18"
title: "Predict the Output: typeof #18"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(typeof null, typeof [], typeof 10n);\n```","options":["`string string string`","`object object bigint`","`null object bigint`","`object array bigint`"],"answer":1,"explanation":"It logs `object object bigint`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof [], typeof \"5\", typeof new Date());\n```","options":["`string string string`","`object string object`","`array string object`","`TypeError`"],"answer":1,"explanation":"It logs `object string object`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof () => {}, typeof Symbol(\"x\"), typeof {});\n```","options":["`SyntaxError`","`TypeError`","`SyntaxError: Malformed arrow function parameter list`","`string string string`"],"answer":2,"explanation":"It logs `SyntaxError: Malformed arrow function parameter list`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof true, typeof \"5\", typeof () => {});\n```","options":["`SyntaxError: Malformed arrow function parameter list`","`string string string`","`TypeError`","`SyntaxError`"],"answer":0,"explanation":"It logs `SyntaxError: Malformed arrow function parameter list`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof 5, typeof () => {}, typeof \"5\");\n```","options":["`string string string`","`SyntaxError`","`TypeError`","`SyntaxError: Malformed arrow function parameter list`"],"answer":3,"explanation":"It logs `SyntaxError: Malformed arrow function parameter list`."}]
---
# Predict the Output: typeof #18

`typeof` returns a string. Famous quirks: `typeof null` is `"object"`, arrays are `"object"` (use `Array.isArray`), and `typeof NaN` is `"number"`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
