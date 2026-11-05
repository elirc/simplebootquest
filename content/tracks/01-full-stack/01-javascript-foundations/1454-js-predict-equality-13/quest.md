---
slug: "js-predict-equality-13"
title: "Predict the Output: == vs === #13"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(NaN === NaN, \"0\" == false, undefined == 0);\n```","options":["`false true false`","`TypeError`","`false false false`","`SyntaxError`"],"answer":0,"explanation":"It logs `false true false`."},{"prompt":"What does this log?\n\n```js\nconsole.log([] == false, \"1\" == 1, [1] == 1);\n```","options":["`true true true`","`SyntaxError`","`TypeError`","`false false false`"],"answer":0,"explanation":"It logs `true true true`."},{"prompt":"What does this log?\n\n```js\nconsole.log(null == 0, 0 === \"\", [] == false);\n```","options":["`false false false`","`SyntaxError`","`false false true`","`false true true`"],"answer":2,"explanation":"It logs `false false true`."},{"prompt":"What does this log?\n\n```js\nconsole.log([1] == 1, NaN === NaN, \"0\" == false);\n```","options":["`true false true`","`SyntaxError`","`false false false`","`TypeError`"],"answer":0,"explanation":"It logs `true false true`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"0\" == false, null === 0, \"1\" === 1);\n```","options":["`true false false`","`false false false`","`true false true`","`SyntaxError`"],"answer":0,"explanation":"It logs `true false false`."}]
---
# Predict the Output: == vs === #13

`===` compares type and value. `==` converts types first, with surprising rules (`0 == ""` is `true`, but `null == 0` is `false`).

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
