---
slug: "js-predict-template-2"
title: "Predict the Output: Template literals #2"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(`${2 + 4} items`);\n```","options":["`6 items`","`TypeError`","`-2 items`","`2 + 4 items`"],"answer":0,"explanation":"It logs `6 items`."},{"prompt":"What does this log?\n\n```js\nconsole.log(`${\"Ada\".length > 4 ? \"long\" : \"short\"} name`);\n```","options":["`TypeError`","`short name`","`\"Ada\".length > 4 ? \"long\" : \"short\" name`","`long name`"],"answer":1,"explanation":"It logs `short name`."},{"prompt":"What does this log?\n\n```js\nconsole.log(`${6 + 8} items`);\n```","options":["`14 items`","`TypeError`","`6 + 8 items`","`-2 items`"],"answer":0,"explanation":"It logs `14 items`."},{"prompt":"What does this log?\n\n```js\nconsole.log(`${5 + 2} items`);\n```","options":["`TypeError`","`3 items`","`5 + 2 items`","`7 items`"],"answer":3,"explanation":"It logs `7 items`."},{"prompt":"What does this log?\n\n```js\nconsole.log(`${4 + 3} items`);\n```","options":["`TypeError`","`7 items`","`1 items`","`4 + 3 items`"],"answer":1,"explanation":"It logs `7 items`."}]
---
# Predict the Output: Template literals #2

Inside `` `${…}` `` any expression is evaluated and converted to a string, including function calls and ternaries.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
