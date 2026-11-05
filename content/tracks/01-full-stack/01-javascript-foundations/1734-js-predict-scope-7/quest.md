---
slug: "js-predict-scope-7"
title: "Predict the Output: Block scope #7"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nlet x = 1;\n{\n  let x = 6;\n  x += 1;\n}\nif (true) {\n  x += 6;\n}\nconsole.log(x);\n```","options":["`TypeError`","`1`","`7`","`13`"],"answer":2,"explanation":"It logs `7`."},{"prompt":"What does this log?\n\n```js\nlet x = 5;\n{\n  let x = 8;\n  x += 1;\n}\nif (true) {\n  x += 8;\n}\nconsole.log(x);\n```","options":["`5`","`13`","`TypeError`","`17`"],"answer":1,"explanation":"It logs `13`."},{"prompt":"What does this log?\n\n```js\nlet x = 8;\n{\n  let x = 1;\n  x += 1;\n}\nif (true) {\n  x += 1;\n}\nconsole.log(x);\n```","options":["`TypeError`","`3`","`9`","`SyntaxError`"],"answer":2,"explanation":"It logs `9`."},{"prompt":"What does this log?\n\n```js\nlet x = 6;\n{\n  let x = 9;\n  x += 1;\n}\nif (true) {\n  x += 9;\n}\nconsole.log(x);\n```","options":["`19`","`15`","`6`","`TypeError`"],"answer":1,"explanation":"It logs `15`."},{"prompt":"What does this log?\n\n```js\nlet x = 1;\n{\n  let x = 2;\n  x += 1;\n}\nif (true) {\n  x += 2;\n}\nconsole.log(x);\n```","options":["`TypeError`","`5`","`3`","`1`"],"answer":2,"explanation":"It logs `3`."}]
---
# Predict the Output: Block scope #7

`let` and `const` are block-scoped: a variable declared inside `{ }` shadows an outer one with the same name only inside that block.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
