---
slug: "js-predict-equality-3"
title: "Predict the Output: == vs === #3"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log([1] == 1, null === undefined, \"0\" === false);\n```","options":["`false false false`","`true false false`","`true true true`","`SyntaxError`"],"answer":1,"explanation":"It logs `true false false`."},{"prompt":"What does this log?\n\n```js\nconsole.log(null === undefined, 0 == \"\", \"0\" === false);\n```","options":["`SyntaxError`","`true true true`","`false false false`","`false true false`"],"answer":3,"explanation":"It logs `false true false`."},{"prompt":"What does this log?\n\n```js\nconsole.log([] === false, null === undefined, NaN == NaN);\n```","options":["`TypeError`","`false false false`","`SyntaxError`","`true true false`"],"answer":1,"explanation":"It logs `false false false`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\" \" == 0, null === 0, [] == false);\n```","options":["`true false true`","`SyntaxError`","`false false false`","`TypeError`"],"answer":0,"explanation":"It logs `true false true`."},{"prompt":"What does this log?\n\n```js\nconsole.log(NaN == NaN, \" \" == 0, undefined === 0);\n```","options":["`false true false`","`TypeError`","`false false false`","`SyntaxError`"],"answer":0,"explanation":"It logs `false true false`."}]
---
# Predict the Output: == vs === #3

`===` compares type and value. `==` converts types first, with surprising rules (`0 == ""` is `true`, but `null == 0` is `false`).

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
