---
slug: "js-predict-loops-6"
title: "Predict the Output: Loop boundaries #6"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 2; i < 8; i += 3) {\n  total += i * 2;\n}\nconsole.log(total);\n```","options":["`16`","`30`","`14`","`18`"],"answer":2,"explanation":"It logs `14`."},{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 3; i <= 8; i += 1) {\n  total += i;\n}\nconsole.log(total);\n```","options":["`25`","`15`","`30`","`33`"],"answer":3,"explanation":"It logs `33`."},{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 3; i <= 6; i += 3) {\n  total += i;\n}\nconsole.log(total);\n```","options":["`3`","`4`","`9`","`TypeError`"],"answer":2,"explanation":"It logs `9`."},{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 1; i <= 5; i += 2) {\n  total += i;\n}\nconsole.log(total);\n```","options":["`9`","`5`","`4`","`6`"],"answer":0,"explanation":"It logs `9`."},{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 0; i <= 5; i += 1) {\n  total++;\n}\nconsole.log(total);\n```","options":["`6`","`TypeError`","`5`","`3`"],"answer":0,"explanation":"It logs `6`."}]
---
# Predict the Output: Loop boundaries #6

Most loop bugs are off-by-one: `<` vs `<=`, starting at 0 vs 1. Trace the first and last iteration by hand.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
