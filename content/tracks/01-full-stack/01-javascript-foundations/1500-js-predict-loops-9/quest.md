---
slug: "js-predict-loops-9"
title: "Predict the Output: Loop boundaries #9"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 0; i <= 4; i += 1) {\n  total++;\n}\nconsole.log(total);\n```","options":["`3`","`5`","`TypeError`","`4`"],"answer":1,"explanation":"It logs `5`."},{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 2; i < 7; i += 2) {\n  total += i;\n}\nconsole.log(total);\n```","options":["`TypeError`","`12`","`7`","`8`"],"answer":1,"explanation":"It logs `12`."},{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 0; i < 4; i += 1) {\n  total += i;\n}\nconsole.log(total);\n```","options":["`10`","`TypeError`","`6`","`2`"],"answer":2,"explanation":"It logs `6`."},{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 3; i < 4; i += 1) {\n  total++;\n}\nconsole.log(total);\n```","options":["`1`","`2`","`TypeError`","`0`"],"answer":0,"explanation":"It logs `1`."},{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 3; i < 9; i += 3) {\n  total += i;\n}\nconsole.log(total);\n```","options":["`10`","`18`","`11`","`9`"],"answer":3,"explanation":"It logs `9`."}]
---
# Predict the Output: Loop boundaries #9

Most loop bugs are off-by-one: `<` vs `<=`, starting at 0 vs 1. Trace the first and last iteration by hand.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
