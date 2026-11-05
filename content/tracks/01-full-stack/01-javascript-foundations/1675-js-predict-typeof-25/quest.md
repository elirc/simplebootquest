---
slug: "js-predict-typeof-25"
title: "Predict the Output: typeof #25"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(typeof true, typeof undefined, typeof () => {});\n```","options":["`SyntaxError`","`string string string`","`TypeError`","`SyntaxError: Malformed arrow function parameter list`"],"answer":3,"explanation":"It logs `SyntaxError: Malformed arrow function parameter list`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof NaN, typeof null, typeof []);\n```","options":["`string string string`","`number object object`","`number object array`","`number null object`"],"answer":1,"explanation":"It logs `number object object`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof null, typeof 5, typeof new Date());\n```","options":["`object number object`","`null number object`","`TypeError`","`string string string`"],"answer":0,"explanation":"It logs `object number object`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof [], typeof {}, typeof null);\n```","options":["`string string string`","`object object null`","`array object object`","`object object object`"],"answer":3,"explanation":"It logs `object object object`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof null, typeof 5, typeof \"5\");\n```","options":["`object number string`","`string string string`","`TypeError`","`null number string`"],"answer":0,"explanation":"It logs `object number string`."}]
---
# Predict the Output: typeof #25

`typeof` returns a string. Famous quirks: `typeof null` is `"object"`, arrays are `"object"` (use `Array.isArray`), and `typeof NaN` is `"number"`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
