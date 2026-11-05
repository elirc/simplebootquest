---
slug: "js-predict-equality-23"
title: "Predict the Output: == vs === #23"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(\"0\" == false, \"1\" == 1, null === undefined);\n```","options":["`SyntaxError`","`false false false`","`true true true`","`true true false`"],"answer":3,"explanation":"It logs `true true false`."},{"prompt":"What does this log?\n\n```js\nconsole.log(0 == \"\", undefined == 0, \" \" === 0);\n```","options":["`false false false`","`true false true`","`true false false`","`SyntaxError`"],"answer":2,"explanation":"It logs `true false false`."},{"prompt":"What does this log?\n\n```js\nconsole.log(0 === \"\", null === 0, \" \" == 0);\n```","options":["`SyntaxError`","`false false false`","`false false true`","`true false true`"],"answer":2,"explanation":"It logs `false false true`."},{"prompt":"What does this log?\n\n```js\nconsole.log([] == false, null == 0, \" \" === 0);\n```","options":["`true false true`","`SyntaxError`","`false false false`","`true false false`"],"answer":3,"explanation":"It logs `true false false`."},{"prompt":"What does this log?\n\n```js\nconsole.log(undefined == 0, [1] == 1, null == 0);\n```","options":["`false true false`","`TypeError`","`false false false`","`SyntaxError`"],"answer":0,"explanation":"It logs `false true false`."}]
---
# Predict the Output: == vs === #23

`===` compares type and value. `==` converts types first, with surprising rules (`0 == ""` is `true`, but `null == 0` is `false`).

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
