---
slug: "js-predict-template-5"
title: "Predict the Output: Template literals #5"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(`${6 + 9} items`);\n```","options":["`6 + 9 items`","`15 items`","`-3 items`","`TypeError`"],"answer":1,"explanation":"It logs `15 items`."},{"prompt":"What does this log?\n\n```js\nconsole.log(`${4 + 2} items`);\n```","options":["`2 items`","`TypeError`","`6 items`","`4 + 2 items`"],"answer":2,"explanation":"It logs `6 items`."},{"prompt":"What does this log?\n\n```js\nconsole.log(`${6 + 2} items`);\n```","options":["`4 items`","`6 + 2 items`","`TypeError`","`8 items`"],"answer":3,"explanation":"It logs `8 items`."},{"prompt":"What does this log?\n\n```js\nconsole.log(`${8 + 5} items`);\n```","options":["`8 + 5 items`","`TypeError`","`13 items`","`3 items`"],"answer":2,"explanation":"It logs `13 items`."},{"prompt":"What does this log?\n\n```js\nconsole.log(`${8 + 8} items`);\n```","options":["`TypeError`","`0 items`","`16 items`","`8 + 8 items`"],"answer":2,"explanation":"It logs `16 items`."}]
---
# Predict the Output: Template literals #5

Inside `` `${…}` `` any expression is evaluated and converted to a string, including function calls and ternaries.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
