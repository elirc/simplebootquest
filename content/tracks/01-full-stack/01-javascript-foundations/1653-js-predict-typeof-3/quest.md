---
slug: "js-predict-typeof-3"
title: "Predict the Output: typeof #3"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(typeof 5, typeof () => {}, typeof 10n);\n```","options":["`TypeError`","`string string string`","`SyntaxError: Malformed arrow function parameter list`","`SyntaxError`"],"answer":2,"explanation":"It logs `SyntaxError: Malformed arrow function parameter list`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof true, typeof null, typeof Symbol(\"x\"));\n```","options":["`boolean null symbol`","`boolean object symbol`","`TypeError`","`string string string`"],"answer":1,"explanation":"It logs `boolean object symbol`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof new Date(), typeof null, typeof true);\n```","options":["`TypeError`","`object object boolean`","`object null boolean`","`string string string`"],"answer":1,"explanation":"It logs `object object boolean`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof Symbol(\"x\"), typeof [], typeof 5);\n```","options":["`symbol object number`","`string string string`","`symbol array number`","`TypeError`"],"answer":0,"explanation":"It logs `symbol object number`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof {}, typeof () => {}, typeof \"5\");\n```","options":["`SyntaxError`","`TypeError`","`string string string`","`SyntaxError: Malformed arrow function parameter list`"],"answer":3,"explanation":"It logs `SyntaxError: Malformed arrow function parameter list`."}]
---
# Predict the Output: typeof #3

`typeof` returns a string. Famous quirks: `typeof null` is `"object"`, arrays are `"object"` (use `Array.isArray`), and `typeof NaN` is `"number"`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
