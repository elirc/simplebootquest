---
slug: "js-predict-typeof-13"
title: "Predict the Output: typeof #13"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(typeof true, typeof [], typeof null);\n```","options":["`boolean object object`","`string string string`","`boolean array object`","`boolean object null`"],"answer":0,"explanation":"It logs `boolean object object`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof \"5\", typeof [], typeof undefined);\n```","options":["`string string string`","`string object undefined`","`string array undefined`","`TypeError`"],"answer":1,"explanation":"It logs `string object undefined`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof NaN, typeof \"5\", typeof null);\n```","options":["`string string string`","`number string null`","`number string object`","`TypeError`"],"answer":2,"explanation":"It logs `number string object`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof new Date(), typeof () => {}, typeof []);\n```","options":["`string string string`","`SyntaxError: Malformed arrow function parameter list`","`TypeError`","`SyntaxError`"],"answer":1,"explanation":"It logs `SyntaxError: Malformed arrow function parameter list`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof () => {}, typeof {}, typeof \"5\");\n```","options":["`SyntaxError: Malformed arrow function parameter list`","`string string string`","`SyntaxError`","`TypeError`"],"answer":0,"explanation":"It logs `SyntaxError: Malformed arrow function parameter list`."}]
---
# Predict the Output: typeof #13

`typeof` returns a string. Famous quirks: `typeof null` is `"object"`, arrays are `"object"` (use `Array.isArray`), and `typeof NaN` is `"number"`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
