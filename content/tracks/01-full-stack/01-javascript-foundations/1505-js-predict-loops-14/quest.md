---
slug: "js-predict-loops-14"
title: "Predict the Output: Loop boundaries #14"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 3; i < 9; i += 1) {\n  total++;\n}\nconsole.log(total);\n```","options":["`6`","`3`","`5`","`7`"],"answer":0,"explanation":"It logs `6`."},{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 2; i < 9; i += 1) {\n  total += i * 2;\n}\nconsole.log(total);\n```","options":["`66`","`40`","`70`","`88`"],"answer":2,"explanation":"It logs `70`."},{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 2; i < 8; i += 2) {\n  total += i * 2;\n}\nconsole.log(total);\n```","options":["`24`","`30`","`40`","`14`"],"answer":0,"explanation":"It logs `24`."},{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 2; i <= 8; i += 3) {\n  total += i * 2;\n}\nconsole.log(total);\n```","options":["`14`","`18`","`30`","`16`"],"answer":2,"explanation":"It logs `30`."},{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 3; i < 6; i += 1) {\n  total++;\n}\nconsole.log(total);\n```","options":["`3`","`2`","`TypeError`","`4`"],"answer":0,"explanation":"It logs `3`."}]
---
# Predict the Output: Loop boundaries #14

Most loop bugs are off-by-one: `<` vs `<=`, starting at 0 vs 1. Trace the first and last iteration by hand.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
