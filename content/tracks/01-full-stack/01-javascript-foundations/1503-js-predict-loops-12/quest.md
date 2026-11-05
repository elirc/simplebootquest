---
slug: "js-predict-loops-12"
title: "Predict the Output: Loop boundaries #12"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 3; i < 6; i += 3) {\n  total += i * 2;\n}\nconsole.log(total);\n```","options":["`TypeError`","`18`","`6`","`8`"],"answer":2,"explanation":"It logs `6`."},{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 0; i <= 8; i += 2) {\n  total++;\n}\nconsole.log(total);\n```","options":["`3`","`TypeError`","`5`","`4`"],"answer":2,"explanation":"It logs `5`."},{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 3; i < 7; i += 1) {\n  total += i * 2;\n}\nconsole.log(total);\n```","options":["`50`","`36`","`30`","`16`"],"answer":1,"explanation":"It logs `36`."},{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 0; i <= 8; i += 1) {\n  total += i * 2;\n}\nconsole.log(total);\n```","options":["`56`","`TypeError`","`40`","`72`"],"answer":3,"explanation":"It logs `72`."},{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 2; i < 7; i += 1) {\n  total += i;\n}\nconsole.log(total);\n```","options":["`27`","`18`","`20`","`12`"],"answer":2,"explanation":"It logs `20`."}]
---
# Predict the Output: Loop boundaries #12

Most loop bugs are off-by-one: `<` vs `<=`, starting at 0 vs 1. Trace the first and last iteration by hand.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
