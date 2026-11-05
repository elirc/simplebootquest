---
slug: "js-predict-scope-14"
title: "Predict the Output: Block scope #14"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nlet x = 1;\n{\n  let x = 1;\n  x += 1;\n}\nif (true) {\n  x += 1;\n}\nconsole.log(x);\n```","options":["`SyntaxError`","`2`","`TypeError`","`3`"],"answer":1,"explanation":"It logs `2`."},{"prompt":"What does this log?\n\n```js\nlet x = 3;\n{\n  let x = 3;\n  x += 1;\n}\nif (true) {\n  x += 3;\n}\nconsole.log(x);\n```","options":["`TypeError`","`7`","`3`","`6`"],"answer":3,"explanation":"It logs `6`."},{"prompt":"What does this log?\n\n```js\nlet x = 8;\n{\n  let x = 5;\n  x += 1;\n}\nif (true) {\n  x += 5;\n}\nconsole.log(x);\n```","options":["`13`","`11`","`TypeError`","`8`"],"answer":0,"explanation":"It logs `13`."},{"prompt":"What does this log?\n\n```js\nlet x = 2;\n{\n  let x = 5;\n  x += 1;\n}\nif (true) {\n  x += 5;\n}\nconsole.log(x);\n```","options":["`7`","`TypeError`","`2`","`11`"],"answer":0,"explanation":"It logs `7`."},{"prompt":"What does this log?\n\n```js\nlet x = 8;\n{\n  let x = 8;\n  x += 1;\n}\nif (true) {\n  x += 8;\n}\nconsole.log(x);\n```","options":["`8`","`16`","`TypeError`","`17`"],"answer":1,"explanation":"It logs `16`."}]
---
# Predict the Output: Block scope #14

`let` and `const` are block-scoped: a variable declared inside `{ }` shadows an outer one with the same name only inside that block.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
