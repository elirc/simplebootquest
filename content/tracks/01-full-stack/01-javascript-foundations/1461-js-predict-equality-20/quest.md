---
slug: "js-predict-equality-20"
title: "Predict the Output: == vs === #20"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log([] == false, \" \" == 0, null == undefined);\n```","options":["`SyntaxError`","`true true true`","`false false false`","`TypeError`"],"answer":1,"explanation":"It logs `true true true`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"0\" == false, NaN === NaN, [] == false);\n```","options":["`true false true`","`TypeError`","`SyntaxError`","`false false false`"],"answer":0,"explanation":"It logs `true false true`."},{"prompt":"What does this log?\n\n```js\nconsole.log(NaN == NaN, \" \" == 0, [] == false);\n```","options":["`TypeError`","`false true true`","`SyntaxError`","`false false false`"],"answer":1,"explanation":"It logs `false true true`."},{"prompt":"What does this log?\n\n```js\nconsole.log(undefined === 0, \"0\" == false, NaN === NaN);\n```","options":["`TypeError`","`SyntaxError`","`false false false`","`false true false`"],"answer":3,"explanation":"It logs `false true false`."},{"prompt":"What does this log?\n\n```js\nconsole.log([1] == 1, [] == false, \" \" == 0);\n```","options":["`true true true`","`false false false`","`SyntaxError`","`TypeError`"],"answer":0,"explanation":"It logs `true true true`."}]
---
# Predict the Output: == vs === #20

`===` compares type and value. `==` converts types first, with surprising rules (`0 == ""` is `true`, but `null == 0` is `false`).

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
