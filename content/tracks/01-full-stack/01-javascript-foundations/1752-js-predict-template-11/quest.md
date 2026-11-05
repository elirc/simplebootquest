---
slug: "js-predict-template-11"
title: "Predict the Output: Template literals #11"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(`${8 + 9} items`);\n```","options":["`8 + 9 items`","`-1 items`","`17 items`","`TypeError`"],"answer":2,"explanation":"It logs `17 items`."},{"prompt":"What does this log?\n\n```js\nconsole.log(`${4 + 1} items`);\n```","options":["`5 items`","`4 + 1 items`","`TypeError`","`3 items`"],"answer":0,"explanation":"It logs `5 items`."},{"prompt":"What does this log?\n\n```js\nconsole.log(`${9 + 3} items`);\n```","options":["`6 items`","`9 + 3 items`","`12 items`","`TypeError`"],"answer":2,"explanation":"It logs `12 items`."},{"prompt":"What does this log?\n\n```js\nconsole.log(`${6 + 4} items`);\n```","options":["`6 + 4 items`","`10 items`","`2 items`","`TypeError`"],"answer":1,"explanation":"It logs `10 items`."},{"prompt":"What does this log?\n\n```js\nconsole.log(`${9 + 8} items`);\n```","options":["`17 items`","`1 items`","`TypeError`","`9 + 8 items`"],"answer":0,"explanation":"It logs `17 items`."}]
---
# Predict the Output: Template literals #11

Inside `` `${…}` `` any expression is evaluated and converted to a string, including function calls and ternaries.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
