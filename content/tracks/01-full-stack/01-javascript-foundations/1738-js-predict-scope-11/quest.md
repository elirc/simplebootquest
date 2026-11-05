---
slug: "js-predict-scope-11"
title: "Predict the Output: Block scope #11"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nlet x = 5;\n{\n  let x = 1;\n  x += 1;\n}\nif (true) {\n  x += 1;\n}\nconsole.log(x);\n```","options":["`SyntaxError`","`3`","`TypeError`","`6`"],"answer":3,"explanation":"It logs `6`."},{"prompt":"What does this log?\n\n```js\nlet x = 2;\n{\n  let x = 7;\n  x += 1;\n}\nif (true) {\n  x += 7;\n}\nconsole.log(x);\n```","options":["`9`","`15`","`2`","`TypeError`"],"answer":0,"explanation":"It logs `9`."},{"prompt":"What does this log?\n\n```js\nlet x = 1;\n{\n  let x = 5;\n  x += 1;\n}\nif (true) {\n  x += 5;\n}\nconsole.log(x);\n```","options":["`6`","`TypeError`","`11`","`1`"],"answer":0,"explanation":"It logs `6`."},{"prompt":"What does this log?\n\n```js\nlet x = 4;\n{\n  let x = 4;\n  x += 1;\n}\nif (true) {\n  x += 4;\n}\nconsole.log(x);\n```","options":["`8`","`TypeError`","`4`","`9`"],"answer":0,"explanation":"It logs `8`."},{"prompt":"What does this log?\n\n```js\nlet x = 7;\n{\n  let x = 7;\n  x += 1;\n}\nif (true) {\n  x += 7;\n}\nconsole.log(x);\n```","options":["`TypeError`","`7`","`14`","`15`"],"answer":2,"explanation":"It logs `14`."}]
---
# Predict the Output: Block scope #11

`let` and `const` are block-scoped: a variable declared inside `{ }` shadows an outer one with the same name only inside that block.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
