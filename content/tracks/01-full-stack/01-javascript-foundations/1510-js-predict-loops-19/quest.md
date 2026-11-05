---
slug: "js-predict-loops-19"
title: "Predict the Output: Loop boundaries #19"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 1; i < 4; i += 3) {\n  total += i * 2;\n}\nconsole.log(total);\n```","options":["`4`","`TypeError`","`10`","`2`"],"answer":3,"explanation":"It logs `2`."},{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 0; i < 5; i += 2) {\n  total += i;\n}\nconsole.log(total);\n```","options":["`4`","`6`","`3`","`TypeError`"],"answer":1,"explanation":"It logs `6`."},{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 1; i < 5; i += 2) {\n  total += i;\n}\nconsole.log(total);\n```","options":["`6`","`4`","`9`","`5`"],"answer":1,"explanation":"It logs `4`."},{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 0; i <= 7; i += 2) {\n  total += i * 2;\n}\nconsole.log(total);\n```","options":["`TypeError`","`24`","`18`","`32`"],"answer":1,"explanation":"It logs `24`."},{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 1; i <= 4; i += 2) {\n  total += i;\n}\nconsole.log(total);\n```","options":["`TypeError`","`5`","`6`","`4`"],"answer":3,"explanation":"It logs `4`."}]
---
# Predict the Output: Loop boundaries #19

Most loop bugs are off-by-one: `<` vs `<=`, starting at 0 vs 1. Trace the first and last iteration by hand.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
