---
slug: "js-predict-equality-15"
title: "Predict the Output: == vs === #15"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(\"1\" == 1, [1] == 1, NaN == NaN);\n```","options":["`SyntaxError`","`false false false`","`true true false`","`TypeError`"],"answer":2,"explanation":"It logs `true true false`."},{"prompt":"What does this log?\n\n```js\nconsole.log(NaN === NaN, undefined == 0, [1] === 1);\n```","options":["`false false true`","`TypeError`","`false false false`","`SyntaxError`"],"answer":2,"explanation":"It logs `false false false`."},{"prompt":"What does this log?\n\n```js\nconsole.log([] == false, \"0\" == false, [1] == 1);\n```","options":["`TypeError`","`false false false`","`SyntaxError`","`true true true`"],"answer":3,"explanation":"It logs `true true true`."},{"prompt":"What does this log?\n\n```js\nconsole.log(null === 0, undefined == 0, \"1\" === 1);\n```","options":["`TypeError`","`SyntaxError`","`false false true`","`false false false`"],"answer":3,"explanation":"It logs `false false false`."},{"prompt":"What does this log?\n\n```js\nconsole.log(null === 0, [1] == 1, \"0\" === false);\n```","options":["`false false false`","`SyntaxError`","`false true false`","`false true true`"],"answer":2,"explanation":"It logs `false true false`."}]
---
# Predict the Output: == vs === #15

`===` compares type and value. `==` converts types first, with surprising rules (`0 == ""` is `true`, but `null == 0` is `false`).

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
