---
slug: "js-predict-equality-5"
title: "Predict the Output: == vs === #5"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(\"1\" === 1, [1] == 1, NaN === NaN);\n```","options":["`false true false`","`SyntaxError`","`true true false`","`false false false`"],"answer":0,"explanation":"It logs `false true false`."},{"prompt":"What does this log?\n\n```js\nconsole.log([] == false, null === 0, undefined == 0);\n```","options":["`true false false`","`false false false`","`SyntaxError`","`TypeError`"],"answer":0,"explanation":"It logs `true false false`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\" \" === 0, null === undefined, 0 == \"\");\n```","options":["`false false true`","`true true true`","`false false false`","`SyntaxError`"],"answer":0,"explanation":"It logs `false false true`."},{"prompt":"What does this log?\n\n```js\nconsole.log([] === false, null == undefined, \"0\" == false);\n```","options":["`true true true`","`false true true`","`SyntaxError`","`false false false`"],"answer":1,"explanation":"It logs `false true true`."},{"prompt":"What does this log?\n\n```js\nconsole.log(undefined === 0, [1] === 1, [] == false);\n```","options":["`false false false`","`false false true`","`false true true`","`SyntaxError`"],"answer":1,"explanation":"It logs `false false true`."}]
---
# Predict the Output: == vs === #5

`===` compares type and value. `==` converts types first, with surprising rules (`0 == ""` is `true`, but `null == 0` is `false`).

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
