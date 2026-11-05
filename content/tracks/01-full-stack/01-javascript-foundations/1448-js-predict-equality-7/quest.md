---
slug: "js-predict-equality-7"
title: "Predict the Output: == vs === #7"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(null == undefined, undefined == 0, null == 0);\n```","options":["`TypeError`","`SyntaxError`","`false false false`","`true false false`"],"answer":3,"explanation":"It logs `true false false`."},{"prompt":"What does this log?\n\n```js\nconsole.log(undefined === 0, NaN == NaN, [] == false);\n```","options":["`false false true`","`false false false`","`SyntaxError`","`TypeError`"],"answer":0,"explanation":"It logs `false false true`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"1\" === 1, 0 === \"\", null == undefined);\n```","options":["`true true true`","`false false true`","`false false false`","`SyntaxError`"],"answer":1,"explanation":"It logs `false false true`."},{"prompt":"What does this log?\n\n```js\nconsole.log(0 == \"\", \" \" === 0, \"0\" === false);\n```","options":["`true false false`","`true true true`","`false false false`","`SyntaxError`"],"answer":0,"explanation":"It logs `true false false`."},{"prompt":"What does this log?\n\n```js\nconsole.log(null == 0, \"0\" === false, \"1\" == 1);\n```","options":["`false true true`","`false false false`","`false false true`","`SyntaxError`"],"answer":2,"explanation":"It logs `false false true`."}]
---
# Predict the Output: == vs === #7

`===` compares type and value. `==` converts types first, with surprising rules (`0 == ""` is `true`, but `null == 0` is `false`).

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
