---
slug: "js-predict-equality-25"
title: "Predict the Output: == vs === #25"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(\" \" === 0, 0 == \"\", \"0\" == false);\n```","options":["`SyntaxError`","`false true true`","`true true true`","`false false false`"],"answer":1,"explanation":"It logs `false true true`."},{"prompt":"What does this log?\n\n```js\nconsole.log(null == 0, [] === false, \"1\" == 1);\n```","options":["`false true true`","`false false true`","`false false false`","`SyntaxError`"],"answer":1,"explanation":"It logs `false false true`."},{"prompt":"What does this log?\n\n```js\nconsole.log(NaN == NaN, undefined === 0, [] == false);\n```","options":["`false false false`","`SyntaxError`","`TypeError`","`false false true`"],"answer":3,"explanation":"It logs `false false true`."},{"prompt":"What does this log?\n\n```js\nconsole.log(0 == \"\", \" \" === 0, null === 0);\n```","options":["`SyntaxError`","`false false false`","`true false false`","`true true false`"],"answer":2,"explanation":"It logs `true false false`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"1\" == 1, 0 === \"\", \" \" == 0);\n```","options":["`SyntaxError`","`true true true`","`true false true`","`false false false`"],"answer":2,"explanation":"It logs `true false true`."}]
---
# Predict the Output: == vs === #25

`===` compares type and value. `==` converts types first, with surprising rules (`0 == ""` is `true`, but `null == 0` is `false`).

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
