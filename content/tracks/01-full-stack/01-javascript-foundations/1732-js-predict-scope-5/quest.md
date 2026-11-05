---
slug: "js-predict-scope-5"
title: "Predict the Output: Block scope #5"
type: "quiz"
xp: 10
optional: true
section: "Practice: Predict the Output"
questions: [{"prompt":"What does this log?\n\n```js\nlet x = 5;\n{\n  let x = 6;\n  x += 1;\n}\nif (true) {\n  x += 6;\n}\nconsole.log(x);\n```","options":["`TypeError`","`11`","`13`","`5`"],"answer":1,"explanation":"It logs `11`."},{"prompt":"What does this log?\n\n```js\nlet x = 8;\n{\n  let x = 4;\n  x += 1;\n}\nif (true) {\n  x += 4;\n}\nconsole.log(x);\n```","options":["`9`","`TypeError`","`12`","`8`"],"answer":2,"explanation":"It logs `12`."},{"prompt":"What does this log?\n\n```js\nlet x = 2;\n{\n  let x = 3;\n  x += 1;\n}\nif (true) {\n  x += 3;\n}\nconsole.log(x);\n```","options":["`TypeError`","`7`","`5`","`2`"],"answer":2,"explanation":"It logs `5`."},{"prompt":"What does this log?\n\n```js\nlet x = 2;\n{\n  let x = 8;\n  x += 1;\n}\nif (true) {\n  x += 8;\n}\nconsole.log(x);\n```","options":["`17`","`2`","`10`","`TypeError`"],"answer":2,"explanation":"It logs `10`."},{"prompt":"What does this log?\n\n```js\nlet x = 3;\n{\n  let x = 8;\n  x += 1;\n}\nif (true) {\n  x += 8;\n}\nconsole.log(x);\n```","options":["`TypeError`","`11`","`17`","`3`"],"answer":1,"explanation":"It logs `11`."}]
---
# Predict the Output: Block scope #5

`let` and `const` are block-scoped: a variable declared inside `{ }` shadows an outer one with the same name only inside that block.

Read each snippet and predict **exactly** what it logs. Trace it line by line in your head, or on paper, before you look at the options. When a line logs several values they're shown separated by spaces, and several `console.log` calls are shown in order separated by ⏎.
