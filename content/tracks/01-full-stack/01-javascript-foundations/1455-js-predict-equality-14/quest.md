---
slug: "js-predict-equality-14"
title: "Predict the Output: == vs === #14"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(undefined === 0, \"1\" === 1, [1] == 1);\n```","options":["`false true true`","`false false true`","`false false false`","`SyntaxError`"],"answer":1,"explanation":"It logs `false false true`."},{"prompt":"What does this log?\n\n```js\nconsole.log([1] == 1, \"0\" == false, 0 == \"\");\n```","options":["`SyntaxError`","`false false false`","`true true true`","`TypeError`"],"answer":2,"explanation":"It logs `true true true`."},{"prompt":"What does this log?\n\n```js\nconsole.log(0 == \"\", NaN === NaN, \"0\" == false);\n```","options":["`false false false`","`TypeError`","`SyntaxError`","`true false true`"],"answer":3,"explanation":"It logs `true false true`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"0\" == false, null == 0, 0 === \"\");\n```","options":["`true false false`","`SyntaxError`","`true false true`","`false false false`"],"answer":0,"explanation":"It logs `true false false`."},{"prompt":"What does this log?\n\n```js\nconsole.log(null == undefined, [] === false, \"0\" === false);\n```","options":["`true true true`","`SyntaxError`","`true false false`","`false false false`"],"answer":2,"explanation":"It logs `true false false`."}]
---
# Predict the Output: == vs === #14

`===` compares type and value. `==` converts types first, with surprising rules (`0 == ""` is `true`, but `null == 0` is `false`).

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
