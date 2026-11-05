---
slug: "js-predict-template-3"
title: "Predict the Output: Template literals #3"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(`${2 + 8} items`);\n```","options":["`TypeError`","`2 + 8 items`","`-6 items`","`10 items`"],"answer":3,"explanation":"It logs `10 items`."},{"prompt":"What does this log?\n\n```js\nconsole.log(`${5 + 7} items`);\n```","options":["`TypeError`","`5 + 7 items`","`-2 items`","`12 items`"],"answer":3,"explanation":"It logs `12 items`."},{"prompt":"What does this log?\n\n```js\nconsole.log(`${1 + 6} items`);\n```","options":["`7 items`","`TypeError`","`-5 items`","`1 + 6 items`"],"answer":0,"explanation":"It logs `7 items`."},{"prompt":"What does this log?\n\n```js\nconsole.log(`${7 + 2} items`);\n```","options":["`5 items`","`7 + 2 items`","`9 items`","`TypeError`"],"answer":2,"explanation":"It logs `9 items`."},{"prompt":"What does this log?\n\n```js\nconsole.log(`${8 + 7} items`);\n```","options":["`1 items`","`8 + 7 items`","`15 items`","`TypeError`"],"answer":2,"explanation":"It logs `15 items`."}]
---
# Predict the Output: Template literals #3

Inside `` `${…}` `` any expression is evaluated and converted to a string, including function calls and ternaries.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
