---
slug: "js-predict-typeof-9"
title: "Predict the Output: typeof #9"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(typeof () => {}, typeof true, typeof 5);\n```","options":["`SyntaxError`","`SyntaxError: Malformed arrow function parameter list`","`TypeError`","`string string string`"],"answer":1,"explanation":"It logs `SyntaxError: Malformed arrow function parameter list`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof Symbol(\"x\"), typeof NaN, typeof []);\n```","options":["`string string string`","`TypeError`","`symbol number array`","`symbol number object`"],"answer":3,"explanation":"It logs `symbol number object`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof 10n, typeof [], typeof Symbol(\"x\"));\n```","options":["`string string string`","`TypeError`","`bigint array symbol`","`bigint object symbol`"],"answer":3,"explanation":"It logs `bigint object symbol`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof undefined, typeof [], typeof \"5\");\n```","options":["`TypeError`","`string string string`","`undefined object string`","`undefined array string`"],"answer":2,"explanation":"It logs `undefined object string`."},{"prompt":"What does this log?\n\n```js\nconsole.log(typeof \"5\", typeof () => {}, typeof []);\n```","options":["`TypeError`","`SyntaxError`","`SyntaxError: Malformed arrow function parameter list`","`string string string`"],"answer":2,"explanation":"It logs `SyntaxError: Malformed arrow function parameter list`."}]
---
# Predict the Output: typeof #9

`typeof` returns a string. Famous quirks: `typeof null` is `"object"`, arrays are `"object"` (use `Array.isArray`), and `typeof NaN` is `"number"`.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
