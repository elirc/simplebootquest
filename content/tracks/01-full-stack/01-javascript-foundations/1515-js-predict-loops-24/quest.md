---
slug: "js-predict-loops-24"
title: "Predict the Output: Loop boundaries #24"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 2; i <= 6; i += 2) {\n  total += i;\n}\nconsole.log(total);\n```","options":["`6`","`7`","`12`","`8`"],"answer":2,"explanation":"It logs `12`."},{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 1; i <= 6; i += 1) {\n  total++;\n}\nconsole.log(total);\n```","options":["`3`","`6`","`TypeError`","`5`"],"answer":1,"explanation":"It logs `6`."},{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 3; i <= 9; i += 1) {\n  total += i;\n}\nconsole.log(total);\n```","options":["`24`","`39`","`33`","`42`"],"answer":3,"explanation":"It logs `42`."},{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 3; i < 7; i += 3) {\n  total += i * 2;\n}\nconsole.log(total);\n```","options":["`8`","`18`","`TypeError`","`6`"],"answer":1,"explanation":"It logs `18`."},{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 1; i < 8; i += 1) {\n  total += i * 2;\n}\nconsole.log(total);\n```","options":["`56`","`54`","`32`","`72`"],"answer":0,"explanation":"It logs `56`."}]
---
# Predict the Output: Loop boundaries #24

Most loop bugs are off-by-one: `<` vs `<=`, starting at 0 vs 1. Trace the first and last iteration by hand.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
