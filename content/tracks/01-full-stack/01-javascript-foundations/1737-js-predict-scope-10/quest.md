---
slug: "js-predict-scope-10"
title: "Predict the Output: Block scope #10"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nlet x = 9;\n{\n  let x = 2;\n  x += 1;\n}\nif (true) {\n  x += 2;\n}\nconsole.log(x);\n```","options":["`11`","`5`","`TypeError`","`9`"],"answer":0,"explanation":"It logs `11`."},{"prompt":"What does this log?\n\n```js\nlet x = 6;\n{\n  let x = 2;\n  x += 1;\n}\nif (true) {\n  x += 2;\n}\nconsole.log(x);\n```","options":["`6`","`5`","`8`","`TypeError`"],"answer":2,"explanation":"It logs `8`."},{"prompt":"What does this log?\n\n```js\nlet x = 5;\n{\n  let x = 9;\n  x += 1;\n}\nif (true) {\n  x += 9;\n}\nconsole.log(x);\n```","options":["`14`","`5`","`TypeError`","`19`"],"answer":0,"explanation":"It logs `14`."},{"prompt":"What does this log?\n\n```js\nlet x = 5;\n{\n  let x = 3;\n  x += 1;\n}\nif (true) {\n  x += 3;\n}\nconsole.log(x);\n```","options":["`TypeError`","`7`","`8`","`5`"],"answer":2,"explanation":"It logs `8`."},{"prompt":"What does this log?\n\n```js\nlet x = 6;\n{\n  let x = 1;\n  x += 1;\n}\nif (true) {\n  x += 1;\n}\nconsole.log(x);\n```","options":["`3`","`SyntaxError`","`7`","`TypeError`"],"answer":2,"explanation":"It logs `7`."}]
---
# Predict the Output: Block scope #10

`let` and `const` are block-scoped: a variable declared inside `{ }` shadows an outer one with the same name only inside that block.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
