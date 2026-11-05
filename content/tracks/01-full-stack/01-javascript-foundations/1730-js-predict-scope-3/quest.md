---
slug: "js-predict-scope-3"
title: "Predict the Output: Block scope #3"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nlet x = 1;\n{\n  let x = 8;\n  x += 1;\n}\nif (true) {\n  x += 8;\n}\nconsole.log(x);\n```","options":["`1`","`17`","`TypeError`","`9`"],"answer":3,"explanation":"It logs `9`."},{"prompt":"What does this log?\n\n```js\nlet x = 5;\n{\n  let x = 7;\n  x += 1;\n}\nif (true) {\n  x += 7;\n}\nconsole.log(x);\n```","options":["`5`","`15`","`12`","`TypeError`"],"answer":2,"explanation":"It logs `12`."},{"prompt":"What does this log?\n\n```js\nlet x = 8;\n{\n  let x = 3;\n  x += 1;\n}\nif (true) {\n  x += 3;\n}\nconsole.log(x);\n```","options":["`11`","`8`","`7`","`TypeError`"],"answer":0,"explanation":"It logs `11`."},{"prompt":"What does this log?\n\n```js\nlet x = 1;\n{\n  let x = 7;\n  x += 1;\n}\nif (true) {\n  x += 7;\n}\nconsole.log(x);\n```","options":["`8`","`15`","`1`","`TypeError`"],"answer":0,"explanation":"It logs `8`."},{"prompt":"What does this log?\n\n```js\nlet x = 6;\n{\n  let x = 7;\n  x += 1;\n}\nif (true) {\n  x += 7;\n}\nconsole.log(x);\n```","options":["`15`","`13`","`TypeError`","`6`"],"answer":1,"explanation":"It logs `13`."}]
---
# Predict the Output: Block scope #3

`let` and `const` are block-scoped: a variable declared inside `{ }` shadows an outer one with the same name only inside that block.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
