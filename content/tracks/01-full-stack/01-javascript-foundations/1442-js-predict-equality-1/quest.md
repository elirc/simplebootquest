---
slug: "js-predict-equality-1"
title: "Predict the Output: == vs === #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(undefined == 0, [] == false, null == undefined);\n```","options":["`TypeError`","`SyntaxError`","`false true true`","`false false false`"],"answer":2,"explanation":"It logs `false true true`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"0\" === false, \" \" == 0, null == undefined);\n```","options":["`false true true`","`SyntaxError`","`true true true`","`false false false`"],"answer":0,"explanation":"It logs `false true true`."},{"prompt":"What does this log?\n\n```js\nconsole.log(null == 0, \" \" == 0, \"1\" === 1);\n```","options":["`false true false`","`SyntaxError`","`false false false`","`false true true`"],"answer":0,"explanation":"It logs `false true false`."},{"prompt":"What does this log?\n\n```js\nconsole.log([] == false, [1] === 1, \"0\" == false);\n```","options":["`false false false`","`true true true`","`SyntaxError`","`true false true`"],"answer":3,"explanation":"It logs `true false true`."},{"prompt":"What does this log?\n\n```js\nconsole.log(null == undefined, 0 == \"\", [1] === 1);\n```","options":["`true true true`","`SyntaxError`","`true true false`","`false false false`"],"answer":2,"explanation":"It logs `true true false`."}]
---
# Predict the Output: == vs === #1

`===` compares type and value. `==` converts types first, with surprising rules (`0 == ""` is `true`, but `null == 0` is `false`).

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
