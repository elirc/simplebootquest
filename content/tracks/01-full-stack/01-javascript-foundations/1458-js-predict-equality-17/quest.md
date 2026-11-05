---
slug: "js-predict-equality-17"
title: "Predict the Output: == vs === #17"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(null === undefined, \" \" == 0, \"0\" === false);\n```","options":["`false false false`","`SyntaxError`","`true true true`","`false true false`"],"answer":3,"explanation":"It logs `false true false`."},{"prompt":"What does this log?\n\n```js\nconsole.log(0 == \"\", null === 0, NaN == NaN);\n```","options":["`SyntaxError`","`TypeError`","`false false false`","`true false false`"],"answer":3,"explanation":"It logs `true false false`."},{"prompt":"What does this log?\n\n```js\nconsole.log(NaN === NaN, [1] == 1, null === 0);\n```","options":["`false false false`","`TypeError`","`false true false`","`SyntaxError`"],"answer":2,"explanation":"It logs `false true false`."},{"prompt":"What does this log?\n\n```js\nconsole.log([] == false, NaN === NaN, \"1\" == 1);\n```","options":["`false false false`","`TypeError`","`true false true`","`SyntaxError`"],"answer":2,"explanation":"It logs `true false true`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"1\" == 1, 0 === \"\", \"0\" === false);\n```","options":["`true true true`","`true false false`","`SyntaxError`","`false false false`"],"answer":1,"explanation":"It logs `true false false`."}]
---
# Predict the Output: == vs === #17

`===` compares type and value. `==` converts types first, with surprising rules (`0 == ""` is `true`, but `null == 0` is `false`).

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
