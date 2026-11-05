---
slug: "js-predict-equality-9"
title: "Predict the Output: == vs === #9"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(\"0\" == false, 0 === \"\", \" \" == 0);\n```","options":["`true true true`","`true false true`","`SyntaxError`","`false false false`"],"answer":1,"explanation":"It logs `true false true`."},{"prompt":"What does this log?\n\n```js\nconsole.log([] === false, [1] === 1, NaN == NaN);\n```","options":["`false false false`","`TypeError`","`SyntaxError`","`true true false`"],"answer":0,"explanation":"It logs `false false false`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\" \" === 0, 0 == \"\", NaN == NaN);\n```","options":["`true true false`","`SyntaxError`","`false true false`","`false false false`"],"answer":2,"explanation":"It logs `false true false`."},{"prompt":"What does this log?\n\n```js\nconsole.log(0 == \"\", \" \" == 0, \"1\" == 1);\n```","options":["`true true true`","`TypeError`","`SyntaxError`","`false false false`"],"answer":0,"explanation":"It logs `true true true`."},{"prompt":"What does this log?\n\n```js\nconsole.log(undefined == 0, \" \" == 0, \"1\" === 1);\n```","options":["`false true false`","`SyntaxError`","`false true true`","`false false false`"],"answer":0,"explanation":"It logs `false true false`."}]
---
# Predict the Output: == vs === #9

`===` compares type and value. `==` converts types first, with surprising rules (`0 == ""` is `true`, but `null == 0` is `false`).

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
