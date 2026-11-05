---
slug: "js-predict-equality-19"
title: "Predict the Output: == vs === #19"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log([] == false, \"0\" === false, \"1\" == 1);\n```","options":["`true false true`","`true true true`","`SyntaxError`","`false false false`"],"answer":0,"explanation":"It logs `true false true`."},{"prompt":"What does this log?\n\n```js\nconsole.log([1] === 1, null === 0, \"0\" == false);\n```","options":["`false false true`","`false false false`","`SyntaxError`","`true false true`"],"answer":0,"explanation":"It logs `false false true`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\" \" == 0, [1] === 1, NaN === NaN);\n```","options":["`true true false`","`SyntaxError`","`false false false`","`true false false`"],"answer":3,"explanation":"It logs `true false false`."},{"prompt":"What does this log?\n\n```js\nconsole.log(null === 0, \"0\" == false, NaN == NaN);\n```","options":["`false false false`","`TypeError`","`SyntaxError`","`false true false`"],"answer":3,"explanation":"It logs `false true false`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"1\" === 1, 0 === \"\", \"0\" == false);\n```","options":["`false false false`","`false false true`","`true true true`","`SyntaxError`"],"answer":1,"explanation":"It logs `false false true`."}]
---
# Predict the Output: == vs === #19

`===` compares type and value. `==` converts types first, with surprising rules (`0 == ""` is `true`, but `null == 0` is `false`).

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
