---
slug: "js-predict-loops-4"
title: "Predict the Output: Loop boundaries #4"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 3; i < 6; i += 1) {\n  total += i;\n}\nconsole.log(total);\n```","options":["`18`","`9`","`12`","`8`"],"answer":2,"explanation":"It logs `12`."},{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 3; i <= 9; i += 1) {\n  total++;\n}\nconsole.log(total);\n```","options":["`7`","`TypeError`","`4`","`6`"],"answer":0,"explanation":"It logs `7`."},{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 2; i < 8; i += 1) {\n  total += i;\n}\nconsole.log(total);\n```","options":["`25`","`27`","`12`","`35`"],"answer":1,"explanation":"It logs `27`."},{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 1; i < 9; i += 1) {\n  total++;\n}\nconsole.log(total);\n```","options":["`8`","`4`","`9`","`7`"],"answer":0,"explanation":"It logs `8`."},{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 1; i < 6; i += 1) {\n  total += i;\n}\nconsole.log(total);\n```","options":["`14`","`9`","`21`","`15`"],"answer":3,"explanation":"It logs `15`."}]
---
# Predict the Output: Loop boundaries #4

Most loop bugs are off-by-one: `<` vs `<=`, starting at 0 vs 1. Trace the first and last iteration by hand.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
