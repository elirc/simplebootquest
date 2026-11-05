---
slug: "js-predict-template-10"
title: "Predict the Output: Template literals #10"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(`${7 + 7} items`);\n```","options":["`7 + 7 items`","`0 items`","`TypeError`","`14 items`"],"answer":3,"explanation":"It logs `14 items`."},{"prompt":"What does this log?\n\n```js\nconsole.log(`${7 + 5} items`);\n```","options":["`12 items`","`7 + 5 items`","`2 items`","`TypeError`"],"answer":0,"explanation":"It logs `12 items`."},{"prompt":"What does this log?\n\n```js\nconsole.log(`${8 + 3} items`);\n```","options":["`11 items`","`5 items`","`8 + 3 items`","`TypeError`"],"answer":0,"explanation":"It logs `11 items`."},{"prompt":"What does this log?\n\n```js\nconsole.log(`${7 + 6} items`);\n```","options":["`7 + 6 items`","`13 items`","`1 items`","`TypeError`"],"answer":1,"explanation":"It logs `13 items`."},{"prompt":"What does this log?\n\n```js\nconsole.log(`${9 + 2} items`);\n```","options":["`9 + 2 items`","`11 items`","`TypeError`","`7 items`"],"answer":1,"explanation":"It logs `11 items`."}]
---
# Predict the Output: Template literals #10

Inside `` `${…}` `` any expression is evaluated and converted to a string, including function calls and ternaries.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
