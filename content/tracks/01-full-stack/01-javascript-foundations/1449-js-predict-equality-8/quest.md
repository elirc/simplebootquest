---
slug: "js-predict-equality-8"
title: "Predict the Output: == vs === #8"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(\" \" == 0, NaN == NaN, [] == false);\n```","options":["`SyntaxError`","`true false true`","`TypeError`","`false false false`"],"answer":1,"explanation":"It logs `true false true`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"1\" === 1, NaN === NaN, \"0\" == false);\n```","options":["`false false true`","`SyntaxError`","`false false false`","`true false true`"],"answer":0,"explanation":"It logs `false false true`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"0\" == false, \" \" == 0, null === 0);\n```","options":["`TypeError`","`false false false`","`true true false`","`SyntaxError`"],"answer":2,"explanation":"It logs `true true false`."},{"prompt":"What does this log?\n\n```js\nconsole.log(0 == \"\", null === undefined, [1] === 1);\n```","options":["`true true true`","`true false false`","`false false false`","`SyntaxError`"],"answer":1,"explanation":"It logs `true false false`."},{"prompt":"What does this log?\n\n```js\nconsole.log(0 === \"\", null == undefined, \" \" == 0);\n```","options":["`false false false`","`SyntaxError`","`false true true`","`true true true`"],"answer":2,"explanation":"It logs `false true true`."}]
---
# Predict the Output: == vs === #8

`===` compares type and value. `==` converts types first, with surprising rules (`0 == ""` is `true`, but `null == 0` is `false`).

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
