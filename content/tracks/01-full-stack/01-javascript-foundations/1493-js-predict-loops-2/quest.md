---
slug: "js-predict-loops-2"
title: "Predict the Output: Loop boundaries #2"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 1; i <= 9; i += 2) {\n  total += i * 2;\n}\nconsole.log(total);\n```","options":["`40`","`50`","`32`","`24`"],"answer":1,"explanation":"It logs `50`."},{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 3; i < 6; i += 1) {\n  total += i * 2;\n}\nconsole.log(total);\n```","options":["`18`","`36`","`16`","`24`"],"answer":3,"explanation":"It logs `24`."},{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 1; i < 8; i += 3) {\n  total += i * 2;\n}\nconsole.log(total);\n```","options":["`24`","`14`","`TypeError`","`12`"],"answer":0,"explanation":"It logs `24`."},{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 0; i < 5; i += 1) {\n  total += i;\n}\nconsole.log(total);\n```","options":["`TypeError`","`6`","`10`","`15`"],"answer":2,"explanation":"It logs `10`."},{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 0; i <= 9; i += 2) {\n  total += i;\n}\nconsole.log(total);\n```","options":["`18`","`TypeError`","`25`","`20`"],"answer":3,"explanation":"It logs `20`."}]
---
# Predict the Output: Loop boundaries #2

Most loop bugs are off-by-one: `<` vs `<=`, starting at 0 vs 1. Trace the first and last iteration by hand.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
