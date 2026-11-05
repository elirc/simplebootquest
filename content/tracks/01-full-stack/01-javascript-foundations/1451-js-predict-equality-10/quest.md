---
slug: "js-predict-equality-10"
title: "Predict the Output: == vs === #10"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log([1] === 1, [] == false, \" \" === 0);\n```","options":["`SyntaxError`","`false true false`","`true true true`","`false false false`"],"answer":1,"explanation":"It logs `false true false`."},{"prompt":"What does this log?\n\n```js\nconsole.log(undefined === 0, \"0\" == false, [] == false);\n```","options":["`SyntaxError`","`TypeError`","`false false false`","`false true true`"],"answer":3,"explanation":"It logs `false true true`."},{"prompt":"What does this log?\n\n```js\nconsole.log(undefined == 0, [1] === 1, \"0\" === false);\n```","options":["`false true true`","`false false false`","`SyntaxError`","`TypeError`"],"answer":1,"explanation":"It logs `false false false`."},{"prompt":"What does this log?\n\n```js\nconsole.log(null == 0, \"0\" == false, [] == false);\n```","options":["`TypeError`","`false true true`","`false false false`","`SyntaxError`"],"answer":1,"explanation":"It logs `false true true`."},{"prompt":"What does this log?\n\n```js\nconsole.log(null == 0, [1] === 1, \"0\" === false);\n```","options":["`SyntaxError`","`false false false`","`false true true`","`TypeError`"],"answer":1,"explanation":"It logs `false false false`."}]
---
# Predict the Output: == vs === #10

`===` compares type and value. `==` converts types first, with surprising rules (`0 == ""` is `true`, but `null == 0` is `false`).

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
