---
slug: "js-predict-template-12"
title: "Predict the Output: Template literals #12"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(`${2 + 6} items`);\n```","options":["`2 + 6 items`","`8 items`","`-4 items`","`TypeError`"],"answer":1,"explanation":"It logs `8 items`."},{"prompt":"What does this log?\n\n```js\nconsole.log(`${8 + 1} items`);\n```","options":["`8 + 1 items`","`7 items`","`TypeError`","`9 items`"],"answer":3,"explanation":"It logs `9 items`."},{"prompt":"What does this log?\n\n```js\nconsole.log(`${5 + 8} items`);\n```","options":["`5 + 8 items`","`-3 items`","`TypeError`","`13 items`"],"answer":3,"explanation":"It logs `13 items`."},{"prompt":"What does this log?\n\n```js\nconsole.log(`${3 + 1} items`);\n```","options":["`4 items`","`3 + 1 items`","`2 items`","`TypeError`"],"answer":0,"explanation":"It logs `4 items`."},{"prompt":"What does this log?\n\n```js\nconsole.log(`${2 + 3} items`);\n```","options":["`2 + 3 items`","`TypeError`","`5 items`","`-1 items`"],"answer":2,"explanation":"It logs `5 items`."}]
---
# Predict the Output: Template literals #12

Inside `` `${…}` `` any expression is evaluated and converted to a string, including function calls and ternaries.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
