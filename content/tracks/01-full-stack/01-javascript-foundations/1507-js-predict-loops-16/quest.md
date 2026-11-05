---
slug: "js-predict-loops-16"
title: "Predict the Output: Loop boundaries #16"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 0; i < 6; i += 1) {\n  total++;\n}\nconsole.log(total);\n```","options":["`3`","`7`","`6`","`5`"],"answer":2,"explanation":"It logs `6`."},{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 3; i <= 6; i += 2) {\n  total += i;\n}\nconsole.log(total);\n```","options":["`TypeError`","`9`","`10`","`8`"],"answer":3,"explanation":"It logs `8`."},{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 0; i <= 5; i += 2) {\n  total += i * 2;\n}\nconsole.log(total);\n```","options":["`18`","`TypeError`","`12`","`6`"],"answer":2,"explanation":"It logs `12`."},{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 2; i <= 7; i += 3) {\n  total += i * 2;\n}\nconsole.log(total);\n```","options":["`14`","`16`","`18`","`TypeError`"],"answer":0,"explanation":"It logs `14`."},{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 1; i <= 8; i += 3) {\n  total += i;\n}\nconsole.log(total);\n```","options":["`15`","`6`","`TypeError`","`12`"],"answer":3,"explanation":"It logs `12`."}]
---
# Predict the Output: Loop boundaries #16

Most loop bugs are off-by-one: `<` vs `<=`, starting at 0 vs 1. Trace the first and last iteration by hand.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
