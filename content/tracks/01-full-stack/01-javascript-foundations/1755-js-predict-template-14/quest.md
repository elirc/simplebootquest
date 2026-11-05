---
slug: "js-predict-template-14"
title: "Predict the Output: Template literals #14"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(`${5 + 1} items`);\n```","options":["`6 items`","`5 + 1 items`","`4 items`","`TypeError`"],"answer":0,"explanation":"It logs `6 items`."},{"prompt":"What does this log?\n\n```js\nconsole.log(`${3 + 4} items`);\n```","options":["`7 items`","`-1 items`","`TypeError`","`3 + 4 items`"],"answer":0,"explanation":"It logs `7 items`."},{"prompt":"What does this log?\n\n```js\nconsole.log(`${1 + 4} items`);\n```","options":["`TypeError`","`5 items`","`-3 items`","`1 + 4 items`"],"answer":1,"explanation":"It logs `5 items`."},{"prompt":"What does this log?\n\n```js\nconsole.log(`${5 + 3} items`);\n```","options":["`5 + 3 items`","`8 items`","`2 items`","`TypeError`"],"answer":1,"explanation":"It logs `8 items`."},{"prompt":"What does this log?\n\n```js\nconsole.log(`${2 + 9} items`);\n```","options":["`11 items`","`-7 items`","`TypeError`","`2 + 9 items`"],"answer":0,"explanation":"It logs `11 items`."}]
---
# Predict the Output: Template literals #14

Inside `` `${…}` `` any expression is evaluated and converted to a string, including function calls and ternaries.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
