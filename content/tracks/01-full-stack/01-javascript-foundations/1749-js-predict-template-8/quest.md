---
slug: "js-predict-template-8"
title: "Predict the Output: Template literals #8"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(`${4 + 7} items`);\n```","options":["`-3 items`","`TypeError`","`4 + 7 items`","`11 items`"],"answer":3,"explanation":"It logs `11 items`."},{"prompt":"What does this log?\n\n```js\nconsole.log(`${4 + 9} items`);\n```","options":["`4 + 9 items`","`13 items`","`TypeError`","`-5 items`"],"answer":1,"explanation":"It logs `13 items`."},{"prompt":"What does this log?\n\n```js\nconsole.log(`${7 + 9} items`);\n```","options":["`-2 items`","`7 + 9 items`","`16 items`","`TypeError`"],"answer":2,"explanation":"It logs `16 items`."},{"prompt":"What does this log?\n\n```js\nconsole.log(`${4 + 8} items`);\n```","options":["`TypeError`","`4 + 8 items`","`-4 items`","`12 items`"],"answer":3,"explanation":"It logs `12 items`."},{"prompt":"What does this log?\n\n```js\nconsole.log(`${6 + 7} items`);\n```","options":["`TypeError`","`13 items`","`6 + 7 items`","`-1 items`"],"answer":1,"explanation":"It logs `13 items`."}]
---
# Predict the Output: Template literals #8

Inside `` `${…}` `` any expression is evaluated and converted to a string, including function calls and ternaries.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
