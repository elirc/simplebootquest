---
slug: "js-predict-equality-12"
title: "Predict the Output: == vs === #12"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(null === undefined, \"0\" === false, [] == false);\n```","options":["`false false true`","`SyntaxError`","`false false false`","`true true true`"],"answer":0,"explanation":"It logs `false false true`."},{"prompt":"What does this log?\n\n```js\nconsole.log(null == 0, 0 == \"\", \"0\" === false);\n```","options":["`false true false`","`false false false`","`false true true`","`SyntaxError`"],"answer":0,"explanation":"It logs `false true false`."},{"prompt":"What does this log?\n\n```js\nconsole.log(null === undefined, [1] === 1, \"1\" == 1);\n```","options":["`SyntaxError`","`true true true`","`false false true`","`false false false`"],"answer":2,"explanation":"It logs `false false true`."},{"prompt":"What does this log?\n\n```js\nconsole.log(NaN == NaN, null == 0, \"1\" == 1);\n```","options":["`SyntaxError`","`false false true`","`false false false`","`TypeError`"],"answer":1,"explanation":"It logs `false false true`."},{"prompt":"What does this log?\n\n```js\nconsole.log(null == undefined, [1] == 1, \"0\" === false);\n```","options":["`SyntaxError`","`false false false`","`true true false`","`true true true`"],"answer":2,"explanation":"It logs `true true false`."}]
---
# Predict the Output: == vs === #12

`===` compares type and value. `==` converts types first, with surprising rules (`0 == ""` is `true`, but `null == 0` is `false`).

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
