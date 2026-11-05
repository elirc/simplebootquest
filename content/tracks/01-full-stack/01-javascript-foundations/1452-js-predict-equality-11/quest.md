---
slug: "js-predict-equality-11"
title: "Predict the Output: == vs === #11"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(NaN == NaN, [] === false, [1] === 1);\n```","options":["`false true true`","`SyntaxError`","`TypeError`","`false false false`"],"answer":3,"explanation":"It logs `false false false`."},{"prompt":"What does this log?\n\n```js\nconsole.log(0 === \"\", [1] == 1, \"0\" === false);\n```","options":["`true true true`","`SyntaxError`","`false false false`","`false true false`"],"answer":3,"explanation":"It logs `false true false`."},{"prompt":"What does this log?\n\n```js\nconsole.log(undefined == 0, \"0\" === false, \" \" == 0);\n```","options":["`false true true`","`false false false`","`SyntaxError`","`false false true`"],"answer":3,"explanation":"It logs `false false true`."},{"prompt":"What does this log?\n\n```js\nconsole.log([1] == 1, 0 == \"\", \"0\" == false);\n```","options":["`false false false`","`true true true`","`TypeError`","`SyntaxError`"],"answer":1,"explanation":"It logs `true true true`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"1\" == 1, null == 0, [1] == 1);\n```","options":["`TypeError`","`SyntaxError`","`true false true`","`false false false`"],"answer":2,"explanation":"It logs `true false true`."}]
---
# Predict the Output: == vs === #11

`===` compares type and value. `==` converts types first, with surprising rules (`0 == ""` is `true`, but `null == 0` is `false`).

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
