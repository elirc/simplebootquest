---
slug: "js-predict-loops-25"
title: "Predict the Output: Loop boundaries #25"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 0; i < 6; i += 3) {\n  total += i * 2;\n}\nconsole.log(total);\n```","options":["`6`","`8`","`18`","`10`"],"answer":0,"explanation":"It logs `6`."},{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 1; i < 4; i += 1) {\n  total += i * 2;\n}\nconsole.log(total);\n```","options":["`8`","`10`","`20`","`12`"],"answer":3,"explanation":"It logs `12`."},{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 1; i <= 5; i += 1) {\n  total++;\n}\nconsole.log(total);\n```","options":["`4`","`3`","`TypeError`","`5`"],"answer":3,"explanation":"It logs `5`."},{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 2; i < 5; i += 1) {\n  total += i * 2;\n}\nconsole.log(total);\n```","options":["`14`","`18`","`28`","`12`"],"answer":1,"explanation":"It logs `18`."},{"prompt":"What does this log?\n\n```js\nlet total = 0;\nfor (let i = 1; i < 7; i += 1) {\n  total += i * 2;\n}\nconsole.log(total);\n```","options":["`56`","`42`","`40`","`18`"],"answer":1,"explanation":"It logs `42`."}]
---
# Predict the Output: Loop boundaries #25

Most loop bugs are off-by-one: `<` vs `<=`, starting at 0 vs 1. Trace the first and last iteration by hand.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
