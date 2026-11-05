---
slug: "js-predict-equality-22"
title: "Predict the Output: == vs === #22"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log([] == false, 0 == \"\", null == undefined);\n```","options":["`TypeError`","`SyntaxError`","`false false false`","`true true true`"],"answer":3,"explanation":"It logs `true true true`."},{"prompt":"What does this log?\n\n```js\nconsole.log(null == 0, undefined === 0, [] == false);\n```","options":["`false false false`","`false false true`","`TypeError`","`SyntaxError`"],"answer":1,"explanation":"It logs `false false true`."},{"prompt":"What does this log?\n\n```js\nconsole.log(null === 0, \"1\" == 1, 0 === \"\");\n```","options":["`false true false`","`SyntaxError`","`false true true`","`false false false`"],"answer":0,"explanation":"It logs `false true false`."},{"prompt":"What does this log?\n\n```js\nconsole.log(null == 0, [1] == 1, 0 == \"\");\n```","options":["`false true true`","`TypeError`","`false false false`","`SyntaxError`"],"answer":0,"explanation":"It logs `false true true`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"1\" === 1, 0 == \"\", undefined === 0);\n```","options":["`false true false`","`SyntaxError`","`false false false`","`true true false`"],"answer":0,"explanation":"It logs `false true false`."}]
---
# Predict the Output: == vs === #22

`===` compares type and value. `==` converts types first, with surprising rules (`0 == ""` is `true`, but `null == 0` is `false`).

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
