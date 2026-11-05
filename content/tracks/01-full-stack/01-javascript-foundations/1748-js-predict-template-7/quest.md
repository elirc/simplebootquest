---
slug: "js-predict-template-7"
title: "Predict the Output: Template literals #7"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(`${1 + 1} items`);\n```","options":["`0 items`","`2 items`","`1 + 1 items`","`TypeError`"],"answer":1,"explanation":"It logs `2 items`."},{"prompt":"What does this log?\n\n```js\nconsole.log(`${9 + 4} items`);\n```","options":["`9 + 4 items`","`13 items`","`5 items`","`TypeError`"],"answer":1,"explanation":"It logs `13 items`."},{"prompt":"What does this log?\n\n```js\nconsole.log(`${2 + 1} items`);\n```","options":["`TypeError`","`2 + 1 items`","`3 items`","`1 items`"],"answer":2,"explanation":"It logs `3 items`."},{"prompt":"What does this log?\n\n```js\nconsole.log(`${6 + 5} items`);\n```","options":["`1 items`","`TypeError`","`11 items`","`6 + 5 items`"],"answer":2,"explanation":"It logs `11 items`."},{"prompt":"What does this log?\n\n```js\nconsole.log(`${6 + 6} items`);\n```","options":["`TypeError`","`12 items`","`6 + 6 items`","`0 items`"],"answer":1,"explanation":"It logs `12 items`."}]
---
# Predict the Output: Template literals #7

Inside `` `${…}` `` any expression is evaluated and converted to a string, including function calls and ternaries.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
