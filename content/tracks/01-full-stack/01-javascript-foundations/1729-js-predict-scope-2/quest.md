---
slug: "js-predict-scope-2"
title: "Predict the Output: Block scope #2"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nlet x = 3;\n{\n  let x = 4;\n  x += 1;\n}\nif (true) {\n  x += 4;\n}\nconsole.log(x);\n```","options":["`3`","`7`","`TypeError`","`9`"],"answer":1,"explanation":"It logs `7`."},{"prompt":"What does this log?\n\n```js\nlet x = 9;\n{\n  let x = 6;\n  x += 1;\n}\nif (true) {\n  x += 6;\n}\nconsole.log(x);\n```","options":["`TypeError`","`13`","`15`","`9`"],"answer":2,"explanation":"It logs `15`."},{"prompt":"What does this log?\n\n```js\nlet x = 2;\n{\n  let x = 6;\n  x += 1;\n}\nif (true) {\n  x += 6;\n}\nconsole.log(x);\n```","options":["`13`","`2`","`8`","`TypeError`"],"answer":2,"explanation":"It logs `8`."},{"prompt":"What does this log?\n\n```js\nlet x = 4;\n{\n  let x = 5;\n  x += 1;\n}\nif (true) {\n  x += 5;\n}\nconsole.log(x);\n```","options":["`TypeError`","`11`","`9`","`4`"],"answer":2,"explanation":"It logs `9`."},{"prompt":"What does this log?\n\n```js\nlet x = 4;\n{\n  let x = 7;\n  x += 1;\n}\nif (true) {\n  x += 7;\n}\nconsole.log(x);\n```","options":["`4`","`11`","`TypeError`","`15`"],"answer":1,"explanation":"It logs `11`."}]
---
# Predict the Output: Block scope #2

`let` and `const` are block-scoped: a variable declared inside `{ }` shadows an outer one with the same name only inside that block.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
