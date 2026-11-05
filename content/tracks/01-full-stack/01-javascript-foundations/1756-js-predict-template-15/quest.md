---
slug: "js-predict-template-15"
title: "Predict the Output: Template literals #15"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(`${6 + 1} items`);\n```","options":["`5 items`","`7 items`","`6 + 1 items`","`TypeError`"],"answer":1,"explanation":"It logs `7 items`."},{"prompt":"What does this log?\n\n```js\nconsole.log(`${3 + 8} items`);\n```","options":["`-5 items`","`11 items`","`TypeError`","`3 + 8 items`"],"answer":1,"explanation":"It logs `11 items`."},{"prompt":"What does this log?\n\n```js\nconsole.log(`${1 + 8} items`);\n```","options":["`-7 items`","`TypeError`","`9 items`","`1 + 8 items`"],"answer":2,"explanation":"It logs `9 items`."},{"prompt":"What does this log?\n\n```js\nconsole.log(`${1 + 9} items`);\n```","options":["`TypeError`","`10 items`","`1 + 9 items`","`-8 items`"],"answer":1,"explanation":"It logs `10 items`."},{"prompt":"What does this log?\n\n```js\nconsole.log(`${3 + 9} items`);\n```","options":["`-6 items`","`TypeError`","`12 items`","`3 + 9 items`"],"answer":2,"explanation":"It logs `12 items`."}]
---
# Predict the Output: Template literals #15

Inside `` `${…}` `` any expression is evaluated and converted to a string, including function calls and ternaries.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
