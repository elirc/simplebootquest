---
slug: "js-predict-template-16"
title: "Predict the Output: Template literals #16"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(`${2 + 7} items`);\n```","options":["`-5 items`","`9 items`","`2 + 7 items`","`TypeError`"],"answer":1,"explanation":"It logs `9 items`."},{"prompt":"What does this log?\n\n```js\nconsole.log(`${9 + 9} items`);\n```","options":["`9 + 9 items`","`18 items`","`0 items`","`TypeError`"],"answer":1,"explanation":"It logs `18 items`."},{"prompt":"What does this log?\n\n```js\nconsole.log(`${1 + 2} items`);\n```","options":["`-1 items`","`TypeError`","`3 items`","`1 + 2 items`"],"answer":2,"explanation":"It logs `3 items`."},{"prompt":"What does this log?\n\n```js\nconsole.log(`${5 + 5} items`);\n```","options":["`TypeError`","`0 items`","`10 items`","`5 + 5 items`"],"answer":2,"explanation":"It logs `10 items`."},{"prompt":"What does this log?\n\n```js\nconsole.log(`${4 + 4} items`);\n```","options":["`4 + 4 items`","`8 items`","`0 items`","`TypeError`"],"answer":1,"explanation":"It logs `8 items`."}]
---
# Predict the Output: Template literals #16

Inside `` `${…}` `` any expression is evaluated and converted to a string, including function calls and ternaries.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
