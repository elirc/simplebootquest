---
slug: "js-predict-template-13"
title: "Predict the Output: Template literals #13"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(`${8 + 2} items`);\n```","options":["`TypeError`","`6 items`","`10 items`","`8 + 2 items`"],"answer":2,"explanation":"It logs `10 items`."},{"prompt":"What does this log?\n\n```js\nconsole.log(`${5 + 9} items`);\n```","options":["`-4 items`","`TypeError`","`14 items`","`5 + 9 items`"],"answer":2,"explanation":"It logs `14 items`."},{"prompt":"What does this log?\n\n```js\nconsole.log(`${9 + 1} items`);\n```","options":["`10 items`","`8 items`","`TypeError`","`9 + 1 items`"],"answer":0,"explanation":"It logs `10 items`."},{"prompt":"What does this log?\n\n```js\nconsole.log(`${1 + 3} items`);\n```","options":["`4 items`","`-2 items`","`TypeError`","`1 + 3 items`"],"answer":0,"explanation":"It logs `4 items`."},{"prompt":"What does this log?\n\n```js\nconsole.log(`${3 + 6} items`);\n```","options":["`-3 items`","`9 items`","`TypeError`","`3 + 6 items`"],"answer":1,"explanation":"It logs `9 items`."}]
---
# Predict the Output: Template literals #13

Inside `` `${…}` `` any expression is evaluated and converted to a string, including function calls and ternaries.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
