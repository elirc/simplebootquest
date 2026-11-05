---
slug: "js-predict-equality-18"
title: "Predict the Output: == vs === #18"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(null === undefined, [1] == 1, 0 === \"\");\n```","options":["`false true false`","`false false false`","`true true true`","`SyntaxError`"],"answer":0,"explanation":"It logs `false true false`."},{"prompt":"What does this log?\n\n```js\nconsole.log(undefined == 0, NaN == NaN, \" \" === 0);\n```","options":["`TypeError`","`false false true`","`SyntaxError`","`false false false`"],"answer":3,"explanation":"It logs `false false false`."},{"prompt":"What does this log?\n\n```js\nconsole.log(undefined == 0, [] == false, [1] == 1);\n```","options":["`TypeError`","`SyntaxError`","`false false false`","`false true true`"],"answer":3,"explanation":"It logs `false true true`."},{"prompt":"What does this log?\n\n```js\nconsole.log(\"0\" === false, undefined == 0, null === 0);\n```","options":["`true false false`","`SyntaxError`","`false false false`","`TypeError`"],"answer":2,"explanation":"It logs `false false false`."},{"prompt":"What does this log?\n\n```js\nconsole.log(0 === \"\", \"0\" == false, undefined == 0);\n```","options":["`false false false`","`SyntaxError`","`false true false`","`true true false`"],"answer":2,"explanation":"It logs `false true false`."}]
---
# Predict the Output: == vs === #18

`===` compares type and value. `==` converts types first, with surprising rules (`0 == ""` is `true`, but `null == 0` is `false`).

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
