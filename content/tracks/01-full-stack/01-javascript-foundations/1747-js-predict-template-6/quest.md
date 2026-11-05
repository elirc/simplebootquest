---
slug: "js-predict-template-6"
title: "Predict the Output: Template literals #6"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(`${1 + 5} items`);\n```","options":["`-4 items`","`1 + 5 items`","`6 items`","`TypeError`"],"answer":2,"explanation":"It logs `6 items`."},{"prompt":"What does this log?\n\n```js\nconsole.log(`${2 + 5} items`);\n```","options":["`TypeError`","`-3 items`","`2 + 5 items`","`7 items`"],"answer":3,"explanation":"It logs `7 items`."},{"prompt":"What does this log?\n\n```js\nconsole.log(`${9 + 6} items`);\n```","options":["`3 items`","`TypeError`","`15 items`","`9 + 6 items`"],"answer":2,"explanation":"It logs `15 items`."},{"prompt":"What does this log?\n\n```js\nconsole.log(`${1 + 7} items`);\n```","options":["`1 + 7 items`","`8 items`","`TypeError`","`-6 items`"],"answer":1,"explanation":"It logs `8 items`."},{"prompt":"What does this log?\n\n```js\nconsole.log(`${3 + 5} items`);\n```","options":["`8 items`","`3 + 5 items`","`TypeError`","`-2 items`"],"answer":0,"explanation":"It logs `8 items`."}]
---
# Predict the Output: Template literals #6

Inside `` `${…}` `` any expression is evaluated and converted to a string, including function calls and ternaries.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
