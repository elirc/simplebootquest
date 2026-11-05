---
slug: "js-predict-loops-15"
title: "Predict the Output: Loop boundaries #15"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 3; i <= 7; i += 1) {\n  total++;\n}\nconsole.log(total);\n```","options":["`3`","`TypeError`","`5`","`4`"],"answer":2,"explanation":"It logs `5`."},{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 1; i <= 7; i += 3) {\n  total += i * 2;\n}\nconsole.log(total);\n```","options":["`10`","`24`","`14`","`12`"],"answer":1,"explanation":"It logs `24`."},{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 1; i < 5; i += 2) {\n  total += i * 2;\n}\nconsole.log(total);\n```","options":["`12`","`8`","`18`","`10`"],"answer":1,"explanation":"It logs `8`."},{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 1; i <= 7; i += 3) {\n  total += i;\n}\nconsole.log(total);\n```","options":["`7`","`12`","`5`","`6`"],"answer":1,"explanation":"It logs `12`."},{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 3; i < 9; i += 2) {\n  total += i * 2;\n}\nconsole.log(total);\n```","options":["`48`","`18`","`36`","`30`"],"answer":3,"explanation":"It logs `30`."}]
---
# Predict the Output: Loop boundaries #15

Most loop bugs are off-by-one: `<` vs `<=`, starting at 0 vs 1. Trace the first and last iteration by hand.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
