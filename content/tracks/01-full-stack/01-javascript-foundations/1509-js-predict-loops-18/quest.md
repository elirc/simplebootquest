---
slug: "js-predict-loops-18"
title: "Predict the Output: Loop boundaries #18"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 1; i <= 4; i += 3) {\n  total += i * 2;\n}\nconsole.log(total);\n```","options":["`10`","`2`","`4`","`TypeError`"],"answer":0,"explanation":"It logs `10`."},{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 2; i <= 5; i += 1) {\n  total += i;\n}\nconsole.log(total);\n```","options":["`6`","`12`","`9`","`14`"],"answer":3,"explanation":"It logs `14`."},{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 1; i < 8; i += 1) {\n  total += i;\n}\nconsole.log(total);\n```","options":["`36`","`28`","`27`","`16`"],"answer":1,"explanation":"It logs `28`."},{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 3; i <= 4; i += 1) {\n  total += i;\n}\nconsole.log(total);\n```","options":["`4`","`7`","`3`","`TypeError`"],"answer":1,"explanation":"It logs `7`."},{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 2; i <= 7; i += 1) {\n  total++;\n}\nconsole.log(total);\n```","options":["`TypeError`","`3`","`6`","`5`"],"answer":2,"explanation":"It logs `6`."}]
---
# Predict the Output: Loop boundaries #18

Most loop bugs are off-by-one: `<` vs `<=`, starting at 0 vs 1. Trace the first and last iteration by hand.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
