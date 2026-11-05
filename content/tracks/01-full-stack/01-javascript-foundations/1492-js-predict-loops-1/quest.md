---
slug: "js-predict-loops-1"
title: "Predict the Output: Loop boundaries #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 1; i < 4; i += 1) {\n  total += i;\n}\nconsole.log(total);\n```","options":["`10`","`6`","`5`","`4`"],"answer":1,"explanation":"It logs `6`."},{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 0; i < 7; i += 1) {\n  total += i;\n}\nconsole.log(total);\n```","options":["`12`","`TypeError`","`28`","`21`"],"answer":3,"explanation":"It logs `21`."},{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 1; i <= 6; i += 1) {\n  total += i;\n}\nconsole.log(total);\n```","options":["`21`","`15`","`20`","`9`"],"answer":0,"explanation":"It logs `21`."},{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 2; i < 7; i += 3) {\n  total += i;\n}\nconsole.log(total);\n```","options":["`8`","`7`","`TypeError`","`9`"],"answer":1,"explanation":"It logs `7`."},{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 3; i <= 8; i += 1) {\n  total += i * 2;\n}\nconsole.log(total);\n```","options":["`66`","`30`","`60`","`50`"],"answer":0,"explanation":"It logs `66`."}]
---
# Predict the Output: Loop boundaries #1

Most loop bugs are off-by-one: `<` vs `<=`, starting at 0 vs 1. Trace the first and last iteration by hand.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
