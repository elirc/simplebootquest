---
slug: "js-predict-loops-22"
title: "Predict the Output: Loop boundaries #22"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 2; i < 6; i += 2) {\n  total += i * 2;\n}\nconsole.log(total);\n```","options":["`24`","`16`","`14`","`12`"],"answer":3,"explanation":"It logs `12`."},{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 0; i <= 8; i += 2) {\n  total += i * 2;\n}\nconsole.log(total);\n```","options":["`24`","`18`","`32`","`40`"],"answer":3,"explanation":"It logs `40`."},{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 3; i <= 9; i += 3) {\n  total += i * 2;\n}\nconsole.log(total);\n```","options":["`36`","`18`","`22`","`20`"],"answer":0,"explanation":"It logs `36`."},{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 0; i <= 6; i += 2) {\n  total += i * 2;\n}\nconsole.log(total);\n```","options":["`18`","`12`","`24`","`TypeError`"],"answer":2,"explanation":"It logs `24`."},{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 3; i <= 9; i += 2) {\n  total += i;\n}\nconsole.log(total);\n```","options":["`24`","`TypeError`","`18`","`15`"],"answer":0,"explanation":"It logs `24`."}]
---
# Predict the Output: Loop boundaries #22

Most loop bugs are off-by-one: `<` vs `<=`, starting at 0 vs 1. Trace the first and last iteration by hand.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
