---
slug: "js-predict-loops-21"
title: "Predict the Output: Loop boundaries #21"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 1; i <= 7; i += 2) {\n  total += i * 2;\n}\nconsole.log(total);\n```","options":["`32`","`18`","`TypeError`","`24`"],"answer":0,"explanation":"It logs `32`."},{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 2; i <= 9; i += 3) {\n  total += i * 2;\n}\nconsole.log(total);\n```","options":["`36`","`30`","`16`","`TypeError`"],"answer":1,"explanation":"It logs `30`."},{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 1; i <= 6; i += 3) {\n  total += i * 2;\n}\nconsole.log(total);\n```","options":["`TypeError`","`10`","`14`","`12`"],"answer":1,"explanation":"It logs `10`."},{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 2; i <= 4; i += 2) {\n  total += i * 2;\n}\nconsole.log(total);\n```","options":["`4`","`TypeError`","`12`","`6`"],"answer":2,"explanation":"It logs `12`."},{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 2; i < 5; i += 1) {\n  total++;\n}\nconsole.log(total);\n```","options":["`TypeError`","`4`","`2`","`3`"],"answer":3,"explanation":"It logs `3`."}]
---
# Predict the Output: Loop boundaries #21

Most loop bugs are off-by-one: `<` vs `<=`, starting at 0 vs 1. Trace the first and last iteration by hand.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
