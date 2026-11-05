---
slug: "js-predict-equality-16"
title: "Predict the Output: == vs === #16"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(null == 0, null == undefined, undefined === 0);\n```","options":["`false false false`","`SyntaxError`","`false true false`","`TypeError`"],"answer":2,"explanation":"It logs `false true false`."},{"prompt":"What does this log?\n\n```js\nconsole.log(undefined == 0, \" \" == 0, \"0\" === false);\n```","options":["`SyntaxError`","`false true true`","`false true false`","`false false false`"],"answer":2,"explanation":"It logs `false true false`."},{"prompt":"What does this log?\n\n```js\nconsole.log([] == false, null === 0, \"1\" === 1);\n```","options":["`true false true`","`SyntaxError`","`false false false`","`true false false`"],"answer":3,"explanation":"It logs `true false false`."},{"prompt":"What does this log?\n\n```js\nconsole.log([] === false, \"1\" === 1, [1] == 1);\n```","options":["`false false false`","`false false true`","`true true true`","`SyntaxError`"],"answer":1,"explanation":"It logs `false false true`."},{"prompt":"What does this log?\n\n```js\nconsole.log(null === undefined, undefined == 0, [] === false);\n```","options":["`false false false`","`SyntaxError`","`TypeError`","`true false true`"],"answer":0,"explanation":"It logs `false false false`."}]
---
# Predict the Output: == vs === #16

`===` compares type and value. `==` converts types first, with surprising rules (`0 == ""` is `true`, but `null == 0` is `false`).

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
