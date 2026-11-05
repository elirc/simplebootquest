---
slug: "js-predict-template-9"
title: "Predict the Output: Template literals #9"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(`${5 + 4} items`);\n```","options":["`1 items`","`9 items`","`5 + 4 items`","`TypeError`"],"answer":1,"explanation":"It logs `9 items`."},{"prompt":"What does this log?\n\n```js\nconsole.log(`${3 + 7} items`);\n```","options":["`TypeError`","`-4 items`","`3 + 7 items`","`10 items`"],"answer":3,"explanation":"It logs `10 items`."},{"prompt":"What does this log?\n\n```js\nconsole.log(`${6 + 3} items`);\n```","options":["`6 + 3 items`","`9 items`","`TypeError`","`3 items`"],"answer":1,"explanation":"It logs `9 items`."},{"prompt":"What does this log?\n\n```js\nconsole.log(`${9 + 5} items`);\n```","options":["`4 items`","`TypeError`","`9 + 5 items`","`14 items`"],"answer":3,"explanation":"It logs `14 items`."},{"prompt":"What does this log?\n\n```js\nconsole.log(`${3 + 3} items`);\n```","options":["`3 + 3 items`","`TypeError`","`0 items`","`6 items`"],"answer":3,"explanation":"It logs `6 items`."}]
---
# Predict the Output: Template literals #9

Inside `` `${…}` `` any expression is evaluated and converted to a string, including function calls and ternaries.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
