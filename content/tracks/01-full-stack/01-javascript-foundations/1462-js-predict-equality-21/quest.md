---
slug: "js-predict-equality-21"
title: "Predict the Output: == vs === #21"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(NaN === NaN, [1] == 1, 0 == \"\");\n```","options":["`false false false`","`SyntaxError`","`false true true`","`TypeError`"],"answer":2,"explanation":"It logs `false true true`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"1\" === 1, \" \" == 0, [] == false);\n```","options":["`false false false`","`SyntaxError`","`true true true`","`false true true`"],"answer":3,"explanation":"It logs `false true true`."},{"prompt":"What does this log?\n\n```js\nconsole.log([1] == 1, undefined === 0, \"0\" === false);\n```","options":["`SyntaxError`","`false false false`","`true false false`","`true false true`"],"answer":2,"explanation":"It logs `true false false`."},{"prompt":"What does this log?\n\n```js\nconsole.log(0 === \"\", null == 0, null === undefined);\n```","options":["`SyntaxError`","`TypeError`","`false false false`","`true false true`"],"answer":2,"explanation":"It logs `false false false`."},{"prompt":"What does this log?\n\n```js\nconsole.log(undefined === 0, [] == false, \"1\" == 1);\n```","options":["`false true true`","`TypeError`","`false false false`","`SyntaxError`"],"answer":0,"explanation":"It logs `false true true`."}]
---
# Predict the Output: == vs === #21

`===` compares type and value. `==` converts types first, with surprising rules (`0 == ""` is `true`, but `null == 0` is `false`).

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
