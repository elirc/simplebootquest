---
slug: "js-predict-loops-17"
title: "Predict the Output: Loop boundaries #17"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 1; i <= 5; i += 3) {\n  total += i * 2;\n}\nconsole.log(total);\n```","options":["`TypeError`","`12`","`10`","`14`"],"answer":2,"explanation":"It logs `10`."},{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 3; i < 9; i += 1) {\n  total += i;\n}\nconsole.log(total);\n```","options":["`33`","`15`","`30`","`42`"],"answer":0,"explanation":"It logs `33`."},{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 0; i < 5; i += 3) {\n  total += i;\n}\nconsole.log(total);\n```","options":["`TypeError`","`5`","`4`","`3`"],"answer":3,"explanation":"It logs `3`."},{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 1; i < 5; i += 1) {\n  total += i;\n}\nconsole.log(total);\n```","options":["`4`","`9`","`10`","`15`"],"answer":2,"explanation":"It logs `10`."},{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 0; i <= 9; i += 1) {\n  total += i;\n}\nconsole.log(total);\n```","options":["`20`","`36`","`TypeError`","`45`"],"answer":3,"explanation":"It logs `45`."}]
---
# Predict the Output: Loop boundaries #17

Most loop bugs are off-by-one: `<` vs `<=`, starting at 0 vs 1. Trace the first and last iteration by hand.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
