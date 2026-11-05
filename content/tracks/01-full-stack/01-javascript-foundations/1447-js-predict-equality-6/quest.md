---
slug: "js-predict-equality-6"
title: "Predict the Output: == vs === #6"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(NaN === NaN, \"0\" === false, \" \" == 0);\n```","options":["`SyntaxError`","`false true true`","`false false false`","`false false true`"],"answer":3,"explanation":"It logs `false false true`."},{"prompt":"What does this log?\n\n```js\nconsole.log(NaN === NaN, [] === false, undefined == 0);\n```","options":["`false false false`","`false true false`","`TypeError`","`SyntaxError`"],"answer":0,"explanation":"It logs `false false false`."},{"prompt":"What does this log?\n\n```js\nconsole.log(null == 0, \" \" == 0, 0 === \"\");\n```","options":["`SyntaxError`","`false false false`","`false true true`","`false true false`"],"answer":3,"explanation":"It logs `false true false`."},{"prompt":"What does this log?\n\n```js\nconsole.log(undefined == 0, \"1\" == 1, [] == false);\n```","options":["`false false false`","`TypeError`","`false true true`","`SyntaxError`"],"answer":2,"explanation":"It logs `false true true`."},{"prompt":"What does this log?\n\n```js\nconsole.log(null == 0, NaN === NaN, 0 == \"\");\n```","options":["`SyntaxError`","`false false false`","`TypeError`","`false false true`"],"answer":3,"explanation":"It logs `false false true`."}]
---
# Predict the Output: == vs === #6

`===` compares type and value. `==` converts types first, with surprising rules (`0 == ""` is `true`, but `null == 0` is `false`).

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
