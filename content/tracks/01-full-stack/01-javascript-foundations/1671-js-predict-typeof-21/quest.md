---
slug: "js-predict-typeof-21"
title: "Predict the Output: typeof #21"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(typeof () => {}, typeof NaN, typeof 5);\n```","options":["`TypeError`","`SyntaxError: Malformed arrow function parameter list`","`SyntaxError`","`string string string`"],"answer":1,"explanation":"It logs `SyntaxError: Malformed arrow function parameter list`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof Symbol(\"x\"), typeof \"5\", typeof () => {});\n```","options":["`SyntaxError: Malformed arrow function parameter list`","`SyntaxError`","`TypeError`","`string string string`"],"answer":0,"explanation":"It logs `SyntaxError: Malformed arrow function parameter list`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof [], typeof 10n, typeof null);\n```","options":["`array bigint object`","`object bigint object`","`object bigint null`","`string string string`"],"answer":1,"explanation":"It logs `object bigint object`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof () => {}, typeof [], typeof {});\n```","options":["`SyntaxError`","`TypeError`","`string string string`","`SyntaxError: Malformed arrow function parameter list`"],"answer":3,"explanation":"It logs `SyntaxError: Malformed arrow function parameter list`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof {}, typeof [], typeof () => {});\n```","options":["`SyntaxError: Malformed arrow function parameter list`","`TypeError`","`SyntaxError`","`string string string`"],"answer":0,"explanation":"It logs `SyntaxError: Malformed arrow function parameter list`."}]
---
# Predict the Output: typeof #21

`typeof` returns a string. Famous quirks: `typeof null` is `"object"`, arrays are `"object"` (use `Array.isArray`), and `typeof NaN` is `"number"`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
