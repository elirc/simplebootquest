---
slug: "js-predict-template-4"
title: "Predict the Output: Template literals #4"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(`${7 + 4} items`);\n```","options":["`7 + 4 items`","`11 items`","`TypeError`","`3 items`"],"answer":1,"explanation":"It logs `11 items`."},{"prompt":"What does this log?\n\n```js\nconsole.log(`${4 + 5} items`);\n```","options":["`TypeError`","`4 + 5 items`","`9 items`","`-1 items`"],"answer":2,"explanation":"It logs `9 items`."},{"prompt":"What does this log?\n\n```js\nconsole.log(`${8 + 4} items`);\n```","options":["`12 items`","`8 + 4 items`","`4 items`","`TypeError`"],"answer":0,"explanation":"It logs `12 items`."},{"prompt":"What does this log?\n\n```js\nconsole.log(`${9 + 7} items`);\n```","options":["`2 items`","`16 items`","`9 + 7 items`","`TypeError`"],"answer":1,"explanation":"It logs `16 items`."},{"prompt":"What does this log?\n\n```js\nconsole.log(`${8 + 6} items`);\n```","options":["`8 + 6 items`","`TypeError`","`14 items`","`2 items`"],"answer":2,"explanation":"It logs `14 items`."}]
---
# Predict the Output: Template literals #4

Inside `` `${…}` `` any expression is evaluated and converted to a string, including function calls and ternaries.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
