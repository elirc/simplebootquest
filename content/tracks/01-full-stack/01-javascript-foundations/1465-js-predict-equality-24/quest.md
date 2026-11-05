---
slug: "js-predict-equality-24"
title: "Predict the Output: == vs === #24"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(null == 0, null === undefined, \"1\" == 1);\n```","options":["`false false false`","`false false true`","`SyntaxError`","`false true true`"],"answer":1,"explanation":"It logs `false false true`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"0\" == false, \"1\" === 1, undefined == 0);\n```","options":["`false false false`","`true true false`","`SyntaxError`","`true false false`"],"answer":3,"explanation":"It logs `true false false`."},{"prompt":"What does this log?\n\n```js\nconsole.log([] === false, \" \" === 0, undefined == 0);\n```","options":["`SyntaxError`","`TypeError`","`false false false`","`true true false`"],"answer":2,"explanation":"It logs `false false false`."},{"prompt":"What does this log?\n\n```js\nconsole.log(null === 0, \" \" === 0, 0 == \"\");\n```","options":["`SyntaxError`","`false false false`","`false false true`","`false true true`"],"answer":2,"explanation":"It logs `false false true`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\" \" === 0, \"1\" === 1, \"0\" == false);\n```","options":["`false false true`","`true true true`","`SyntaxError`","`false false false`"],"answer":0,"explanation":"It logs `false false true`."}]
---
# Predict the Output: == vs === #24

`===` compares type and value. `==` converts types first, with surprising rules (`0 == ""` is `true`, but `null == 0` is `false`).

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
