---
slug: "async-predict-var-loop-1"
title: "Predict the Output: var vs let in loops #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nfor (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 0);\n}\n```","options":["`3 ⏎ 3 ⏎ 3`","`TypeError`","`0 ⏎ 1 ⏎ 2`","`4 ⏎ 4 ⏎ 4 ⏎ 4`"],"answer":0,"explanation":"It logs `3 ⏎ 3 ⏎ 3`."},{"prompt":"What does this log?\n\n```js\nfor (var i = 0; i < 4; i++) {\n  setTimeout(() => console.log(i), 0);\n}\n```","options":["`0 ⏎ 1 ⏎ 2 ⏎ 3`","`4 ⏎ 4 ⏎ 4 ⏎ 4`","`TypeError`","`5 ⏎ 5 ⏎ 5 ⏎ 5 ⏎ 5`"],"answer":1,"explanation":"It logs `4 ⏎ 4 ⏎ 4 ⏎ 4`."},{"prompt":"What does this log?\n\n```js\nfor (let i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 0);\n}\n```","options":["`TypeError`","`3 ⏎ 3 ⏎ 3`","`0 ⏎ 1 ⏎ 2`","`0 ⏎ 1 ⏎ 2 ⏎ 3`"],"answer":2,"explanation":"It logs `0 ⏎ 1 ⏎ 2`."},{"prompt":"What does this log?\n\n```js\nfor (let i = 0; i < 2; i++) {\n  setTimeout(() => console.log(i), 0);\n}\n```","options":["`TypeError`","`0 ⏎ 1`","`0 ⏎ 1 ⏎ 2`","`2 ⏎ 2`"],"answer":1,"explanation":"It logs `0 ⏎ 1`."},{"prompt":"What does this log?\n\n```js\nfor (let i = 0; i < 4; i++) {\n  setTimeout(() => console.log(i), 0);\n}\n```","options":["`TypeError`","`4 ⏎ 4 ⏎ 4 ⏎ 4`","`0 ⏎ 1 ⏎ 2 ⏎ 3 ⏎ 4`","`0 ⏎ 1 ⏎ 2 ⏎ 3`"],"answer":3,"explanation":"It logs `0 ⏎ 1 ⏎ 2 ⏎ 3`."}]
---
# Predict the Output: var vs let in loops #1

`var` is function-scoped, so every callback created in a `var` loop sees the same final value. `let` creates a new binding per iteration.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
