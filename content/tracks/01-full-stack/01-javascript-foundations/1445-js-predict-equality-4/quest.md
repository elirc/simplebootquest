---
slug: "js-predict-equality-4"
title: "Predict the Output: == vs === #4"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(\"1\" == 1, undefined == 0, [] == false);\n```","options":["`TypeError`","`SyntaxError`","`true false true`","`false false false`"],"answer":2,"explanation":"It logs `true false true`."},{"prompt":"What does this log?\n\n```js\nconsole.log(null == 0, \"1\" == 1, [] == false);\n```","options":["`false false false`","`SyntaxError`","`TypeError`","`false true true`"],"answer":3,"explanation":"It logs `false true true`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\" \" == 0, null == undefined, null === 0);\n```","options":["`true true false`","`SyntaxError`","`TypeError`","`false false false`"],"answer":0,"explanation":"It logs `true true false`."},{"prompt":"What does this log?\n\n```js\nconsole.log([1] == 1, \" \" === 0, \"0\" === false);\n```","options":["`true true true`","`true false false`","`false false false`","`SyntaxError`"],"answer":1,"explanation":"It logs `true false false`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\" \" == 0, undefined == 0, [] === false);\n```","options":["`true false true`","`SyntaxError`","`true false false`","`false false false`"],"answer":2,"explanation":"It logs `true false false`."}]
---
# Predict the Output: == vs === #4

`===` compares type and value. `==` converts types first, with surprising rules (`0 == ""` is `true`, but `null == 0` is `false`).

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
