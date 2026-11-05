---
slug: "js-predict-typeof-20"
title: "Predict the Output: typeof #20"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(typeof () => {}, typeof [], typeof 5);\n```","options":["`SyntaxError: Malformed arrow function parameter list`","`SyntaxError`","`TypeError`","`string string string`"],"answer":0,"explanation":"It logs `SyntaxError: Malformed arrow function parameter list`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof \"5\", typeof () => {}, typeof NaN);\n```","options":["`string string string`","`SyntaxError: Malformed arrow function parameter list`","`SyntaxError`","`TypeError`"],"answer":1,"explanation":"It logs `SyntaxError: Malformed arrow function parameter list`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof () => {}, typeof NaN, typeof []);\n```","options":["`TypeError`","`SyntaxError: Malformed arrow function parameter list`","`SyntaxError`","`string string string`"],"answer":1,"explanation":"It logs `SyntaxError: Malformed arrow function parameter list`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof new Date(), typeof null, typeof NaN);\n```","options":["`object object number`","`TypeError`","`object null number`","`string string string`"],"answer":0,"explanation":"It logs `object object number`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof () => {}, typeof NaN, typeof 10n);\n```","options":["`SyntaxError: Malformed arrow function parameter list`","`TypeError`","`string string string`","`SyntaxError`"],"answer":0,"explanation":"It logs `SyntaxError: Malformed arrow function parameter list`."}]
---
# Predict the Output: typeof #20

`typeof` returns a string. Famous quirks: `typeof null` is `"object"`, arrays are `"object"` (use `Array.isArray`), and `typeof NaN` is `"number"`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
