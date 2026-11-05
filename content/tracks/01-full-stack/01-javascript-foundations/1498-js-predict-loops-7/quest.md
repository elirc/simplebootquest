---
slug: "js-predict-loops-7"
title: "Predict the Output: Loop boundaries #7"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 0; i <= 8; i += 1) {\n  total += i;\n}\nconsole.log(total);\n```","options":["`20`","`36`","`28`","`TypeError`"],"answer":1,"explanation":"It logs `36`."},{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 2; i <= 6; i += 3) {\n  total += i;\n}\nconsole.log(total);\n```","options":["`8`","`9`","`TypeError`","`7`"],"answer":3,"explanation":"It logs `7`."},{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 2; i < 6; i += 3) {\n  total += i * 2;\n}\nconsole.log(total);\n```","options":["`4`","`TypeError`","`6`","`14`"],"answer":3,"explanation":"It logs `14`."},{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 0; i < 6; i += 1) {\n  total += i;\n}\nconsole.log(total);\n```","options":["`21`","`15`","`TypeError`","`6`"],"answer":1,"explanation":"It logs `15`."},{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 3; i < 4; i += 1) {\n  total += i * 2;\n}\nconsole.log(total);\n```","options":["`14`","`0`","`TypeError`","`6`"],"answer":3,"explanation":"It logs `6`."}]
---
# Predict the Output: Loop boundaries #7

Most loop bugs are off-by-one: `<` vs `<=`, starting at 0 vs 1. Trace the first and last iteration by hand.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
