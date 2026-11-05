---
slug: "js-predict-loops-11"
title: "Predict the Output: Loop boundaries #11"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 0; i <= 4; i += 3) {\n  total += i * 2;\n}\nconsole.log(total);\n```","options":["`TypeError`","`10`","`8`","`6`"],"answer":3,"explanation":"It logs `6`."},{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 1; i < 4; i += 3) {\n  total += i;\n}\nconsole.log(total);\n```","options":["`2`","`TypeError`","`5`","`1`"],"answer":3,"explanation":"It logs `1`."},{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 1; i <= 6; i += 3) {\n  total += i;\n}\nconsole.log(total);\n```","options":["`7`","`TypeError`","`6`","`5`"],"answer":3,"explanation":"It logs `5`."},{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 2; i < 6; i += 2) {\n  total += i;\n}\nconsole.log(total);\n```","options":["`7`","`8`","`6`","`12`"],"answer":2,"explanation":"It logs `6`."},{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 2; i < 9; i += 1) {\n  total++;\n}\nconsole.log(total);\n```","options":["`8`","`4`","`6`","`7`"],"answer":3,"explanation":"It logs `7`."}]
---
# Predict the Output: Loop boundaries #11

Most loop bugs are off-by-one: `<` vs `<=`, starting at 0 vs 1. Trace the first and last iteration by hand.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
