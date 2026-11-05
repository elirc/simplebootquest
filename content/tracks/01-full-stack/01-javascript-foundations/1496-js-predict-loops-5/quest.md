---
slug: "js-predict-loops-5"
title: "Predict the Output: Loop boundaries #5"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 1; i < 9; i += 3) {\n  total += i * 2;\n}\nconsole.log(total);\n```","options":["`TypeError`","`30`","`24`","`12`"],"answer":2,"explanation":"It logs `24`."},{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 0; i <= 7; i += 1) {\n  total += i;\n}\nconsole.log(total);\n```","options":["`28`","`TypeError`","`12`","`21`"],"answer":0,"explanation":"It logs `28`."},{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 2; i <= 8; i += 1) {\n  total += i * 2;\n}\nconsole.log(total);\n```","options":["`66`","`54`","`70`","`40`"],"answer":2,"explanation":"It logs `70`."},{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 3; i <= 9; i += 1) {\n  total += i * 2;\n}\nconsole.log(total);\n```","options":["`66`","`78`","`84`","`48`"],"answer":2,"explanation":"It logs `84`."},{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 1; i <= 4; i += 1) {\n  total += i;\n}\nconsole.log(total);\n```","options":["`10`","`6`","`9`","`4`"],"answer":0,"explanation":"It logs `10`."}]
---
# Predict the Output: Loop boundaries #5

Most loop bugs are off-by-one: `<` vs `<=`, starting at 0 vs 1. Trace the first and last iteration by hand.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
