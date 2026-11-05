---
slug: "js-predict-loops-23"
title: "Predict the Output: Loop boundaries #23"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 3; i <= 7; i += 2) {\n  total += i * 2;\n}\nconsole.log(total);\n```","options":["`30`","`18`","`16`","`20`"],"answer":0,"explanation":"It logs `30`."},{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 1; i <= 9; i += 1) {\n  total += i;\n}\nconsole.log(total);\n```","options":["`44`","`45`","`36`","`25`"],"answer":1,"explanation":"It logs `45`."},{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 3; i < 7; i += 1) {\n  total += i;\n}\nconsole.log(total);\n```","options":["`18`","`15`","`25`","`8`"],"answer":0,"explanation":"It logs `18`."},{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 3; i < 8; i += 1) {\n  total++;\n}\nconsole.log(total);\n```","options":["`3`","`5`","`4`","`6`"],"answer":1,"explanation":"It logs `5`."},{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 1; i <= 4; i += 2) {\n  total += i * 2;\n}\nconsole.log(total);\n```","options":["`8`","`10`","`TypeError`","`12`"],"answer":0,"explanation":"It logs `8`."}]
---
# Predict the Output: Loop boundaries #23

Most loop bugs are off-by-one: `<` vs `<=`, starting at 0 vs 1. Trace the first and last iteration by hand.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
