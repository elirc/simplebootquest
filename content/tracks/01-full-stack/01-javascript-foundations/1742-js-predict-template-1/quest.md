---
slug: "js-predict-template-1"
title: "Predict the Output: Template literals #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nconsole.log(`${\"Grace\".length > 4 ? \"long\" : \"short\"} name`);\n```","options":["`TypeError`","`short name`","`long name`","`\"Grace\".length > 4 ? \"long\" : \"short\" name`"],"answer":2,"explanation":"It logs `long name`."},{"prompt":"What does this log?\n\n```js\nconsole.log(`${\"Linus\".length > 4 ? \"long\" : \"short\"} name`);\n```","options":["`\"Linus\".length > 4 ? \"long\" : \"short\" name`","`short name`","`long name`","`TypeError`"],"answer":2,"explanation":"It logs `long name`."},{"prompt":"What does this log?\n\n```js\nconsole.log(`${7 + 8} items`);\n```","options":["`7 + 8 items`","`15 items`","`-1 items`","`TypeError`"],"answer":1,"explanation":"It logs `15 items`."},{"prompt":"What does this log?\n\n```js\nconsole.log(`${4 + 6} items`);\n```","options":["`10 items`","`-2 items`","`4 + 6 items`","`TypeError`"],"answer":0,"explanation":"It logs `10 items`."},{"prompt":"What does this log?\n\n```js\nconsole.log(`${7 + 3} items`);\n```","options":["`4 items`","`10 items`","`7 + 3 items`","`TypeError`"],"answer":1,"explanation":"It logs `10 items`."}]
---
# Predict the Output: Template literals #1

Inside `` `${…}` `` any expression is evaluated and converted to a string, including function calls and ternaries.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
